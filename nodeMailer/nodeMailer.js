
//require nodemailer for sent a mail.
var nodemailer = require('nodemailer');

//we are create a mail transporter which contain services and auth information
var transporter = nodemailer.createTransport({
    //service like ghmail,hotmail,yahoo etc...
    service: 'gmail',
    auth: {
        user: 'abc9981@gmail.com',
        pass: 'yourpass'
    }
});


// we crete a object mailOptions which contains from,to,subject and text
var mailOptions = {
    from: 'abc9981@gmail.com',
    //we can sent a mail more than one user
    //to: 'abc@gmail.com,abc2@gmail.com',
    to: 'abc@gmail.com',
    subject: 'Regarding Attendance review',
    //instead of text we are free to write a html
   // html : '<h1>Respected sir/mam, your son attendanse in less than 75%</h1>',
    text: 'Respected sir/mam, your son attendanse in less than 75%'
};

//we sent a mail using mail transporter if any error then it log errror else it gives a message mail sent.
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
