import React, { useState } from 'react'

export default function Create() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  
  return (
    <div className='max-w-[400px] flex flex-col justify-center mx-auto text-center '>
      <h2 className='text-sky-500 text-xl font-medium mb-[30px]'>Start Yapping</h2>
      <form className='flex flex-col  '>
        <label className='text-left block'>Title : </label>
        <input 
          type="text"
          required
          className='w-full border-[1px] border-gray-300 rounded-sm py-[6px] px-[10px] block my-[10px] focus:border-sky-500 focus:border-[2px] outline-none box-border'

          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='text-left block'>Yapp : </label>
        <textarea 
          required
          className='w-full  border-[1px] border-gray-300 rounded-sm py-[6px] px-[10px] block my-[10px] focus:border-sky-500 focus:border-[2px] outline-none box-border'
          target={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label className='text-left block'>Author : </label>
        <input 
          type="text"
          required
          className='w-full border-[1px] border-gray-300 rounded-sm py-[6px] px-[10px] block my-[10px] focus:border-sky-500 focus:border-[2px] outline-none box-border'
          target={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className='px-4 py-2 rounded-md  w-auto mx-auto mt-6 text-white bg-sky-500 cursor-pointer'>Add this Yapp</button>
      </form>
      
    </div>

  )
}
