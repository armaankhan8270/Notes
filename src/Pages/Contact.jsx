import React from 'react'

const Contact = () => {
  return (
    <div className='bg-cyan-600 h-screen rounded m-24 shadow-lg grid '>
        <div className='text-center text-2xl font-extrabold mt-12 mb-12 '>
            Have Some Question
        </div>
        <div className='border-2 mb-24 ml-72 mr-24 bg-[#F5F5F5] text-center items-center rounded-lg shadow-lg grid w-1/2  '>
            <input type="text"placeholder='Name'className='  mt-12 bg-[] focus:outline-none border-2 rounded-full text-2xl p-2' />
            <input type="text"placeholder='Name'className='mt-5 focus:outline-none border-2 rounded-full text-2xl p-2' />
            <input type="text"placeholder='Name'className='mt-5 focus:outline-none border-2 rounded-full text-2xl p-2' />
<textarea placeholder='Your Openion' className='mt-5 focus:outline-none border-2 rounded-[30px] text-2xl p-2' name="" id="" cols="4" rows="4"></textarea>
            <button className='w-1/2 ml-36 p-4 mb-2 text-3xl rounded-lg bg-pink-500 '>Send</button>
        </div>
       

    </div>
  )
}

export default Contact