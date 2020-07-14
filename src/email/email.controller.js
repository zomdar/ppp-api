import nodemailer from "nodemailer"
import config from '../config'

export const notifyEmail = async (emailAddress, token) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.address,
      pass: config.email.password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"ppp-api 👻" <zomdar@gmail.com>', // sender address
    to: emailAddress, // list of receivers
    subject: "ppp-api Token", // Subject line
    text: `${token}`, // plain text body
    html: `<b>${token}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}