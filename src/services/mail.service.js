
import nodemailer from 'nodemailer';

export const sendRecoveryMail = async (email, link) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transporter.sendMail({
    from: 'Ecommerce',
    to: email,
    subject: 'Recuperar contraseña',
    html: `<a href="${link}"><button>Restablecer contraseña</button></a>`
  });
};
