export default function Services() {
    return (
        <div className="pt-32 text-white">
            <div className="py-10">
                <div className="mt-10 w-full text-6xl text-center">
                    SERVICES
                </div>
                <div className="text-center w-full text-2xl mt-5">
                    Transforming your life through inovative engineering
                    solutions
                </div>
            </div>

            <div className="gap-6 w-full py-20 px-10" data-aos="zoom-in-up" data-aos-delay="100">
                <div className="flex md:flex-row flex-col items-center">
                    <div className="md:w-1/2 w-full mx-center justify-center items-center p-5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-4xl max-w-lg">Solar Panel</div>
                            <div className="text-xl text-justify mt-5 max-w-lg">
                                Transform your home with our exceptional solar
                                panels that combine reliability and style
                                effortlessly. Designed to outshine the
                                competition, our panels are crafted with the
                                highest quality materials for a robust. Trust us
                                to provide a powerful energy solution that
                                enhances your home&apos;s appeal and
                                performance. Your home deserves nothing less!
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/service1.jpg')" }}
                    ></div>
                </div>

                <div className="flex md:flex-row flex-col-reverse items-center mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/service2.jpg')" }}
                    ></div>
                    <div className="md:w-1/2 w-full mx-center justify-center items-center p-5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-4xl max-w-lg">
                                Lightning Arrestors
                            </div>
                            <div className="text-xl text-justify mt-5 max-w-lg">
                                Lightning arrestors protect your property from
                                lightning strikes by safely redirecting
                                electrical energy minimizing damage. Our
                                arrestors excel in durability, and, ensuring
                                your investment is well-protected against
                                nature&apos;s unpredictability.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col items-center mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                    <div className="md:w-1/2 w-full mx-center justify-center items-center">
                        <div className="flex flex-col justify-center items-center p-5">
                            <div className="text-4xl max-w-lg">
                                Panel Service
                            </div>
                            <div className="text-xl text-justify mt-5 max-w-lg">
                                Welcome to our panel services. We provide
                                professional solutions for panel cleaning and
                                maintenance, ensuring your systems operate
                                efficiently. Our team is committed to delivering
                                high-quality service, giving you confidence in
                                the performance and longevity of your panels.
                                Trust us to handle your panel needs with
                                expertise and care.
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/service3.jpg')" }}
                    ></div>
                </div>

                <div className="flex md:flex-row flex-col-reverse items-center mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/service5.png')" }}
                    ></div>
                    <div className="md:w-1/2 w-full mx-center justify-center items-center p-5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-4xl max-w-lg">Inverters</div>
                            <div className="text-xl text-justify mt-5 max-w-lg">
                                Discover our industry-leading inverters designed
                                to ensure reliable power backup for your needs.
                                With cutting-edge technology and exceptional
                                performance, our products guarantee peace of
                                mind during outages. Trust us to keep your power
                                flowing when you need it most. Explore our range
                                today!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
