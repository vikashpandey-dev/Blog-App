import React,{useEffect } from 'react';
import { FaClock } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setBillboardData,BlogDetails } from "../../../../store/billBoard";

import { connect } from "react-redux";
import {getBillboard,BlogDetailsPage} from "../../../../api/billboard/"
import { useHistory } from 'react-router-dom';
const Left = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const getBlog=async()=>{
    await props.GetBlogApi({
      status:"Accept"
    });
  }
  useEffect(()=>{
getBlog()
  },[])
  const blogdetails=async(val)=>{
    try{
      console.log(val,"valval")
      dispatch(BlogDetailsPage(val))
    history.push('/Blog-App/Details');

    // await props.BlogDetailsPageApi(val)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="md:grid md:grid-cols-2  sm:shadow-lg lg:grid lg:grid-cols-1 ">
      {
    props.Blog.length>0?  props.Blog.map((post, index) => (
      <div key={index} className="w-full  p-4">
        <div className="   lg:flex gap-4  rounded-lg lg:shadow-lg overflow-hidden ">
          <div className='lg:w-1/3 sm:w-full  cursor-pointer' onClick={()=>(blogdetails(post))}>
          <img
            src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${post.images}`}
            alt={post.title}
            className="w-full  h-64 object-cover transition-opacity duration-300 hover:opacity-70"
          />
          </div>
          <div className=" lg:w-2/3 sm:w-full h-full flex flex-col gap-4">
            <h2 className="texttomoto hover:text-gray-600 cursor-pointer font-bold text-xl">{post.title}</h2>
            <div className="flex  gap-2 text-gray-600 mt-2">
              <div className="flex gap-2 items-center justify-center">
                <FaRegUserCircle/>
                <p className="">{post.users.name?post.users.name:"Vikash Pandey"}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
              <FaClock/>
                <p className="">{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{post.description.slice(0,120)}...</p>
   <div className='  flex  items-center gap-2 '>
    
     <button className='texttomoto'>Read More</button>
     <FaArrowRight/>
     </div>
          </div>
        </div>
      </div>
    )):(null)
      }
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetBlogApi: (payload) => dispatch(getBillboard(payload)),
    BlogDetailsPageApi: (payload) => dispatch(BlogDetailsPage(payload)),
  };
};

const mapStateToProps = (state, props) => {
  console.log(state,"statestate")
  return {
    Blog: state.billBoard.data,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Left);
