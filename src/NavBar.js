import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
            <div>
                <nav className="bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-20"
                                        src="https://i.imgur.com/LmT2Tww.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href="/home"
                                            className="transition duration-700 ease-in-out hover:bg-yellow-light hover:text-black transform hover:scale-110 text-yellow-light px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </a>

                                        <a
                                            href="#"
                                            className="transition duration-700 ease-in-out hover:bg-yellow-light hover:text-black transform hover:scale-110 text-yellow-light px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Popular Manga
                                        </a>

                                        <a
                                            href="/search"
                                            className="transition duration-700 ease-in-out hover:bg-yellow-light hover:text-black transform hover:scale-110 text-yellow-light px-3 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Search
                                        </a>

                                        <a
                                            href="#"
                                            className="transition duration-700 ease-in-out hover:bg-yellow-light hover:text-black transform hover:scale-110 text-yellow-light px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Extra
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-yellow-light hover:text-yellow-light hover:bg-yellow-light hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-light"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <a
                                        href="/home"
                                        className="hover:bg-yellow-light hover:text-black text-yellow-light block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                    </a>

                                    <a
                                        href="#"
                                        className="hover:bg-yellow-light hover:text-black text-yellow-light block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Popular Manga
                    </a>

                                    <a
                                        href="/search"
                                        className="hover:bg-yellow-light hover:text-black text-yellow-light block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Search
                    </a>

                                    <a
                                        href="#"
                                        className="hover:bg-yellow-light hover:text-black text-yellow-light block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Extra
                    </a>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
                

            </div>
      
    );

}

export default Nav;