import React, { useState } from "react";
import {
  Button,
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
  Input,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { connect } from "react-redux";
import ImageUploading from "react-images-uploading";
import { FiUpload } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { getBillboard } from "../../../api/billBoard";
import { addBillboard } from "../../../api/billBoard";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
function Header(props) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [images, setImage] = React.useState([]);
  const [title,setTitle ]=useState("")
  const [description,setDescription ]=useState("")
  // add banner variable
  const maxNumber = 1;
  const onChange = (imageList) => {
    console.log(imageList);
    setImage(imageList);
  };
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
  
  } = useDisclosure();
const onOpenHomeBanner=async()=>{
  

  setopenbanner(true)
}
const onCloseHomeBanner =()=>{
  setopenbanner(false)
}
const getSuccessMessage = (type, messga) => {
  setTimeout(() => {
    Swal.fire({
      icon: type,
      title: messga,
      showConfirmButton: false,
      timer: 2000,
    });
  }, []);
};

const resetvalue=()=>{
  setDescription("")
  setTitle("")
  setImage([])
}
  const AddBillboard = async (value) => {
   
    if (images.length == 0)
    return await getSuccessMessage("error", "Please Choose file");
    let payload = {
      title: title,
      description: description,
      images: images[0].file,
      createdBy:props.userData._id
    };

    await props.addBillboardAPI(payload);
    await props.getBillboardAPI({
      isdeleated: "0",
    });
    reset()
    await resetvalue()
    onClose();
  };

  const onSubmit=()=>{

  }

  return (
    <div className="p-6 bge8f4ff">
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
            Add Blos
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>
          <form onSubmit={handleSubmit(AddBillboard)}>
            <FormControl className="mb-2">
              <FormLabel mb="1" fontWeight={600} className="text-primary">
                Upload image / allowed only jpg,svg,jpeg,gif png
              </FormLabel>
              <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "png","svg","jpeg"]}
                maxFileSize={5000000}
                onError={(errors) => {
                  if (errors.maxNumber) {
                    
                    getSuccessMessage('warning','You have exceeded the maximum number of allowed images')
                    
                  }
                  if (errors.acceptType) {
                    getSuccessMessage('warning',"Only JPG,svg,jpeg,GIF and PNG files are allowed.");
                  }
                  if (errors.maxFileSize) {
                    getSuccessMessage('warning',"File size exceeds the maximum limit of 5 MB.");
                  }
                }}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper">
                    {images ? (
                      images.length > 0 ? (
                        images[0].data_url ? (
                          ""
                        ) : (
                          ""
                        )
                      ) : (
                        <button
                          style={isDragging ? { color: "red" } : null}
                          onClick={(e)=>onImageUpload(e.preventDefault())}
                          {...dragProps}
                          className="h-32 w-full border-dashed border-2 border-primary rounded-md flex "
                        >
                          <div className="m-auto flex flex-wrap">
                            <div className="bg-primary flex rounded-full p-2 mx-auto">
                              <FiUpload className="text-white" />
                            </div>
                            <p className="text-primary font-semibold w-full text-sm pt-1">
                              Upload here
                            </p>
                          </div>
                        </button>
                      )
                    ) : (
                      ""
                    )}
                    {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="w-full relative h-32 border rounded-md"
                      >
                        <img
                          src={image.data_url}
                          alt="UploadeImage"
                          className="w-full h-full rounded-md "
                        />
                        <button
                          onClick={() => onImageRemove(index)}
                          className="text-center absolute top-0 right-0 bg-white"
                        >
                          <GrFormClose className="text-primary text-2xl" />
                        </button>
                        {/* </div> */}
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              </FormControl>
              <FormControl mt={4} isInvalid={errors.title}>
              <div mt={4} class="checkout">
                <FormLabel mb="1" fontWeight={600} className="text-primary">
                  Title
                </FormLabel>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "title  is required",
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Title"
                        {...field}
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.title && errors.title.message}
                  </FormErrorMessage>
              </div>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.Description}>
              <div mt={4} class="checkout">
                <FormLabel mb="1" fontWeight={600} className="text-primary">
                  Description
                </FormLabel>
                <Controller
                    name="Description"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Description  is required",
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Description"
                        {...field}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.Description && errors.Description.message}
                  </FormErrorMessage>
              </div>
              </FormControl>

              <ModalFooter className="grid grid-cols-2 gap-4">
            <Button
              onClick={onClose}
              variant={"outline"}
              w="100%"
              color="cprimary.500"
            >
              Delete
            </Button>

            <Button
              bg="cprimary.500"
              color="white"
              fontWeight="500"
              _hover={{ bg: "cprimary.600" }}
              variant="solid"
              w="100%"
              type="submit"
            >
              Save
            </Button>
          </ModalFooter>
            </form>
          </ModalBody>

  
        </ModalContent>
      </Modal>
     
    
        <div className="flex justify-between ">
          <div>
            <p className="hdr-title">Blogs</p>
          </div>
          <div className="flex gap-2">
           
            <Button
              bg="cprimary.500"
              color="white"
              fontWeight="500"
              _hover={{ bg: "cprimary.600" }}
              variant="solid"
              onClick={onOpen}
            >
              <BiPlus className="mr-1.5" />
              Add Blogs
            </Button>
          </div>
        </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBillboardAPI: (payload) => dispatch(getBillboard(payload)),
    addBillboardAPI: (payload) => dispatch(addBillboard(payload)),
  };
};

const mapStateToProps = (state, props) => {
  console.log(state,"statestate")
  return {
    userData: state.auth.data,
    toggletabs: true,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
