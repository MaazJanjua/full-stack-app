"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session } = useSession();
    if (!session) {
        const router = useRouter();
        router.push('/login')
    }
    return (
        <div className='flex  justify-center items-center lg:pt-[4vh] pt-[2vh]'>
            <div className='bg-slate-950 h-auto pb-[3vh] rounded-md lg:w-[39vw] w-[89vw] border border-slate-800'>
                <h1 className='text-center uppercase pt-[1vh] font-extrabold text-[4vw] lg:text-[1.2vw]'>Welcome To Your Dashboard</h1>

                {/* Form */}
                <form className='flex flex-col gap-[1.8vw] lg:gap-[2.5vh] mt-[3vh] px-[2vw] lg:px-[.51vw]'>

                    {/* Name */}
                    <div className='w-full '>
                        <h1 className='uppercase font-bold text-[3.2vw] lg:text-[.71vw]'>Name</h1>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className='p-2 w-full rounded bg-sky-950 text-white outline-none'
                            required="true"
                        />

                    </div>
                    {/* Username */}
                    <div className='w-full'>
                        <h1 className='uppercase font-bold  text-[3.2vw] lg:text-[.71vw]'>Username</h1>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className='p-2 w-full rounded bg-sky-950 text-white outline-none'
                        />
                    </div>

                    {/* Email */}
                    <div className=''>
                        <h1 className='uppercase font-bold  text-[3.2vw] lg:text-[.71vw]'>Email</h1>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className='p-2 w-full rounded bg-sky-950 text-white outline-none'
                        />

                    </div>
                    {/* Profile Image */}
                    <div>
                        <h1 className='uppercase font-bold  text-[3.2vw] lg:text-[.71vw]'>Profile Photo</h1>
                        <input
                            type="file"
                            className='p-2 w-full rounded bg-sky-950 text-white'
                        />
                    </div>

                    {/* Cover Photo */}
                    <div>
                        <h1 className='uppercase font-bold  text-[3.2vw] lg:text-[.71vw]' >Cover Photo</h1>
                        <input
                            type="file"
                            className='p-2 w-full rounded bg-sky-950 text-white'
                        />
                    </div>

                    {/* Payment Credentials */}
                    <div>
                        <h1 className='uppercase font-bold  text-[3.2vw] lg:text-[.71vw]'>Payment Credentials</h1>
                        <input
                            type="text"
                            placeholder="Enter payment details"
                            className='p-2 w-full rounded bg-sky-950 text-white outline-none'
                        />
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-2'
                    >
                        Save
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Dashboard
