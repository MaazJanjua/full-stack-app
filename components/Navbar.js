"use client"
// import React from 'react'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false);
    function formatEmail(email) {
        if (!email) return "";
        const username = email.split("@")[0];
        return username + "***";
    }

    // if (session) {
    //     return (
    //         <>
    //             Signed in as {session.user.email} <br />
    //             <button onClick={() => signOut()}>Sign out</button>
    //         </>
    //     )
    // }

    return (
        <nav className='bg-slate-950 text-white flex justify-between items-center  py-[1.4vh] lg:px-[2vw] px-[5vw]'>
            <div >
                <Link href={"/"} className="flex justify-start items-center logo text-[5vw] lg:text-[1.3vw] font-bold  lg:gap-[1vw] gap-[2.3vw]  ">
                    <span className='text-white'>
                        GetMeaChai!

                    </span>
                    <div>
                        <div suppressHydrationWarning>
                            <lord-icon
                                src="https://cdn.lordicon.com/elcmkycs.json"
                                trigger="loop"
                                delay="1500"
                                state="in-reveal"
                                colors="primary:#7166ee,secondary:#ffc738,tertiary:#f24c00"
                                style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <ul className='flex justify-between items-center w-[42vw] text-[1vw] lg:text-[.75vw] font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}

            <div className='flex flex-col lg:flex-row items-end lg:justify-end relative'>
                {session && (
                    <div className="relative inline-block"
                    >
                        <button
                            onBlur={() => {
                                setTimeout(() => {
                                    setShowdropdown(false)
                                }, 300);
                            }

                            }
                            onClick={() => setShowdropdown(!showdropdown)}
                            id="dropdownDefaultButton"
                            className="mx-[.2vw] inline-flex items-center justify-center text-white bg-brand border border-transparent hover:bg-brand-strong focus:ring-4 rounded focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-cyan-700"
                            type="button"
                        >
                            <span className="hidden sm:inline ">
                                Welcome {session.user.email}
                            </span>

                            <span className="sm:hidden flex">
                                {formatEmail(session.user.email)}
                            </span>
                            <svg
                                className="w-4 h-4 ms-1.5 -me-0.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        <div
                            id="dropdown"
                            className={`absolute lg:left-[4.5vw] top-full left-0 mt-2 z-10 ${showdropdown ? "" : "hidden"
                                } bg-neutral-primary-medium bg-slate-950 border border-default-medium rounded-base shadow-lg w-44 rounded-lg`}
                        >
                            <ul className="p-2 text-sm text-body font-medium">
                                <li className='hover:bg-slate-700'>
                                    <Link href="/dashboard" className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-700'>
                                    <Link href="#" className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                        Your Page
                                    </Link>
                                </li>

                                <li className='hover:bg-slate-700'>
                                    <Link onClick={() => signOut()} href="#" className="inline-flex w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}



                {/* {session &&
                    <Link href="/Dashboard">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md">Dashboard</button>
                    </Link>
                } */}
                {/* {session &&

                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md ml-[.2vw]" onClick={() => { signOut() }}>LogOut</button>

                } */}

                {!session &&
                    <Link href="/login">
                        <button

                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md ml-[.2vw]">Login</button>
                    </Link>}
                <button></button>
            </div>
        </nav >
    )
}

export default Navbar