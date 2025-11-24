import nodemailer from 'nodemailer'
import { ContactFormData } from '@/types/contact'

// Configure your email transporter
// For production, use environment variables for credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `Ny henvendelse fra ${data.name} - ${data.service || 'Generell henvendelse'}`,
    html: `
      <h2>Ny henvendelse fra nettsiden</h2>
      <p><strong>Navn:</strong> ${data.name}</p>
      <p><strong>E-post:</strong> ${data.email}</p>
      ${data.service ? `<p><strong>Tjeneste:</strong> ${data.service}</p>` : ''}
      <p><strong>Melding:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
    replyTo: data.email,
  }

  await transporter.sendMail(mailOptions)
}

