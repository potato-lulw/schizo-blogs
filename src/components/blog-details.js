import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BlogDetails() {

    const {id} = useParams();
    const url = 'http://localhost:8000/blogs';
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div>
        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2 className='text-xl font-medium text-sky-500 mb-[5px] text-center'>{blog.title}</h2>
                <p className='font-medium text-right mr-6 '>- By: {blog.author}</p>
                <div className='indent-10 leading-7 my-6 px-10 '>{blog.body}</div>
            </article>
        )}
    </div>
  )
}
