import React from 'react'
import Homes from './Component/Home'
import Blog from '../Blog/Blog'
function Home() {
    return (
        <div>
            <div className='h-[100vh]'><Homes /></div>
            <div className='mt-2'>
                <Blog />
            </div>
        </div>
    )
}

export default Home