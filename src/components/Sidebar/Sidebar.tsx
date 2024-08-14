import Avatar from "../Avatar/Avatar";

export default function Sidebar() {
    // return (
    //     <header className="flex h-screen flex-col justify- border-e bg-blue-500 w-64 fixed z-10">
    //         <Avatar />
    //         <nav className="px-4 py-6">
    //             <ul className="mt-6 space-y-1">
    //                 <li>
    //                     <a
    //                         href="#skills"
    //                         className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-white active:bg-white active:text-blue-600">
    //                         Skills
    //                     </a>
    //                 </li>
    //                 <li>
    //                     <details className="group [&_summary::-webkit-details-marker]:hidden">
    //                         <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white active:bg-white active:text-blue-600">
    //                             <span className="text-sm font-medium">
    //                                 {" "}
    //                                 Projects{" "}
    //                             </span>
    //                             <span className="shrink-0 transition duration-300 group-open:-rotate-180">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-5 w-5"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor">
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </span>
    //                         </summary>
    //                         <ul className="mt-2 space-y-1 px-4">
    //                             <li>
    //                                 <a
    //                                     href="#"
    //                                     className="block rounded-lg px-4 py-2 text-sm font-medium text-white active:bg-white active:text-blue-600">
    //                                     Style-Fit (Capstone)
    //                                 </a>
    //                             </li>

    //                             <li>
    //                                 <a
    //                                     href="#"
    //                                     className="block rounded-lg px-4 py-2 text-sm font-medium text-white active:bg-white active:text-blue-600">
    //                                     WealthSimple Hackathon
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                     </details>
    //                 </li>
    //                 <li>
    //                     <details className="group [&_summary::-webkit-details-marker]:hidden">
    //                         <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white active:bg-white active:text-blue-600">
    //                             <span className="text-sm font-medium">
    //                                 {" "}
    //                                 Experience{" "}
    //                             </span>
    //                             <span className="shrink-0 transition duration-300 group-open:-rotate-180">
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="h-5 w-5"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor">
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             </span>
    //                         </summary>

    //                         <ul className="mt-2 space-y-1 px-4">
    //                             <li>
    //                                 <a
    //                                     href="#"
    //                                     className="block rounded-lg px-4 py-2 text-sm font-medium text-white active:bg-white active:text-blue-600">
    //                                     Teaching Assistant (BrainStation)
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                     </details>
    //                 </li>
    //                 <li>
    //                     <a
    //                         href="#"
    //                         className="block rounded-lg px-4 py-2 text-sm font-medium text-white active:bg-white active:text-blue-600">
    //                         Education
    //                     </a>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <div className="fixed inset-x-0 bottom-0 border-t border-gray-100">
    //             <a
    //                 href="#"
    //                 className="flex items-center gap-2 p-4 hover:bg-gray-50">
    //                 <div className="text-white">
    //                     <p className="text-sm px-4 py-1">
    //                         <span> hynwkm@gmail.com </span>
    //                     </p>
    //                     <p className="text-sm px-4 py-1">
    //                         <span> 437-875-0485 </span>
    //                     </p>
    //                 </div>
    //             </a>
    //         </div>
    //     </header>
    // );

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
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
                        <a>Po</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
