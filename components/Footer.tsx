import { FacebookIcon, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-white bg-black">
            <section className="mx-auto md:px-32 py-16 px-10 justify-between gap-20 flex md:flex-row flex-col">
                <div>
                    <div className="text-xl font-bold tracking-[10px]">
                        ECOPOWER <br />
                        ELECTRICALS 
                    </div>
                    <div className="mt-20">
                        <p className="text-lg">Ph: +91 944-614-7140</p>
                        <p className="text-lg mt-5">
                            Email: ecopowertvm@gmail.com
                        </p>
                        <p className="text-lg mt-5">
                            Address: <br />
                            TC95/809/143, <br />
                            Vasanthalayam, Ragam Lane, <br />
                            Near John Cox Memorial CSI Institute Of Technology,{" "}
                            <br />
                            Kannammoola, Thiruvananthapuram, Kerala 695011
                        </p>
                    </div> HTTP Status: 404 (not found) 
                </div>
                <div className="flex gap-10"> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4665.1069230564135!2d76.92810791406477!3d8.508685807359821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd37795d759%3A0x82979ed15738ec12!2sEcopower%20Electricals!5e0!3m2!1sen!2sin!4v1730955412797!5m2!1sen!2sin"
                        width="350"
                        height="350"
                        loading="lazy"
                        className="mt-10 rounded-xl mx-auto"
                    />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.22157700997!2d80.2277393!3d13.016214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700399c5381%3A0x30eee46a7309efe7!2sVishwashanthi%20Apartments%20Old!5e0!3m2!1sen!2sin!4v1730976452905!5m2!1sen!2sin"
                        width="350"
                        height="350"
                        loading="lazy"
                        className="mt-10 rounded-xl mx-auto"
                    />
                </div>
            </section>
            <Social />
        </div>
    );
}

export function Social() {
    return (
        <section className="h-24 flex w-full text-white justify-center gap-10 items-center">
            <Link href={"/"}>
                <Phone size={24} />
            </Link>
            <Link href={"/"}>
                <FacebookIcon size={24} />
            </Link>
            <Link href={"/"}>
                <Instagram size={24} />
            </Link>
            <Link href={"/"}>
                <Linkedin size={24} />
            </Link>
        </section>
    );
}
