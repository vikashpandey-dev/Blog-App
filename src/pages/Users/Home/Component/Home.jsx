import React from 'react';
import Right from './Right';
import Blog from '../../Blog/Blog';

function Home() {
  return (
    <>
      <div className='bg-black lg:flex lg:justify-center lg:items-center  sm:h-[250vh] w-full'>
        <div className='lg:flex lg:justify-center lg:items-center lg:gap-40'>
          {/* Left Content Section */}
          <div className='flex justify-center items-center text-center'>
            <div className='text-white flex flex-col gap-4 md:justify-center md:items-center'>
              <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl'>Popular</h2>
              <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Recent News</h1>
              <p className='font-semibold text-2xl sm:text-3xl'>Personal & Lifestyle Blog 2024</p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className='h-auto'>
            <Right />
          </div>
        </div>
      </div>

      {/* SVG Shape */}
      <div>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 283.5 27.8'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full'
        >
          <path
            className='elementor-shape-fill'
            d='M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7
            s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7
            c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z
            M260.8,11.3c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z
            M242.4,8.6c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1
            c3.3,0.7,9.3,2.2,12.4,2.7C239.9,8.7,242.4,8.6,242.4,8.6z'
          />
          {/* More SVG paths */}
        </svg>
      </div>
    </>
  );
}

export default Home;
