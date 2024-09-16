import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { adminlogin, registers } from "../../api/auth"; 
import Logo from "../../assets/img/icicilogo.png";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Register(props) {
  const history = useHistory(); // Replacing useHistory with useNavigate
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (data) => {
    console.log(data,"datadatadata")
    const payload = {
        name: data.username,
      mobile: data.mobile,
      password: data.password,
    };
    try {
      let response = await props.RegisterAPI(payload);
      
      if(response.payload.user.role=="Admin"){
        history.push(`${import.meta.env.BASE_URL}dashboard`); 

      }else{
        history.push(`${import.meta.env.BASE_URL}dashboard`); 
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full md:h-screen lg:h-screen">
        <div className="md:w-4/6 lg:w-4/6 w-full bg-img-login md:py-16 lg:py-20 py-12 text-white relative">
          <div className="w-full mt-auto text-center absolute bottom-24 md:px-16 lg:px-20 px-8 "></div>
        </div>
        <div className="lg:w-1/3 md:w-1/3 w-full md:h-full lg:h-full flex">
          <div className="lg:px-20 md:px-20 px-4 pt-10 md:py-24 lg:py-24 pb-10 w-full text-left my-auto">
            <div className="mb-10 lg:mb-20">
              <p className="login-txt ">Register</p>
              <p className="pt-2 text-grey font-medium text-lg">
                Enter your details to create a new account
              </p>
            </div>
            <div className="md:mt-8 lg:mt-12 mt-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.username} className="mb-6">
                  <FormLabel className="labels">Username</FormLabel>
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Username is required",
                    }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Enter username" />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.mobile} className="mb-6">
                  <FormLabel className="labels">Mobile</FormLabel>
                  <Controller
                    name="mobile"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Mobile is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                    }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Enter mobile" />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.mobile && errors.mobile.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password} className="mb-6">
                  <FormLabel className="labels">Password</FormLabel>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Password is required",
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter password"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  mt={4}
                  colorScheme="blue"
                  type="submit"
                  className="w-full"
                  bg="#053C6D"
                  h="14"
                >
                  Register
                </Button>
              </form>
              <p className="pt-4 text-center">
                Already have an account?{" "}
                <Link to="/AlumniAdmin/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    RegisterAPI: (payload) => dispatch(registers(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
