require('dotenv').config();
const { google } = require('googleapis');

const {
  GMAIL_ADDRESS_FROM,
  GMAIL_ADDRESS_TO,
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
} = process.env;

// OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET
);

oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

const sendEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    const emailBody = [
      `From: "Portfolio Contact" <${GMAIL_ADDRESS_FROM}>`,
      `To: ${GMAIL_ADDRESS_TO}`,
      `Subject: Message from Halyna Hryn Portfolio Website`,
      'Content-Type: text/plain; charset="UTF-8"',
      '',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    ].join('\n');

    const encodedMessage = Buffer.from(emailBody)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });

    res.status(200).json({ message: 'Email sent successfully via Gmail API' });
  } catch (error) {
    console.error('Error sending email via Gmail API:', error);
    next({ status: 500, message: 'Failed to send email', details: error.message });
  }
};

module.exports = { sendEmail };