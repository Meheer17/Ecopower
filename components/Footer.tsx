import { FacebookIcon, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-white bg-black">
            <section className="mx-auto md:px-32 py-16  px-10 gap-20 flex flex-col">
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
                            Near John Cox Memorial CSI Institute Of Technology, <br />
                            Kannammoola, Thiruvananthapuram, Kerala 695011
                        </p>
                    </div>
                </div>
            </section>
            <Social/>
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
