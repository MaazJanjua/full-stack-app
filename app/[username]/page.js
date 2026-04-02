import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            {params.username}
            <div className='cover w-full bg-red-50 relative'>
                <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyaWVuZHN8ZW58MHwwfDB8fHww" className='object-cover w-full h-[45vh]'
                    alt='img' />
                    <div className='flex items-center justify-center '> <img  src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_incoming&w=740&q=80" alt="" className='w-[7vw] absolute rounded-3xl'/></div>
            </div>
        </>
    )
}

export default Username
