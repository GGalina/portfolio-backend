require('dotenv').config();
const nodemailer = require('nodemailer');

const {
  GMAIL_ADDRESS_FROM,
  GMAIL_ADDRESS_TO,
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
} = process.env;

// Create OAuth2 transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: GMAIL_ADDRESS_FROM,
    clientId: GMAIL_CLIENT_ID,
    clientSecret: GMAIL_CLIENT_SECRET,
    refreshToken: GMAIL_REFRESH_TOKEN,
  },
});

const sendEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Build email content
    const mailOptions = {
      from: GMAIL_ADDRESS_FROM,
      to: GMAIL_ADDRESS_TO,
      subject: 'Message from Halyna Hryn Portfolio Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    next({
      status: 500,
      message: 'Failed to send email',
      details: error.message,
    });
  }
};

module.exports = { sendEmail };