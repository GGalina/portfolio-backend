require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        console.log(process.env.SENDGRID_API_KEY);
        const contact = {
            to: SENDGRID_TO,
            from: SENDGRID_FROM,
            subject: "This email generated from Halyna Hryn Portfolio website",
            text: `Name: ${name}\n Email: ${email}\n  Message: ${message} `,
        }
        
        await sgMail.send(contact);

        res.status(200).json({
            message: 'Email sent'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    sendEmail
};