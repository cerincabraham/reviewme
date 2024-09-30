const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
const fs = require('fs'); // For reading the template file
const path = require('path');

require('dotenv').config();

app.use(cors());
app.use(express.json());


app.get('/api', (req, res) => {
    res.json({ "users": ["userOne, userTwo,userThree"] });
});


// Route to send email
app.post('/send-email', async (req, res) => {
    const { to, name, googlelink, facebooklink } = req.body;
    console.log(req.body);

    // Load the email template
    const templatePath = path.join(__dirname, 'contactInfoemailTemplate.html');
    let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders with actual content
    htmlTemplate = htmlTemplate.replace('{{recipientName}}', name);
    htmlTemplate = htmlTemplate.replace('{{googleLink}}', googlelink);
    htmlTemplate = htmlTemplate.replace('{{facebookLink}}', facebooklink);



    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,         // e.g., "smtp.gmail.com"
        port: process.env.SMTP_PORT,         // e.g., 587 for Gmail
        secure: false,                       // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,       // Your email address
            pass: process.env.SMTP_PASS,       // Your email password or app password
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.SMTP_USER,        // Sender address
        to: to,                             // List of receivers
        subject: "KarakaFamilyHealth Review Links",                   // Subject line
        html: htmlTemplate,                       // Set the HTML template as the email body
    };


    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).send('Email sent successfully');
        }
    });

});




app.listen(5000, () => { console.log("Server started on port 5000") });