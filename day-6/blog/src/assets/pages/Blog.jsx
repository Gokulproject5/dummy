import React from 'react'
import Header from '../components/Header'
import BlogCom from './blogCom/BlogCom'
import { Link } from 'react-router'
import { IoIosAddCircle } from "react-icons/io";

export const Blog = () => {
  return (
    <>
      <main className='dark:bg-slate-900'>
        <section>
          <title>Blog  </title>
          <div>
            <Header />
          </div>
          <div >
            <h1 className='dark:text-slate-50  text-center my-10 font-bold italic  text-slate-700'>
              My Blogs
            </h1>
          </div>
          <div>
            <BlogCom />
          </div>
          <div className='relative'>
            <div className='fixed bottom-10 right-10  bg-purple-500 text-white font-bold w-10 h-10 flex justify-center text-3xl items-center  py-1 rounded-full  select-none shadow shadow-gray-800 active:scale-95 '>
              <Link to="/blog/form"><IoIosAddCircle /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
