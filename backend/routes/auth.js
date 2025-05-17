// routes/auth.js

const express = require('express');
const router = express.Router();

// Corrected path to controller file
const {userRegistrationDet,getAllUserData}=require('../controllers/controller')

// Middleware to verify token


// Routes
router.post('/register', userRegistrationDet);
router.get('/allUser',getAllUserData)

module.exports = router;



