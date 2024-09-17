import React from 'react';

function Right() {
  const blogs = [
    {
      id: 1,
      title: "Explore the Mystical Mountains",
      image: "https://images.unsplash.com/photo-1725610588095-f117c0e2a921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
      date: "September 14, 2024"
    },
    {
      id: 2,
      title: "A Journey Through the Forest",
      image: "https://images.unsplash.com/photo-1725610588095-f117c0e2a921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
      date: "September 12, 2024"
    }
  ];

  return (
    <div className="w-full h-auto lg:flex sm:grid md:grid-cols-2 sm:grid-cols-1  lg:gap-3 sm:gap-1 lg:justify-center">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative w-full sm:w-[48%] lg:w-[40%] p-4 group bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Box for Image with a background */}
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>

          {/* Blog Content */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {blog.title}
            </h2>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
              <p className="text-gray-500">{blog.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Right;
