import React from 'react'
import Blogdetails from './Component/Blogdetails'
import Social from '../Blog/component/Social'
import Right from '../Blog/component/Right'

function Details() {
  return (
    <div className='w-full h-auto lg:flex lg:gap-10 lg:px-20 px-5'>
    <div className=' left lg:w-2/3 w-full bg-[#fff] '>
        <Blogdetails/>
    </div>
    <div className='right lg:w-1/3 w-full bg-[#fff] '>
        <Right/>
    </div>

    
</div>
  )
}

export default Details