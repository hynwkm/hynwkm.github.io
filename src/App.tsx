import About from "./components/About/About";
import Avatar from "./components/Avatar/Avatar";
import "./styles/tailwind.css";

function App() {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <main className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth flex-auto w-full">
                        <About />
                        {/* <Skills /> */}
                    </main>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <Avatar />
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
