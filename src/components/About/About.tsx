import heroBg from "../../assets/hero-background.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="relative pt-16 pb-32 flex content-center items-center justify-center ml-64"
            style={{
                minHeight: "100vh",
            }}>
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover blur-sm brightness-50"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}></div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12 text-white flex flex-col">
                            <p className="text-5xl text-blue-400 text-left py-2">
                                Hi, my name is
                            </p>
                            <h1 className="text-white font-semibold text-7xl text-left py-2">
                                Hyun Woo Kim
                            </h1>
                            <p className="mt-4 text-5xl text-left text-blue-400 py-2">
                                I'm a{" "}
                                <span className="text-white">
                                    Software Engineer
                                </span>{" "}
                                dedicated to developing impactful tech solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
