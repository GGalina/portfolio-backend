require('dotenv').config();
const nodemailer = require('nodemailer');

const { GMAIL_ADDRESS_FROM, GMAIL_APP_PASSWORD, GMAIL_ADDRESS_TO} = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_ADDRESS_FROM,
    pass: GMAIL_APP_PASSWORD,
  },
});

const sendEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: GMAIL_ADDRESS_FROM, 
      to: GMAIL_ADDRESS_TO, 
      subject: 'This email generated from Halyna Hryn Portfolio website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendEmail };