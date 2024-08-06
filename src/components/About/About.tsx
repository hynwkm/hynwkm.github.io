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
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                                Hyun Woo Kim
                            </h1>
                            <p className="mt-4 text-lg text-white">
                                Software Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
