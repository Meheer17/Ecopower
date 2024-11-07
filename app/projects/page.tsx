export default function Projects() {
    return (
        <div className="pt-32 text-white">
            <div className="py-10">
                <div className="mt-10 w-full text-6xl text-center">
                    Our Projects
                </div>
                <div className="text-center w-full text-2xl mt-5">
                    Who We Are, Is Defined By What We Do.
                </div>
            </div>
            <div className="gap-6 w-full py-20 px-10">
                <div className="flex md:flex-row flex-col items-center" data-aos="zoom-in-up" data-aos-delay="100">
                    <div className="md:w-1/2 w-full mx-center justify-center items-center">
                        <div className="text-4xl text-center max-w-lg mx-auto">
                            Spring Garden Health Care, Trivandrum
                        </div>
                        <div className="text-xl text-center mt-5 max-w-lg mx-auto">
                            80KW Solar Power Plant installed at Spring Garden.
                        </div>
                    </div>
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/pro10.jpg')" }}
                    ></div>
                </div>
                
                <div className="flex md:flex-row flex-col-reverse items-center mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/p2.jpg')" }}
                    ></div>
                    <div className="md:w-1/2 w-full mx-center justify-center items-center">
                        <div className="text-4xl text-center max-w-lg mx-auto">
                            Star One IT Solutions
                        </div>
                        <div className="text-xl text-center mt-5 max-w-lg mx-auto">
                        35KW Solar Power Plant installed at Star One IT
                        Solutions.
                        </div>
                    </div>
                </div>
                
                <div className="flex md:flex-row flex-col items-center mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                    <div className="md:w-1/2 w-full mx-center justify-center items-center">
                        <div className="text-4xl text-center max-w-lg mx-auto">
                            SquareOne HomeMade and Beauty Parlour{" "}
                        </div>
                        <div className="text-xl text-center mt-5 max-w-lg mx-auto">
                        35KW Solar Power Plant installed at Square One Home Made
                        and Beauty Parlour.
                        </div>
                    </div>
                    <div
                        className="w-full h-full min-h-[60vh] bg-cover"
                        style={{ backgroundImage: "url('/p4.png')" }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
