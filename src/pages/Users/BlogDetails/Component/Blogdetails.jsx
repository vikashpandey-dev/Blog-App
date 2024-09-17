import React from 'react';
import { FaUser, FaCalendarAlt, FaTags } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
const BlogDetails = () => {
  const blogDetails = useSelector((state) => state.billBoard.BlogDetails
);
  return (
    <div className="min-h-screen bg-gray-100 mt-2">
    {/* Banner Section */}
    <div className="relative h-full w-full">
      <img
        src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${blogDetails.images}`}
        alt={blogDetails.title}
        className="w-full lg:h-96 sm:h-40 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{blogDetails.title}</h1>
      </div>
    </div>

    {/* Blog Content Section */}
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      {/* Meta Information */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <p className="flex items-center gap-1">
            <FaUser /> {blogDetails.users.name ? blogDetails.users.name : "Vikash Pandey"}
          </p>
          <p className="flex items-center gap-1">
            <FaCalendarAlt /> {new Date(blogDetails.createdAt).toLocaleDateString()}
          </p>
          <p className="flex items-center gap-1">
            <FaTags /> Technology, AI
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-full text-gray-800">
        <p className=' '>{blogDetails.description}</p>
      </div>
    </div>

    {/* Comments Section */}
  </div>
  );
}

export default BlogDetails;
