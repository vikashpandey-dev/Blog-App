import React from 'react'
import { FaClock } from "react-icons/fa6";
import Social from './Social';
import { useDispatch, useSelector } from "react-redux";
import { setBillboardData,BlogDetails } from "../../../../store/billBoard";
import { connect } from "react-redux";
import {getBillboard,BlogDetailsPage} from "../../../../api/billboard/"

import { useHistory } from 'react-router-dom';
function Right(props) {
    const dispatch = useDispatch();
    const history = useHistory();
   const BlogDetails=(val)=>{
    console.log(val,"valval")
      dispatch(BlogDetailsPage(val))
    history.push('/AlumniAdmin/Details');
   }
    return (
        <>
        <div className="w-full shadow-lg">
  <h1>Popular Posts</h1>
  {props.Blog.length > 0 ? (
    props.Blog.slice(0, 3).map((val, i) => {
      return (
        <div key={i} className='w-full lg:flex py-2'>
          <div className="md:w-full h-full lg:w-1/3 my-1 cursor-pointer" onClick={() => BlogDetails(val)}>
            <img
              className='lg:w-40 lg:h-40 w-full object-scale'
              src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${val.images}`}
              alt={val.title}
            />
          </div>
          <div className=" md:w-full lg:w-2/3 ml-1">
            <h2 className='text-xl font-bold leading-2 cursor-pointer topposttitle hover:text-tomato'>
              {val.title}
            </h2>
            <div className="flex gap-2 items-center mt-2">
              <FaClock />
              <p>{new Date(val.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>No popular posts available</p>
  )}
</div>


                <div className='w-full shadow-lg my-10'>
                <Social/>
                </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      GetBlogApi: (payload) => dispatch(getBillboard(payload)),
      BlogDetailsPageApi: (payload) => dispatch(BlogDetailsPage(payload)),
    };
  };
  
  const mapStateToProps = (state, props) => {
    return {
      Blog: state.billBoard.data,
  
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Right);