"use client"
// import React from 'react'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }

    return (
        <nav className='bg-slate-950 text-white flex justify-between py-[1.4vh] px-[2vw]'>
            <div className="logo text-[2vw] lg:text-[1.3vw] font-bold flex justify-center items-center lg:gap-[1vw] gap-[2.3vw] ">
                <span>
                    GetMeaChai!

                </span>
                <div>
                    <lord-icon
                        src="https://cdn.lordicon.com/elcmkycs.json"
                        trigger="loop"
                        delay="1500"
                        state="in-reveal"
                        colors="primary:#7166ee,secondary:#ffc738,tertiary:#f24c00"
                        style={{ width: "50px", height: "50px" }}
                    >
                    </lord-icon>
                </div>
            </div>
            {/* <ul className='flex justify-between items-center w-[42vw] text-[1vw] lg:text-[.75vw] font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}

            <div>
                <Link href={"/login"}>
                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-md">Login</button>
                </Link>
                <button className=''></button>
            </div>
        </nav>
    )
}

export default Navbar