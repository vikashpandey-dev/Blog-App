import React from 'react'

function Right() {
  return (
<div className='w-full md:flex  gap-4'>
<div className="relative w-[50%]  ">
      {/* Box for Image with White Background */}
  <div className=" h-full bg-white flex items-center justify-center">
<div className=' '>
<img
      src="https://images.unsplash.com/photo-1725610588095-f117c0e2a921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
      alt="Blog image"
      className=" cursor-pointer  h-full object-contain transition-opacity duration-300 group-hover:opacity-70"
    />
</div>
  </div>

  {/* Overlay Text */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-4">
    <h2 className="text-white font-bold text-normal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic magni,
      ipsa, nostrum laborum culpa, minima voluptatum repellat et omnis magnam
      eum suscipit 
    </h2>
    <div className="flex items-center gap-2 text-white mt-2">
      {/* Calendar Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 0v4m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-3V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-300 ">{'12/3/44'}</p>
    </div>
  </div>
</div>
<div className="relative w-[50%]   ">
      {/* Box for Image with White Background */}
  <div className=" h-full bg-white flex items-center justify-center">
<div className=' '>
<img
      src="https://images.unsplash.com/photo-1725610588095-f117c0e2a921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
      alt="Blog image"
      className=" cursor-pointer  h-full object-contain transition-opacity duration-300 group-hover:opacity-70"
    />
</div>
  </div>

  {/* Overlay Text */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-4">
    <h2 className="text-white font-bold text-normal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic magni,
      ipsa, nostrum laborum culpa, minima voluptatum repellat et omnis magnam
      eum suscipit aspernatur libero 
    </h2>
    <div className="flex items-center gap-2 text-white mt-2">
      {/* Calendar Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 0v4m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-3V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-300 ">{'12/3/44'}</p>
    </div>
  </div>
</div>
</div>

  
  )
}

export default Right