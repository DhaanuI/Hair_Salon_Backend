const nodemailer = require("nodemailer");
require("dotenv").config()

  


async function sendEmail(data) {
   //   transpoter to send/transport email

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'amanmandal644@gmail.com',
      pass: process.env.GOOGLEKEY
  }
  });

  transporter.sendMail({
    to: `${data.email}`,
    from: 'amangnc644@gmail.com',
    subject: data.subject,
    html: data.body,
  })
  .then(()=>console.log('mail sent successfully'))
  .catch((err)=>console.log("err",err))

}

module.exports = {sendEmail,}

