import React from 'react';
import { FaClock } from "react-icons/fa6";
import Social from './Social';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getBillboard, BlogDetailsPage } from "../../../../api/billboard/";
import { useHistory } from 'react-router-dom';

function Right(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const BlogDetails = (val) => {
        dispatch(BlogDetailsPage(val));
        history.push('/AlumniAdmin/Details');
    }

    return (
        <>
            {/* Popular Posts Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Popular Posts</h1>
              <div className='lg:flex lg:flex-col md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2'>
              {props.Blog.length > 0 ? (
                    props.Blog.slice(0, 3).map((val, i) => (
                        <div key={i} className="xl:flex lg:gap-2 mb-4 border-b pb-4">
                            {/* Image Section */}
                            <div
                                className="relative md:w-full xl:w-2/4 cursor-pointer overflow-hidden rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                                onClick={() => BlogDetails(val)}
                            >
                                <img
                                    className="w-full sm:h-64 md:h-64  object-cover"
                                    src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${val.images}`}
                                    alt={val.title}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="sm:w-full xl:w-2/4">
                                <h2
                                    className="text-lg font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                    onClick={() => BlogDetails(val)}
                                >
                                    {val.title}
                                </h2>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <FaClock className="text-gray-400" />
                                    <p className="ml-2">{new Date(val.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No popular posts available</p>
                )}
              </div>
            </div>

            {/* Social Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <Social />
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetBlogApi: (payload) => dispatch(getBillboard(payload)),
    };
};

const mapStateToProps = (state, props) => {
    return {
        Blog: state.billBoard.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Right);
