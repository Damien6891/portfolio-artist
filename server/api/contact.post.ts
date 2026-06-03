import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { nom, email, type, message } = body;

  if (!nom || !email || !message) {
    throw createError({ statusCode: 400, message: 'Champs manquants' });
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: config.mailUser as string,
      pass: config.mailPass as string,
    },
  });

  await transporter.sendMail({
    from: `"Site Damien Hantzer" <contact@damien-hantzer.com>`,
    to: 'contact@damien-hantzer.com',
    replyTo: email,
    subject: `Nouveau contact — ${type}`,
    html: `
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Type :</strong> ${type}</p>
      <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  return { ok: true };
});
