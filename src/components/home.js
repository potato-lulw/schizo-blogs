
import React from 'react'
import BlogList from './blog-list'
import useFetch from '../hooks/useFetch'

export default function Home() {
  const url = 'http://localhost:8000/blogs'
  const {data: blogs, isLoading, error}=useFetch(url);

  
  
  return (
    <div className='home'>
        {error && <div>{ error }</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs = {blogs} title="Every Yapp!"/>}
        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "xQc")} title="xQc's Blogs!"/> */}
    </div>
  )
}



