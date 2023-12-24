import React from 'react'
import schizo from '../schizo.gif'

export default function Navbar() {
  return (
    <nav className="navbar max-w-[600px] text-center flex flex-col sm:flex-row justify-between mx-auto p-8 items-center border-b border-black/[0.1] shadow-[0_10px_30px_-24px_rgb(0,0,0,0.3)]">
        <h1 className='text-2xl font-extrabold text-sky-500'>The SCHIZO Blog <img src={schizo} alt='schizo' className='inline-block w-[1.5rem]'></img></h1>
        <div className="links flex gap-8 sm:m-none mt-2  font-medium text-gray-500">
            <a href="/" className='hover:hover:text-sky-500  transition'>Home</a>
            <a href="/" className='hover:text-sky-500 transition'>New Delusion</a>
        </div>
    </nav>
  )
}
