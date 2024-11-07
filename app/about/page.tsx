import Image from "next/image";

export default function About() {
    return (
        <div>
            <Intro />
            <Vision />
            <div data-aos="fade-up" data-aos-delay="100"
                style={{ backgroundImage: "url('/abt2.jpg')" }}
                className="min-h-[70vh] bg-cover bg-center flex p-10 flex-col items-start h-full justify-center"
            >
                <div className="p-10 backdrop-blur-xl rounded-xl text-black shadow-2xl shadow-black border-2 border-black">
                    <div className="text-3xl max-w-3xl text-justify">
                        For over a decade, we have been transforming the world
                        by developing eco-friendly solutions. Our commitment to
                        sustainability drives us to innovate and implement
                        renewable energy sources. We believe that every step
                        towards greener energy contributes to a healthier
                        planet. Together, we can pave the way for a sustainable
                        future.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div
            className="bg-cover"
            style={{ backgroundImage: "url('/abt.jpg')" }}
        >
            <div className="flex px-10 flex-col items-center min-h-screen justify-center">
                <div className="p-10 backdrop-blur-xl rounded-xl text-white shadow-2xl shadow-black" data-aos="zoom-in-up" data-aos-delay="100">
                    <div className="leading-relaxed text-2xl text-center tracking-[10px]">
                        OUR JOURNEY
                    </div>
                    <div className="text-xl max-w-3xl mt-5 text-justify">
                        Our journey over the years has been marked by numerous
                        successful projects, each contributing to a wealth of
                        experience. We take pride in the expertise and skills
                        we&apos;ve gained, which enable us to deliver
                        exceptional results. With every project, we continue to
                        learn and grow, ensuring that we remain at the forefront
                        of our industry
                    </div>
                </div>
            </div>
        </div>
    );
}

function Vision() {
    return (
        <div className="bg-black py-32 md:px-10 px-5 max-w-7xl mx-auto">
            <div className="flex text-white md:flex-row flex-col gap-5 h-full items-center" data-aos="zoom-in-up" data-aos-delay="100">
                <div className="p-5 bg-slate-100 shadow-blue-300 h-full mt-10 md:w-1/2 shadow-lg text-black rounded-xl">
                    <div className="border-l-[1px] border-black" >
                        <div className="text-xl px-4 md:pl-16 pl-8 mbx-5">
                            OUR MISSION
                        </div>
                        <div className="text-3xl mt-10 px-4 md:pl-16 pl-8 border-l-4 border-black">
                            Crafting Tomorrow: Where Eco-Friendly Innovation
                            Meets a Sustainable Future!
                        </div>
                        <div className="mt-10 pr-20 text-xl md:pl-16 pl-8 text-justify border-l-4 border-transparent">
                            Welcome to Crafting Tomorrow, where we believe in
                            the power of eco-friendly innovation to shape a
                            sustainable future. Our mission is to inspire and
                            empower and businesses to embrace sustainable
                            practices that benefit both the planet and our
                            communities. Join us on our journey as we explore
                            creative solutions, share valuable insights, and
                            highlight inspiring stories of those making a
                            difference. Together, we can make a lasting, one
                            sustainable choice at a time!
                        </div>
                    </div>
                </div>
                <div className="relative mt-10">
                    <Image
                        src={"/abt1.jpg"}
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
