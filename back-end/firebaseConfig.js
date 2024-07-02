const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp(serviceAccount);

module.exports = admin;