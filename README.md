# Email Sender Backend

This Node.js backend application allows you to send emails via an API. It uses Nodemailer with Gmail OAuth2 for sending emails.

The backend service for this project is deployed and available at: http://portfolio-backend-production-8bf4.up.railway.app

## Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager) installed
- A Gmail account for sending emails

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
GMAIL_ADDRESS_FROM=your-email@gmail.com
GMAIL_ADDRESS_TO=recipient-email@gmail.com
GMAIL_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your-google-client-secret
GMAIL_REFRESH_TOKEN=your-google-refresh-token
ALLOWED_ORIGINS=http://localhost:3000,https://your-frontend-domain.com
PORT=8080
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

Example Response:
```json
{
  "message": "Email sent successfully"
}
```