"use client";

import { Social } from "@/components/Footer";
import { ContactMail } from "@/lib/mails";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    function handleSubmit() {
        setForm({ name: "", phone: "", email: "", message: "" });
    }

    return (
        <div className="bg-black min-h-screen pt-36 pb-28">
            <div className="text-5xl w-full p-10 rounded-xl bg-slate-800 text-white max-w-7xl mx-auto">
                <div>Contact</div>
                <div className="text-lg text-justify text-slate-200 mt-10 max-w-2xl">
                    For any inquires, please feel free to contact us. We would
                    love to hear from you and your interests further. Your
                    questions and feedback are important to us.
                </div>
            </div>
            <div className="mt-10 w-full p-10 rounded-xl bg-slate-800 max-w-7xl mx-auto">
                <div className="flex md:flex-row flex-col justify-between items-center text-slate-50 px-10 text-lg">
                    <div>Phone: +91 944-614-7140</div>
                    <div>Email: ecopowertvm@gmail.com</div>
                </div>
                <Social />
                <form
                    className="w-full p-5 rounded-2xl text-white"
                    action={ContactMail}
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full inline-flex">
                            <div className="w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-extralight my-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                                    value={form.name}
                                    required
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    htmlFor="phone"
                                    className="block text-lg font-extralight my-2"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                                    value={form.phone}
                                    required
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="email"
                                className="block text-lg font-extralight my-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                                value={form.email}
                                required
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="message"
                                className="block text-lg font-extralight my-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full border text-black border-gray-300 rounded-md py-2 px-3"
                                value={form.message}
                                required
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
