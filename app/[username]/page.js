import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            {/* {params.username} */}
            <div className='flex flex-col items-center'>
                <div className='cover w-full bg-red-50 relative'>
                    <img src="https://colorfully.eu/wp-content/uploads/2013/01/Scarface-Get-Every-Dollar-facebook-cover.jpg"
                        className='w-full lg:h-[45vh] md:[35vh] h-[27vh] '
                        alt='img' />
                    <div
                        className='flex items-center justify-center rounded-full '> <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt=""
                            className='lg:w-[7vw] h-[14vh] w-[28vw] absolute rounded-full object-cover border-2 border-white' />

                    </div>
                </div>
                <div className='leading-10 pb-[4vh]'>
                    <div className='info  flex justify-center items-center mt-[8vh] uppercase '>
                        <h1 className=' text-white font-extrabold text-[1.5vw]'> @{params.username}</h1>
                    </div>
                    <div className='flex justify-center items-center text-center opacity-55 text-[1vw]'>
                        <h1 className=''>Creating Animated Arts For VTTS</h1>
                    </div>
                    <div className='flex justify-center items-center text-center opacity-55 text-[1.1vw]'>
                        <h1 className=''>9,719 members. 82 posts . $15,450/release</h1>
                    </div>
                </div>
                <div className="payment  gap-3 flex justify-center items-center leading-8 w-[75vw] mb-[2vh]">
                    <div className="supporters w-1/2 bg-slate-950 p-6">
                        {/* Show List Of All The Supporters Aa A Leaderboard */}
                        <h2 className='text-[1.3vw] uppercase font-bold my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                UserABC donated <span className='font-extrabold text-[.81vw]'> $30 </span>with a messsage " I Support You Bro.Lots Of ❤️" </li>
                            <li className='my-2 flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                UserABC donated <span className='font-extrabold text-[.81vw]'> $30 </span>with a messsage " I Support You Bro.Lots Of ❤️" </li>
                            <li className='my-2 flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                UserABC donated <span className='font-extrabold text-[.81vw]'> $30 </span>with a messsage " I Support You Bro.Lots Of ❤️" </li>
                            <li className='my-2 flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                UserABC donated <span className='font-extrabold text-[.81vw]'> $30 </span>with a messsage " I Support You Bro.Lots Of ❤️" </li>
                            <li className='my-2 flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                                UserABC donated <span className='font-extrabold text-[.81vw]'> $30 </span>with a messsage " I Support You Bro.Lots Of ❤️" </li>



                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-950 p-6">
                        <h2 className='text-[1.2vw] font-bold my-5'> Make a Payment</h2>
                        <div className='flex flex-col gap-[.51vh]'>
                            {/* input for name and message */}
                            <input type="text" className='w-full p-3 rounded bg-sky-950' placeholder='Enter Name' />
                            <input type="text" className='w-full p-3 rounded bg-sky-950' placeholder='Enter Message' />




                            <input type="text" className='w-full  rounded bg-sky-950 p-3' placeholder='Enter Amount' />
                            <button className='bg-sky-500 p-3 rounded hover:bg-slate-800'>Pay</button>
                        </div>
                        {/* {Or Choose From These Amounts} */}
                        <div className="flex gap-2 mt-5">
                            <button className="bg-sky-950 p-3 rounded hover:bg-slate-800">Pay $20</button>
                            <button className="bg-sky-950 p-3 rounded hover:bg-slate-800">Pay $40</button>
                            <button className="bg-sky-950 p-3 rounded hover:bg-slate-800">Pay $60</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Username
