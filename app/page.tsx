import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Intro />
            <Vision />
            <Why />
            <SoFar />
            <Partners />
        </div>
    );
}

function Intro() {
    return (
        <div className="bg-cover solar">
            <div className="flex md:py-0 py-32 px-10 flex-col items-center min-h-screen text-black text-6xl justify-center bg-gradient-to-b from-[#00000000] from-90% to-[#000000FF]">
                <div className="leading-relaxed text-center tracking-[10px]" data-aos="fade-up" data-aos-delay="100">
                    Enhance your future with <br />
                    reliable solar energy.
                </div>
                <div className="text-3xl mt-5" data-aos="fade-up" data-aos-delay="100">
                    Discover the latest in solar technology with Ecopower
                    Electricals.
                </div>
            </div>
        </div>
    );
}

function Vision() {
    return (
        <div className="bg-black py-32 md:px-10 px-5 max-w-7xl mx-auto">
            <div className="flex text-white md:flex-row flex-col gap-5 h-full items-center" data-aos="fade-right" data-aos-delay="100">
                <div className="p-5 bg-slate-100 shadow-blue-300 h-full mt-10 md:w-1/2 shadow-lg text-black rounded-xl">
                    <div className="border-l-[1px] border-black">
                        <div className="text-3xl px-4 md:pl-16 pl-8 border-l-4 border-black">
                            Our Vision
                        </div>
                        <div className="mt-10 pr-20 text-xl md:pl-16 pl-8 text-justify border-l-4 border-transparent">
                            At our company, we are dedicated to providing
                            eco-friendly solutions for clean energy that benefit
                            society as a whole. Our mission is to innovate and
                            implement sustainable practices that reduce our
                            carbon footprint while promoting a healthier planet.
                            We believe in harnessing renewable resources to
                            create a brighter cleaner future for generations to
                            come. Join us in our commitment to making a positive
                            impact the environment.
                        </div>
                    </div>
                </div>
                <div className="relative mt-10">
                    <Image
                        src={"/lamp.jpg"}
                        width={600}
                        height={400}
                        className="-z-50 max-h-[70vh]"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
}

function Why() {
    return (
        <div className="work bg-fixed h-full md:p-10 p-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="md:p-10 p-4 bg-black rounded-xl" data-aos="fade-left" data-aos-delay="100">
                    <div className="border-l-[1px] border-white h-full">
                        <div className="text-xl px-4 md:pl-16 pl-8 mbx-5">
                            WHY ECOPOWER ELECTRICALS?
                        </div>
                        <div className="text-3xl mt-5 px-4 md:pl-16 pl-8 border-l-4 border-white">
                            Transform your space into a reflection of your
                            unique style and personality.
                        </div>
                        <div className="mt-10 pr-20 text-justify text-xl md:pl-16 pl-8 border-l-4 border-transparent">
                            We offer services tailored to your specific needs,
                            ensuring that the aesthetics of your space remain
                            intact. Our commitment to deliver solutions that
                            align with your vision while preserving the original
                            beauty of your environment. Your satisfaction is our
                            priority, and we are dedicated to your ideas into
                            reality without compromising the integrity of your
                            space. Let us assist you in achieving your desired
                            outcomes seamlessly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SoFar() {
    return (
        <div className="bg-slate-100 py-16 h-full">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="relative">
                    <Image
                        src={"/lamp.jpg"}
                        width={600}
                        height={400}
                        className="-z-50 max-h-[70vh]"
                        alt="image"
                    />
                </div>
                <div className="p-10" data-aos="zoom-in-left" data-aos-delay="100">
                    <div className="text-5xl text-center text-slate-950">
                        Ecopower In Numbers
                    </div>
                    <div className="grid md:grid-cols-2 mt-5 grid-cols-1 w-full h-full">
                        <div className="flex items-center gap-5 mt-10 flex-col">
                            <div className="text-6xl text-slate-900 pb-5 border-b-2 border-slate-600">
                                10+
                            </div>
                            <div className="text-lg text-slate-600">
                                Years of Experience
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-10 flex-col">
                            <div className="text-6xl text-slate-900 pb-5 border-b-2 border-slate-600">
                                100+
                            </div>
                            <div className="text-lg text-slate-600">
                                Projects Completed
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-10 flex-col">
                            <div className="text-6xl text-slate-900 pb-5 border-b-2 border-slate-600">
                                100%
                            </div>
                            <div className="text-lg text-slate-600">
                                Customer Satisfaction
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-10 flex-col">
                            <div className="text-6xl text-slate-900 pb-5 border-b-2 border-slate-600">
                                100+
                            </div>
                            <div className="text-lg text-slate-600">
                                Employees
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Partners() {
    return (
        <div className="bg-black h-full md:p-10 p-5">
            <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 text-white" data-aos="zoom-in-up" data-aos-delay="100">
                <div className="md:p-10 p-4 bg-slate-100 shadow-blue-300 shadow-lg text-black rounded-xl md:mt-0 mt-10">
                    <div className="border-l-[1px] border-black h-full">
                        <div className="text-xl px-4 md:pl-16 pl-8 mbx-5">
                            INDUSTRY
                        </div>
                        <div className="text-3xl px-4 mt-5 md:pl-16 pl-8 border-l-4 border-black">
                            Our Partners
                        </div>
                        <div className="mt-10 text-justify pr-20 text-xl md:pl-16 pl-8 border-l-4 border-transparent">
                            We partner with the best companies in the industry
                            to offer you long and reliable solar products. Our
                            commitment to quality ensures that you receive the
                            most efficient and durable solutions for your energy
                            needs. Join us in making a sustainable choice for a
                            brighter future!
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center md:mt-0 mt-10">
                    <Image
                        src={"/c1.png"}
                        height={200}
                        width={200}
                        alt="company"
                        className="rounded-xl max-w-full"
                    />
                    <Image
                        src={"/c2.png"}
                        height={200}
                        width={200}
                        alt="company"
                        className="rounded-xl max-w-full"
                    />
                    <Image
                        src={"/c3.jpg"}
                        height={200}
                        width={200}
                        alt="company"
                        className="rounded-xl max-w-full"
                    />
                    <Image
                        src={"/c4.png"}
                        height={200}
                        width={200}
                        alt="company"
                        className="rounded-xl max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}
