import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: 'sachinmathew1917@gmail.com',
        pass: process.env.GMAIL
    },
    secure: true,
});

export async function SendMail(mailOptions: { from: string, to: string[], text: string, html: string, subject: string }) {
    try {
        await transporter.sendMail(mailOptions);
        return
    } catch (err) {
        console.log(err)
    }
}