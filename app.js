require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mailRouter = require('./mailRouter');

const app = express();

// Allowed origins from .env (comma-separated)
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Mount router
app.use('/', mailRouter);

app.use((req, res) => res.status(404).json({ message: 'Not found' }));

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error', details } = err;
  res.status(status).json({ message, details });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;