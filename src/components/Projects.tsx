import project1url from "../assets/watchthisnext.png";

export default function Projects() {
    return (
        <div className="bg-base-200 min-h-screen p-6 pl-40 pr-40" id="projects">
            <div className="flex-col items-start">
                <h1 className="text-5xl font-bold pb-9">Projects</h1>
                <div className="join join-vertical w-full bg-base-100">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input
                            type="radio"
                            name="my-accordion-4"
                            defaultChecked
                        />
                        <div className="collapse-title text-2xl font-medium">
                            Watch This Next
                        </div>
                        <div className="collapse-content flex flex-col items-center">
                            <div className="flex w-full justify-evenly pt-4 pb-4">
                                <div className="w-5/12">
                                    <div className="mockup-phone border-primary">
                                        <div className="camera"></div>
                                        <div className="display">
                                            <div className="artboard artboard-demo phone-1 pt-32">
                                                <img
                                                    src={project1url}
                                                    alt="Watch This Next"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-5/12 gap-4">
                                    <p className="italic">
                                        Based on the freeCodeCamp Full Stack
                                        Development Course
                                    </p>
                                    <p className="font-bold">
                                        This is a full-stack movie review
                                        application created to practice building
                                        a scalable web app with{" "}
                                        <span className="text-accent">
                                            React, Spring Boot, and MongoDB.
                                        </span>
                                    </p>
                                    <p>
                                        The project focuses on separating the
                                        frontend and backend for independent
                                        development.
                                    </p>
                                    <ul className="flex flex-col gap-4 list-disc pl-4">
                                        <li>
                                            Gained experience with{" "}
                                            <span className="text-accent">
                                                React
                                            </span>{" "}
                                            for building dynamic user
                                            interfaces.
                                        </li>
                                        <li>
                                            Implemented a{" "}
                                            <span className="text-accent">
                                                Spring Boot
                                            </span>{" "}
                                            backend, connecting it to a{" "}
                                            <span className="text-accent">
                                                MongoDB
                                            </span>{" "}
                                            database.
                                        </li>
                                        <li>
                                            Demonstrates the importance of
                                            separating concerns between the
                                            client and server.
                                        </li>
                                    </ul>
                                    <p>
                                        Github:{" "}
                                        <a
                                            className="text-primary hover:text-secondary"
                                            href="https://github.com/hynwkm/movies-client">
                                            https://github.com/hynwkm/movies-client
                                        </a>
                                    </p>
                                    <p>
                                        URL:{" "}
                                        <a
                                            className="text-primary hover:text-secondary"
                                            href="https://movies-client-peach.vercel.app/">
                                            https://movies-client-peach.vercel.app/
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Easy Notes
                        </div>
                        <div className="collapse-content">
                            <p>Project Details</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Style-Fit
                        </div>
                        <div className="collapse-content">
                            <p>Project Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
