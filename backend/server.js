const express = require('express');
const { exec } = require('child_process');
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

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST1,         // e.g., "smtp.gmail.com"
        port: process.env.SMTP_PORT1,         // e.g., 587 for Gmail
        secure: false,                       // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER1,       // Your email address
            pass: process.env.SMTP_PASS1,       // Your email password or app password
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
        from: process.env.SMTP_USER1,        // Sender address
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

app.post('/send-feedback', async (req, res) => {
    const { client, name, message } = req.body;
    const to = 'info@karakafamilyhealth.co.nz';
    const subject = `KarakaFamilyHealth Feedback From ${name}`;
    console.log(req.body);

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST2,         // e.g., "smtp.gmail.com"
        port: process.env.SMTP_PORT2,         // e.g., 587 for Gmail
        secure: false,                       // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER2,       // Your email address
            pass: process.env.SMTP_PASS2,       // Your email password or app password
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
        from: process.env.SMTP_USER2,        // Sender address
        to: to,                             // List of receivers
        subject: subject,                   // Subject line
        template: 'feedbackemailTemplate', // Use the Handlebars template                    
        context: {
            clientemail: client,
            clientName: name,
            message: message,
        },
        // Attach the images with content IDs (cid)
        attachments: [
            {
                filename: 'logo.png',
                path: 'public/images/logo.jpg', // Path to the logo image
                cid: 'logo@nodemailer',         // Use this in the HTML template
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

app.post('/send-update', async (req, res) => {
    const { nhi, firstname, surname, mobile, email, dob, street, suburb, city, post, kinname, relation, kinmobile, kinphone } = req.body;
    const to = 'info@karakafamilyhealth.co.nz';
    const subject = `Personal & Emergency Contact Update From ${firstname}`;
    const cc = email;
    console.log(req.body);


    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST2,         // e.g., "smtp.gmail.com"
        port: process.env.SMTP_PORT2,         // e.g., 587 for Gmail
        secure: false,                       // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER2,       // Your email address
            pass: process.env.SMTP_PASS2,       // Your email password or app password
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
        from: process.env.SMTP_USER2,        // Sender address
        to: to,                             // List of receivers
        subject: subject,                   // Subject line
        template: 'updateemailTemplate', // Use the Handlebars template                    
        context: {
            nhi: nhi,
            firstname: firstname,
            surname: surname,
            mobile: mobile,
            email: email,
            dob: dob,
            street: street,
            suburb: suburb,
            city: city,
            post: post,
            kinname: kinname,
            relation: relation,
            kinmobile: kinmobile,
            kinphone: kinphone,
        },
        // Attach the images with content IDs (cid)
        attachments: [
            {
                filename: 'logo.png',
                path: 'public/images/logo.jpg', // Path to the logo image
                cid: 'logo@nodemailer',         // Use this in the HTML template
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

//Route to send wifi status
app.get('/wifi-status', (req, res) => {
    exec('iwgetid', (error, stdout) => {
        if (error) {
            return res.json({ status: 'disconnected' });
        }
        if (stdout.includes('ESSID')) {
            return res.json({ status: 'connected' });
        } else {
            return res.json({ status: 'disconnected' });
        }
    });
});


app.listen(5000, () => { console.log("Server started on port 5000") });