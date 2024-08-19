export default function Projects() {
    return (
        <div className="hero bg-base-200 min-h-screen " id="projects">
            <div className=" flex-col items-start">
                <h1 className="text-5xl font-bold pb-9">Projects</h1>
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col gap-4">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Project1</h2>
                                <p>Project Details</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Project1 </h2>
                                <p>Project Details</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col gap-4">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Project1</h2>
                                <p>Project Details</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Project1</h2>
                                <p>Project Details</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
