# Email Sender Backend

This is a Node.js backend application for sending emails from a contact form.
It uses Nodemailer with Gmail SMTP authentication (Google App Password) to securely send emails.

The backend service for this project is deployed and available at: http://portfolio-backend-production-8bf4.up.railway.app

## Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager) installed
- A Gmail account with 2-Step Verification enabled
- A Google App Password for email sending

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/GGalina/portfolio-backend.git
```

2. Navigate to the project directory.

```bash
cd portfolio-backend
```

3. Install dependencies.

```bash
npm install
```

## Configuration

Create a .env file with your configuration setting

```javascript
PORT=3000
GMAIL_ADDRESS_FROM=yourgmail@gmail.com
GMAIL_APP_PASSWORD=your_google_app_password
GMAIL_ADDRESS_TO=yourgmail@gmail.com
ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend-domain.com
```

## Usage

Start the server.

```bash
npm start
```
The server will be running at http://localhost:3000 by default.

## API Endpoints
### Send Email
- URL: /send-email
- Method: POST
- Headers:
 -- Content-Type: application/json
- Body:

```json
{
  "name": "John Smith",
  "email": "smith@example.com",
  "message": "Hi, I want to work with you"
}
```

Make a POST request to /send-email with the necessary details in the request body to send an email.
