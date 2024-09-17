import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text,
  Button,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  CircularProgress,
  Image,
  Heading,
  Radio,
  Stack,
  Spinner,
  RadioGroup,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import Swal from "sweetalert2";
import { TbEdit } from "react-icons/tb";
import ImageUploading from "react-images-uploading";
import { RiDeleteBinLine } from "react-icons/ri";
import ReactPaginate from 'react-paginate';
import {
  getPost,
  updatePost,
  SetActiveTabs,
  DeletePost,
} from "../../../api/community";
import moment from "moment";
import { getBillboard,updateBillboard} from "../../../../src/api/billboard";

import { connect } from "react-redux";

const MainSection = (props) => {
  const [images, setImages] = React.useState([]);
  const [tags, setTags] = useState("");
  const [caption, setCaption] = useState("");
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [datefilter, setDatefilter] = useState(null);
  const [trending, setTrending] = useState("");
  // Add Auto scroll
  const [records, setRecords] = useState([]);
  const [offset, setOffset] = useState();
  const [loading, setLoading] = useState(false);
  const [callapi, setcallapi] = useState(true);
  const [loder, setloder] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(true);

  // end
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const {
    isOpen: isOpenPost,
    onOpen: onOpenPost,
    onClose: onClosePost,
  } = useDisclosure();
  const {
    isOpen: isOpenEvent,
    onOpen: onOpenEvent,
    onClose: onCloseEvent,
  } = useDisclosure();
  const deletePost = async (value) => {
    let payload = {
      FEED_ID: value.FEED_ID,
      Isdeleated: "1",
    };

    let result = await confirmdelete();
    if (result.isConfirmed == true) {
      await props.DeletePostAPI(payload);
      payload = {
        Search: "",
        Role: "",
      };
      if (offset)
        Object.assign(payload, { page: offset })
      await props.getPostAPI(payload);
      onClose();
    }
  };
  const updatePost = async (value) => {
    let payload = {
      FEED_ID: id,
      EMPL_ID: "100003",
      type: "img",
      image: images[0].file,
      caption: caption,
      Isdelete: 0,
      tags: tags,
    };

    if (trending == "Yes") Object.assign(payload, { setTrending: 1 });
    if (trending == "No") Object.assign(payload, { setTrending: 0 });
    await props.updatePostAPI(payload);
    payload = {
      Role: "Admin",
    };
    if (offset)
      Object.assign(payload, { page: offset })
    await props.getPostAPI(payload);
    onClosePost();
  };
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [image, setimages] = useState("")


  const updateValues = async (value) => {
    settitle(value.title)
    setdescription(value.description)
    setimages(value.images)
    onOpenPost();
  };
  const confirmdelete = () => {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };

  // Fetch records function
  // Function to fetch more records
  const fetchMoreRecords = async () => {
    try {
      if (callapi) {
        setLoading(true);
        setloder(true);
        const curoffset = offset > 1 ? (offset - 1) * 4 : offset;
        const payload = { page: curoffset };
        let responce = await props.getPostAPI(payload);
        setRecords([...records, ...responce.payload.data.data.data]);
        // if (responce.payload.data.data.data.length > 0) {
        //   setOffset(offset + 1);
        //   setTimeout(() => {
        //     setloder(false);
        //     setLoading(false);
        //   }, 500);
        // }
        // if (responce.payload.data.data.data.length == 0) {
        //   setloder(false);
        //   setcallapi(false);
        //   return;
        // }
      }
    } catch (error) {
      console.error("Error fetching records:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlepagechange = async (item) => {
    let page = item.selected + 1
    const curoffset = page > 1 ? (page - 1) * 6 : 1;
    const payload = { page: curoffset };
    setOffset(curoffset)
    let responce = await props.getPostAPI(payload);
  }
  var pageCount;
  // if (props.Posts.length > 0) {
  //   pageCount = Math.ceil(props.Posts[0].TOTAL_FEED / 6);

  // }
  const getfulldate = (datetime) => {
    const timestamp = datetime;
    const dateObject = new Date(timestamp);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Months are 0-indexed, so we add 1.
    const day = dateObject.getDate();
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    const seconds = dateObject.getUTCSeconds();
    const milliseconds = dateObject.getUTCMilliseconds();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    let curtime = `${day}/${month}/${year} ${hours}:${minutes} ${amOrPm}`
    return curtime
  }
  const getBlog = async () => {
  try{
    await props.getBillboardAPI({
      status: "Pending",
    });
  }catch(err){
    console.log(err)
  }
  }
  useEffect(() => {
    getBlog()
  }, [])
  const cleardata=()=>{
    setreason("")
    setid(null)
    setstatus("")
    setIsOpen(false)
  }
  const [reason,setreason]=useState("")
  const [ids,setid]=useState(null)
  const [status,setstatus]=useState("")
  const handleupdatereject=async(val,status)=>{
    setIsOpen(true)
    setid(val._id)
    setstatus(status)
 
  }
  const updatereason=async()=>{
  const {payload}= await props.updateBillboardAPI({
      status:status,
      _id:ids,
      reason:reason
    });
    if(payload.status==200){
      cleardata()
      getBlog()

    }
  }
  const handleupdateAccept=async(val,reason)=>{
try{
  const {payload}= await props.updateBillboardAPI({
    status:"Accept",
    _id:val._id
  });
  if(payload.status==200){
    cleardata()
    getBlog()
}
  }catch(err)
  {
    console.log(err)
  }
}
  const [isOpens, setIsOpen] = useState(false);

  // Custom function to open the modal
  const openModal = () => setIsOpen(true);

  // Custom function to close the modal
  const closeModal = () => setIsOpen(false);
  return (
    <>

<Modal isOpen={isOpens} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Reason</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel mb="1" fontWeight={600} className="text-primary">
                Reason
              </FormLabel>
              <Textarea
                placeholder="Enter Reason"
                onChange={(e)=>setreason(e.target.value)}
                value={reason}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={updatereason}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenPost} onClose={onClosePost} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="10px">
          <ModalHeader
            color="white"
            fontWeight="500"
            py="3"
            fontSize="16px"
            backgroundColor="#053c6d"
            borderTopRadius="10px"
          >
            Blog Detail's
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>

            <FormControl mt={4}>
              <FormLabel mb="1" fontWeight={600} className="text-primary">
                Photo
              </FormLabel>
              <img
                src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${image}`}
                alt="not found"
                className=": w-full h-48 object-cover"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel mb="1" fontWeight={600} className="text-primary">
                Title
              </FormLabel>
              <div className="relative">
                <Input
                  placeholder="Tags"
                  value={title}
                  disabled
                />

              </div>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel mb="1" fontWeight={600} className="text-primary">
                description
              </FormLabel>
              <Textarea
                placeholder="Enter Description"
                value={description}
                disabled
              />
            </FormControl>

          </ModalBody>


        </ModalContent>
      </Modal>
      {loder == true ? (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          background="rgba(255, 255, 255, 0.2)"
          zIndex="9999"
        >
          <div className="instagram-loader">
            <div className="loader"></div>
          </div>
        </Box>
      ) : null}

      <div className="bg-white px-6 pt-6 pb-3 min-w-fi">
        <div className="flex justify-between items-center">
          <p className="hdr-title">Pending Blogs</p>
          <p className="text-primary"></p>
        </div>
        <div className="py-6 grid grid-cols-3 gap-4">
          {props.Blog.length>0 ? (
            props.Blog.map((val, i) => {
              return (
                <>
                  <div className="bgF3F9FF p-4 rounded-lg" key={i}>
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between items-center">
                        <p className="ml-2 text-grey font-medium">

                          {getfulldate(val.createdAt)}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center gap-4 ">
                           <button className="text-blue-500" onClick={()=>{handleupdateAccept(val,"Accept")}}>Accept
                        </button>
                          <button className="text-red-500" onClick={()=>{handleupdatereject(val,"Reject")}}>Reject
                          </button></div>
                        {/* <TbEdit
                          className="text-primary text-2xl mx-2 cursor-pointer"
                          onClick={() => updateValues(val)}
                        />
                        <RiDeleteBinLine
                          className="text-primary mx-2 text-xl cursor-pointer"
                          onClick={() => deletePost(val)}
                        /> */}
                      </div>
                    </div>
                    {val.type == "text" ? (
                      <div className="mt-4">
                        <h1 className="w-full h-54 rounded-md flex justify-center">
                          {val.title}
                        </h1>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <img
                          src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${val.images}`}
                          alt={val.title}
                          className=": w-full h-64 rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </>
              );
            })
          ) : (
            <h1>No Blog</h1>
          )}
        </div>
        {/* <div className="flex justify-end gap-1 px-5">
          <ReactPaginate
            previousLabel={"<"}
            className="flex justify-end"
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={6}
            pageRangeDisplayed={6}
            onPageChange={handlepagechange}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div> */}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBillboardAPI: (payload) => dispatch(getBillboard(payload)),
    updateBillboardAPI: (payload) => dispatch(updateBillboard(payload)),
  };
};
const mapStateToProps = (state, props) => {
  return {
    Blog: state.billBoard.data,
    setDashboard: state.billBoard.setDashboard,

    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
