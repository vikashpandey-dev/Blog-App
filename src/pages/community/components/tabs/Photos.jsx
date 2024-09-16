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
import { alluser } from "../../../../api/auth";
import { RiH1 } from 'react-icons/ri';
function Photos(props) {
  const Allusers=async()=>{
    await props.alluserAPI({
      
    });
  }
  useEffect(()=>{
Allusers()
  },[])
  return (
   <>
<div >
<TableContainer>
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Mobile</Th>
        <Th>Image</Th>
        <Th>Created At</Th>


      </Tr>
    </Thead>
    <Tbody>
      {props.Alluser.length > 0 ? (
        props.Alluser.map((val, i) => (
          <Tr key={i}>
            <Td>{val.name}</Td>
            <Td>{val.mobile}...</Td>
            <Td>
          {val.image?(  <img
                src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${val.image}`}
                alt={val.name}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />):(  <img
                src="https://up.yimg.com/ib/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&rs=1&c=1&qlt=95&w=119&h=122"
                alt={val.name}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />)}
            </Td>
            <Td>{new Date(val.createdAt).toLocaleDateString()}</Td>
           
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
    alluserAPI: (payload) => dispatch(alluser(payload)),
  };
};

const mapStateToProps = (state, props) => {
  console.log(state,"statestate")
  return {
    userData: state.auth.data,
    Blog: state.billBoard.data,
    Alluser: state.auth.Alluser,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Photos);
