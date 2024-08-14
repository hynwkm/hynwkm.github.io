import heroBg from "../../assets/hero-background.jpg";

export default function About() {
    // return (
    //     <section
    //         id="about"
    //         className="relative pt-16 pb-32 flex content-center items-center justify-center snap-start"
    //         style={{
    //             minHeight: "100vh",
    //         }}>
    //         <div
    //             className="absolute top-0 w-full h-full bg-center bg-cover blur-sm brightness-50"
    //             style={{
    //                 backgroundImage: `url(${heroBg})`,
    //             }}></div>
    //         <div className="container relative mx-auto">
    //             <div className="items-center flex flex-wrap">
    //                 <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
    //                     <div className="pr-12 text-white flex flex-col">
    //                         <p className="text-5xl text-blue-400 text-left py-2">
    //                             Hi, my name is
    //                         </p>
    //                         <h1 className="text-white font-semibold text-7xl text-left py-2">
    //                             Hyun Woo Kim
    //                         </h1>
    //                         <p className="mt-4 text-5xl text-left text-blue-400 py-2">
    //                             I'm a{" "}
    //                             <span className="text-white">
    //                                 Software Engineer
    //                             </span>{" "}
    //                             dedicated to developing impactful tech solutions
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-4xl text-base-100">
                    <p className="mb-5 text-2xl">Hi, my name is </p>
                    <h1 className="mb-5 text-5xl font-bold">Hyun Woo Kim</h1>
                    <p className="mb-5 text-2xl">
                        I'm a Software Engineer dedicated to crafting impactful
                        tech solutions
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
