function mailer(uemail, usubject, umsg){
    var nodemailer = require('nodemailer');

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nhldan45@gmail.com',
            pass: 'survival123'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'A Line was Dropped<foo@blurdybloop.com>', // sender address
        to: 'dev.persaud@mail.utoronto.ca', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: uemail+usubject+umsg, // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
}