import React from 'react'

import { FaTrash } from "react-icons/fa6";

export default function BlogList({blogs, title}) {

    const handleDelete = (id) => {
        
    }
    
  return (
    <div>
        <h1 className='font-medium text-xl'>{title}</h1>
        {blogs.map((blog) =>(
          <div className="blog-preview p-[20px] hover:shadow-[1px_3px_5px_rgb(0,0,0,0.1)] my-[20px] border-b-[1px] border-[#ddfbfd] relative" key={blog.id}>
            <h2 className='text-xl font-semibold text-sky-500 mb-[8px]'>{blog.title }</h2>
            <p>Written by: <span className='font-medium '>{blog.author}</span></p>
            <FaTrash className='absolute right-3 top-3 text-sky-500 hover:text-red-500 transition cursor-pointer' onClick={() => handleDelete(blog.id)}/>
          </div>
        ))}
    </div>
  )
}
