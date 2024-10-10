export default function Technology() {
    return (
        <div>
            <Intro />
            <Section />
            <div className="flex flex-col md:flex-row max-w-7xl gap-10 px-10 mx-auto text-white">
                <div className="w-full text-justify p-16">
                    <div className="text-center my-10 text-2xl">HUMAN-CENTERED DESIGN</div>
                    <div className="text-xl text-justify">
                        Our solar panel structures are designed to be both
                        robust and visually appealing, seamlessly integrating
                        with the building&apos;s architecture. We prioritize
                        strength and durability while ensuring that the
                        installation enhances the overall aesthetic of your
                        property. Trust us to provide a solution that not only
                        performs well but also complements your building&apos;s
                        design.
                    </div>
                </div>
                <div className="w-full text-justify p-16">
                    <div className="text-center my-10 text-2xl">Other Products</div>
                    <div className="text-xl text-justify">
                        Our other services are also of exceptional quality. We
                        take pride in delivering top-notch solutions that meet
                        your needs and exceed your expectations. Trust us to
                        provide the same level of excellence across all our
                        offerings.
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
            style={{ backgroundImage: "url('/tech.jpg')" }}
        >
            <div className="flex px-10 flex-col items-center min-h-screen text-black md:text-6xl text-4xl justify-center bg-gradient-to-b from-[#00000000] from-90% to-[#000000FF]">
                <div className="leading-relaxed text-center tracking-[10px] px-10">
                    ARTFUL INNOVATION
                </div>
            </div>
        </div>
    );
}

function Section() {
    return (
        <div>
            <div className="py-20 bg-black ">
                <div className="max-w-6xl text-justify px-10 text-4xl mx-auto text-white">
                    Discover cutting-edge technology offers unmatched power and.
                    Our solutions are crafted to keep you ahead in your
                    industry, ensuring quality and innovation for a brighter
                    future.
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full py-20 px-10 gap-5">
                <div className="flex text-white md:flex-row flex-col h-full items-center">
                    <div className="p-5 bg-slate-100 shadow-blue-300 max-w-3xl mx-auto shadow-lg text-black rounded-xl">
                        <div className="border-l-[1px] border-black">
                            <div className="text-4xl px-4 md:pl-16 pl-8 border-l-4 border-black">
                                The Solar Panels
                            </div>
                            <div className="mt-10 text-justify md:pr-0 pr-20 text-2xl md:pl-16 pl-8 border-l-4 border-transparent">
                                Our solar panels are designed with cutting edge
                                technology to ensure maximum efficency and
                                reliability. Experience the benefits of
                                sustainable energy with our advanced solar
                                solutions, tailored to meet your needs.
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full h-full min-h-[90vh] bg-cover"
                    style={{ backgroundImage: "url('/tech1.jpg')" }}
                ></div>
            </div>
        </div>
    );
}
