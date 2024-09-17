import React,{useState } from "react";
import { Avatar,Tooltip,Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { updateprofile } from "../api/auth";
import {
  Modal,
  Image,
  FormLabel ,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Input ,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button ,
  FormControl,
  ModalCloseButton,
} from '@chakra-ui/react'
function Navbar(props) {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show preview of uploaded image
  };

  const handleSubmit = () => {
    const profileImageData = {
      profile:image,
      _id:props.userData._id
    };
    props.UpdateprofileapiAPI(profileImageData)
    onClose();
  };
  const { isOpen, onOpen, onClose } = useDisclosure()
  const activePage = useSelector((state) => state.auth.IsPage);
  const bames="sdsdsd"
  const name="sdsdsd";
  const fullName = "nkjnkjkj";
  let n="vikash"
const [a, b] = fullName.split(' ');
var newname=`${name} " " ${b}`
const data = {
  // name: props.AdminData.EMPL_NAME,
  Id: 45555,
  Lastlogin:"4555"
};
  return (

    <>
   

   <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile Picture</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
          </FormControl>

          {imagePreview && (
            <Image
              src={imagePreview}
              alt="Profile Preview"
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              mb={4}
            />
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
<div className="py-4 px-8  w-full bg-black sticky z-50 top-0">
  <div className="flex items-center justify-between text-white">
    
    {/* Left space to keep right aligned items in place */}
    <div className="flex-1 cursor-pointer">
    <Link to={`${import.meta.env.BASE_URL}home`}>
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi7xfOOV-AJLlEvcwqMPU2k-yDxQE1VwHn8UBoGrDqYHXLxDedqMna8sBxP1hU6utO05NzuLhZrfermLqKvai3bd_qTlIcXD70DVFreX2w513UqNU69pEj22j3_v1_Dg9uH9pXXePL5Lunfimxt6UivUg7MtDK2Yql2885ag4Rge_znzUkrw_uqQOT8a_JH=s120" alt="" />
    </Link>
    </div>
    {/* Centered links */}
    <div className="flex gap-8 justify-center">
      {props.userData.role=="Admin"?( <Link to={`${import.meta.env.BASE_URL}dashboard`}>
    Dashboard
    </Link>):( <Link to={`${import.meta.env.BASE_URL}billboard`}>
    Dashboard
    </Link>)}
   
    </div>

    {/* Right section */}
    <div className="flex items-center gap-4 flex-1 justify-end">
      <p className="font-semibold lg:text-lg sm:text-sm  capitalize">
        {props.userData.name}
      </p>
      <Tooltip
            label={
              <Box className="font-normal p-1 text-gray-600">
                <strong> </strong>Update Profile <br />
              </Box>
            }
            bg="#d3eaf7"
            placement="left-start"
          >
     <Avatar onClick={onOpen}
        className="cursor-pointer rounded-full border-2 border-primary hover:shadow-lg transition duration-300 ease-in-out"
        name={props.userData.name}
        src={`${import.meta.env.VITE_BLOG_IMAGES_URL}${props.userData?props.userData.image:""}`}
        alt="not found"
      />

      </Tooltip>
    </div>
  </div>
</div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
   UpdateprofileapiAPI: (payload) => dispatch(updateprofile(payload)),

  };
};
const mapStateToProps = (state, props) => {
  console.log(state,"statestate")
  let token=localStorage.getItem("token")
  if(!token){
    const baseUrl = window.location.protocol + "//" + window.location.host;
      window.location.href = baseUrl + "/" + "Blog-App/login";
  }
  return {
    userData: state.auth.data,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);