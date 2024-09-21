const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const dns = require("dns");

const {
  RecaptchaEnterpriseServiceClient,
} = require("@google-cloud/recaptcha-enterprise");
const { resolve } = require("path");
const { error } = require("console");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 720 * 60 * 1000, // 12 hours
  max: 3, // Limit each IP to 3 requests per windowMs
  message: "Too many messages sent from this IP, please try again later.",
});

app.use("/send-email", limiter);

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const checkDomain = (domain) => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (error, addresses) => {
      if (error || addresses.length === 0) {
        reject(new Error("Invalid Domain"));
      } else {
        resolve(true);
      }
    });
  });
};

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message, token, honey } = req.body;

  // Check for honeypot
  if (honey) {
    return res.status(400).send("Spam detected!");
  }

  if (!isValidEmail(email)) {
    return res.status(400).send("Invalid Email format");
  }

  const domain = email.split("@")[1];
  try {
    await checkDomain(domain);
  } catch (error) {
    return res.status(400).send("Email domain is not valid");
  }

  async function createAssessment({
    projectID = `${process.env.PROJECT_ID}`,
    recaptchaKey = `${process.env.RECAPTCHA_KEY_SECRET}`,
    token = "action-token",
    recaptchaAction = "action-name",
  }) {
    // Create the reCAPTCHA client.
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);

    // Build the assessment request.
    const request = {
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey,
        },
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);

    // Check if the token is valid.
    if (!response.tokenProperties.valid) {
      console.log(
        The`CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
      );
      return null;
    }

    // Check if the expected action was executed.
    // The action property is set by user client in the grecaptcha.enterprise.execute() method.
    if (response.tokenProperties.action === recaptchaAction) {
      // Get the risk score and the reason(s).
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });

      return response.riskAnalysis.score;
    } else {
      console.log(
        "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
      );
      return null;
    }
  }

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_GMAIL,
      pass: process.env.NODEMAILER_SECRET_CODE,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_GMAIL,
    to: process.env.NODEMAILER_GMAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.use("/", (req, res) => {
  res.send("HEllo");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
