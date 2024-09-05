import heroBg from "../assets/hero-background.jpg";

export default function About() {
    function handleDownload() {
        const filePath = "/Resume.pdf";
        // const link = document.createElement("a");
        // link.href = filePath;
        console.log(filePath);
        window.open(filePath, "_blank");
    }
    return (
        <div
            className="hero min-h-screen"
            id="about"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-4xl text-base-100">
                    <p className="mb-5 text-4xl">Hi, my name is </p>
                    <h1 className="mb-5 text-8xl font-bold">Hyun Woo Kim</h1>
                    <p className="mb-5 text-xl">
                        A software engineer from Korea, passionate about
                        tackling tough challenges with elegant solutions.
                    </p>
                    <p className="mb-5 text-xl">
                        Fluent in full-stack development, with a strong focus on
                        JavaScript, React, and Node.js.
                    </p>
                    <p className="mb-5 text-xl">
                        Committed to continuous learning, always seeking to
                        improve through hands-on projects.
                    </p>
                    <p className="mb-5 text-xl">
                        When I'm not coding, I enjoy cooking a good meal or
                        taking a walk to clear my mind and recharge.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={handleDownload}
                        type="button">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#000000">
                            <path d="M12 16.5l-6-6h4V3h4v7.5h4l-6 6zm-8 1.5v2h16v-2H4z" />
                        </svg>
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
}
