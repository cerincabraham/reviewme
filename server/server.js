const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const fs = require('fs'); // For reading the template file
const path = require('path');
const cors = require('cors');

const app = express();
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
    //const templatePath = path.join(__dirname, './views/contactInfoemailTemplate.handlebars');
    // let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');



    // Replace placeholders with actual content
    //htmlTemplate = htmlTemplate.replace('{{recipientName}}', name);
    //htmlTemplate = htmlTemplate.replace('{{googleLink}}', googlelink);
    //htmlTemplate = htmlTemplate.replace('{{facebookLink}}', facebooklink);





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

    // Set up handlebars template engine with Nodemailer
    transporter.use(
        'compile',
        hbs({
            viewEngine: {
                extName: '.handlebars',
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
            extName: '.handlebars',
        })
    );

    // Email options
    const mailOptions = {
        from: process.env.SMTP_USER,        // Sender address
        to: to,                             // List of receivers
        subject: "KarakaFamilyHealth Review Links",                   // Subject line
        template: 'contactInfoemailTemplate', // Use the Handlebars template                    
        context: {
            recipientName: name,
            googleLink: googlelink,
            facebookLink: facebooklink,
        },
        // Attach the images with content IDs (cid)
        attachments: [
            {
                filename: 'logo.png',
                path: 'public/images/logo.jpg', // Path to the logo image
                cid: 'logo@nodemailer',         // Use this in the HTML template
            },
            {
                filename: 'google.png',
                path: 'public/images/google.png',
                cid: 'google@nodemailer',       // Use this in the HTML template
            },
            {
                filename: 'facebook.png',
                path: 'public/images/facebook.png',
                cid: 'facebook@nodemailer',     // Use this in the HTML template
            },
        ],
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