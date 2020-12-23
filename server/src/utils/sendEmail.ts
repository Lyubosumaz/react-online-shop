import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, html: string) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    // console.log('testAcc', testAccount);
    // https://ethereal.email/message/X-ONLuv2FWD8YorlX-ONL1D19GIIji6rAAAAARcSmc9ZP4EX78bJTzHe0z4

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tyuti3cc7tgme7ui@ethereal.email', // generated ethereal user
            pass: 'eqz7917gTPp5qk4pQE', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"John Doe" <tom@example.com>', // sender address
        to, // list of receivers
        subject: 'Change password', // Subject line
        html, // plain text body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
