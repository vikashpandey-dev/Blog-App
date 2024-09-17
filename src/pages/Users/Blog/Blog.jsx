import React from 'react'
import Left from "../Blog/component/Left"
import Right from "../Blog/component/Right"

function Blog() {
  return (
  <>
  <div className=' text-4xl lg:my-5 sm:my-1 w-full flex justify-center items-center text-2x font-extrabold'>Blogs</div>
    <div className='  lg:gap-10 lg:px-20 md:px-5 w-full h-full lg:flex'>
        <div className=' left lg:w-2/3 sm:w-full  bg-[#fff] '>
            <Left/>
        </div>
        <div className='right lg:w-1/3 md:w-full bg-[#fff] '>
            <Right/>
        </div>
    </div>
  </>
  )
}

export default Blog