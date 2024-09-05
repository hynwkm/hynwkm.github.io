import project2url from "../assets/easynotes.png";
import project3url from "../assets/style-fit.png";
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
                                            <div className="artboard artboard-demo phone-1 pt-48 bg-black">
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
                                    <p className="font-semibold">
                                        This is a full-stack movie review
                                        application created to practice building
                                        a scalable web app with{" "}
                                        <span className="text-neutral font-extrabold">
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
                                            <span className="text-neutral font-extrabold">
                                                React
                                            </span>{" "}
                                            for building dynamic user
                                            interfaces.
                                        </li>
                                        <li>
                                            Implemented a{" "}
                                            <span className="text-neutral font-extrabold">
                                                Spring Boot
                                            </span>{" "}
                                            backend, connecting it to a{" "}
                                            <span className="text-neutral font-extrabold">
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
                                            className="text-primary hover:text-secondary text-sm"
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
                        <div className="collapse-title text-2xl font-medium">
                            Easy Notes
                        </div>
                        <div className="collapse-content flex flex-col items-center">
                            <div className="flex w-full justify-evenly pt-4 pb-4">
                                <div className="w-5/12">
                                    <div className="mockup-browser bg-base-300 border">
                                        <div className="mockup-browser-toolbar">
                                            <div className="input">
                                                https://easy-notes-xi.vercel.app/
                                            </div>
                                        </div>
                                        <div className="bg-base-200 flex justify-center">
                                            <img
                                                src={project2url}
                                                alt="easy notes screen example"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-5/12 gap-4">
                                    <p className="italic">
                                        Based on the project guide by Dennis Ivy
                                    </p>
                                    <p className="font-semibold">
                                        This is a full-stack sticky notes
                                        application created to practice building
                                        a scalable web app with{" "}
                                        <span className="text-neutral font-extrabold">
                                            React, TypeScript, and Appwrite.
                                        </span>
                                    </p>
                                    <p>
                                        The project showcases an intuitive
                                        sticky notes app.
                                    </p>
                                    <ul className="flex flex-col gap-4 list-disc pl-4">
                                        <li>
                                            Gained experience with{" "}
                                            <span className="text-neutral font-extrabold">
                                                React
                                            </span>{" "}
                                            for creating a user-friendly,
                                            dynamic interface with drag-and-drop
                                            functionality.
                                        </li>
                                        <li>
                                            Integrated{" "}
                                            <span className="text-neutral font-extrabold">
                                                Appwrite
                                            </span>{" "}
                                            backend to store and manage note
                                            data, including position and color
                                            preferences.
                                        </li>
                                        <li>
                                            Implemented features like autosaving
                                            to enhance user experience.
                                        </li>
                                    </ul>
                                    <p>
                                        Github:{" "}
                                        <a
                                            className="text-primary hover:text-secondary text-sm"
                                            href="https://github.com/hynwkm/easy-notes">
                                            https://github.com/hynwkm/easy-notes
                                        </a>
                                    </p>
                                    <p>
                                        URL:{" "}
                                        <a
                                            className="text-primary hover:text-secondary"
                                            href="easy-notes-xi.vercel.app">
                                            easy-notes-xi.vercel.app
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-2xl font-medium">
                            Style-Fit
                        </div>
                        <div className="collapse-content flex flex-col items-center">
                            <div className="flex w-full justify-evenly pt-4 pb-4">
                                <div className="w-5/12">
                                    <div className="mockup-phone border-primary">
                                        <div className="camera"></div>
                                        <div className="display">
                                            <div className="artboard artboard-demo phone-1 pt-32 bg-black">
                                                <img
                                                    src={project3url}
                                                    alt="Style-fit"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-5/12 gap-4">
                                    <p className="italic">
                                        Fashion choices made easy with Style
                                        Fit.
                                    </p>
                                    <p className="font-semibold">
                                        This is a personalized fashion
                                        recommendation app created to help users
                                        find outfits that match their style and
                                        body type. Built with{" "}
                                        <span className="text-neutral font-extrabold">
                                            React, Node.js, and MySQL.
                                        </span>
                                    </p>
                                    <p>
                                        The project emphasizes user connection
                                        by allowing them to discover and share
                                        outfits with a community of like-minded
                                        individuals.
                                    </p>
                                    <ul className="flex flex-col gap-4 list-disc pl-4">
                                        <li>
                                            Gained experience with{" "}
                                            <span className="text-neutral font-extrabold">
                                                React
                                            </span>{" "}
                                            for building dynamic user
                                            interfaces.
                                        </li>
                                        <li>
                                            Developed a{" "}
                                            <span className="text-neutral font-extrabold">
                                                Node.js
                                            </span>{" "}
                                            backend integrated with{" "}
                                            <span className="text-neutral font-extrabold">
                                                MySQL
                                            </span>{" "}
                                            database to manage user data and
                                            outfit recommendations.
                                        </li>
                                        <li>
                                            Utilized OpenAI's Vision API for
                                            automatic outfit recognition,
                                            enhancing user experience.
                                        </li>
                                    </ul>
                                    <p>
                                        Github:{" "}
                                        <a
                                            className="text-primary hover:text-secondary text-sm"
                                            href="https://github.com/hynwkm/style-fit">
                                            https://github.com/hynwkm/style-fit
                                        </a>
                                    </p>
                                    <p>
                                        URL:{" "}
                                        <a
                                            className="text-primary hover:text-secondary"
                                            href="https://style-fit.netlify.app/">
                                            https://style-fit.netlify.app/
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
