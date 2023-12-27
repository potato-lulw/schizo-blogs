import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center align-middle min-h-[60vh] text-center'>
        
        <h2 className='text-6xl font-bold mb-10'>Schizo attack?</h2>
        <p className='font-semibold p-2'>The page does not exist bucko</p>
        <Link to="/" className='text-sky-500'>Go back?</Link>

    </div>
  )
}
