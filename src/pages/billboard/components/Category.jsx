import React, { useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getBillboard } from "../../../../src/api/billboard";
import { RiH1 } from 'react-icons/ri';
function Category(props) {
  const getBlog=async()=>{
    const payload={}
    if(props.userData.role=="user"){
      object.assign(payload,{_id:props.userData._id})
    }
    await props.getBillboardAPI(payload);
  }
  useEffect(()=>{
getBlog()
  },[])
  return (
   <>
<div className='min-ww-fi'>
<TableContainer>
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th>Image</Th>
        <Th>Created By</Th>
        <Th>Created At</Th>
        <Th>Status</Th>
        <Th>Reason</Th>


      </Tr>
    </Thead>
    <Tbody>
      {props.Blog.length > 0 ? (
        props.Blog.map((val, i) => (
          <Tr key={i}>
            <Td>{val.title.slice(0,20)}...</Td>
            <Td>{val.description.slice(0,10)}...</Td>
            <Td>
              <img
                src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${val.images}`}
                alt={val.title}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </Td>
            <Td>{val.users?.name || "Vikassh"}</Td>
            <Td>{new Date(val.createdAt).toLocaleDateString()}</Td>
            <Td className={`px-2 py-1 rounded-md text-white ${
      val.status === 'Pending'
        ? 'text-yellow-500'
        : val.status === 'Accept'
        ? 'text-green-500'
        : 'text-red-500'
    }`}>{val.status}</Td>
          <Td>{val.reason?val.reason:""}</Td>

          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan="5" style={{ textAlign: "center" }}>
            No Blogs Available
          </Td>

        </Tr>
      )}
    </Tbody>
  </Table>
</TableContainer>
</div>

   </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBillboardAPI: (payload) => dispatch(getBillboard(payload)),
  };
};

const mapStateToProps = (state, props) => {
  console.log(state,"statestate")
  return {
    userData: state.auth.data,
    Blog: state.billBoard.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
