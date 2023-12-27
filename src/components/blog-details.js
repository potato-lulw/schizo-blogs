import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BlogDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
  
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
      })
    }
  return (
    <div>
        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2 className='text-xl font-medium text-sky-500 mb-[5px] text-center'>{blog.title}</h2>
                <p className='font-medium text-right mr-6 '>- By: {blog.author}</p>
                <div className='indent-10 leading-7 my-6 px-10 '>{blog.body}</div>
                <button onClick={handleClick} className='bg-sky-500 px-2 py-1 text-white rounded-md self-center text-center mx-auto flex'>Nuke this</button>
            </article>
        )}
    </div>
  )
}
