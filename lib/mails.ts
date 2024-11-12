"use server";
import { SendMail } from "./nodemailer";

export async function ContactMail(form: FormData) {
    const mailOptions = {
        from: "sachinmathew1917@gmail.com",
        text: "A mail from the website",
        to: ["ecopowerelectrical.in@gmail.com"],
        html: "",
        subject: "",
    };
    
    const data = {
        message: form.get("message"),
        phone: form.get("phone"),
        email: form.get("email"),
        name: form.get("name"),
        ebbill: form.get("ebbill"),
        location: form.get("location"),
        solar_type: form.get("solar_type"),
        prop: form.get("prop_type"),
    };
    
    mailOptions.text = `Mail from ${data.name} (${data.phone}, Location: ${data.location}) \nSolar Type: ${data.solar_type} \nProperty Type: ${data.prop} \nAvg EB: ${data.ebbill}\n Email: ${data.email} \n Message: ${data.message}`;
    mailOptions.subject = "Enquiry";
    await SendMail(mailOptions);
}
