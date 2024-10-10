"use server";
import { SendMail } from "./nodemailer";

export async function ContactMail(form: FormData) {
    const mailOptions = {
        from: "sachinmathew1917@gmail.com",
        text: "A mail from the website",
        to: ["ecopowertvm@gmail.com"],
        html: "",
        subject: "",
    };
    
    const data = {
        message: form.get("message"),
        phone: form.get("phone"),
        email: form.get("email"),
        name: form.get("name"),
    };
    
    mailOptions.text = `Mail from ${data.name} (${data.phone}), Email: ${data.email} \n Message: ${data.message}`;
    mailOptions.subject = "Enquiry";
    await SendMail(mailOptions);
}
