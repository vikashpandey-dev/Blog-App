import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUSerData,Alluser } from "../../store/auth";
import APIName from "../endPoints";
import { authRepo } from "./authRepo";
import Swal from "sweetalert2";
export const adminlogin = createAsyncThunk(
  APIName.adminauth,
  async (payload, thunkAPI) => {
    const npayload={
      mobile:payload.UserId,
      password:payload.Password
    }
    try {
      const  data  = await authRepo.adminlogin(npayload);
      console.log(data,"datadata")
      if (data.status == 200) {
        localStorage.setItem("token", data.data.user.token);
        thunkAPI.dispatch(setUSerData(data.data.user));
        GetMessage("success", "successfully login");
        return data.data;
      }
    } catch (err) {
      console.log(err.status,"errerrerr")
      if (err.status===403) {
      GetMessage("error", "Invalid Credentials");  
      }
      if(err.status===401){
        GetMessage("error", 'Unauthorize');
      }
    }
    return false;
  }
);

export const registers = createAsyncThunk(
  APIName.adminauth,
  async (payload, thunkAPI) => {
    try {
      const  data  = await authRepo.register(payload);
      if (data.status == 200) {
        localStorage.setItem("token", data.data.user.token);
        thunkAPI.dispatch(setUSerData(data.data.user));
        GetMessage("success", "successfully Register");
        return data.data;
      }

    
    } catch (err) {
      if (err.status===409) {
        GetMessage("error", "User AllReady Exists");  
        }
        if(err.status===401){
          GetMessage("error", 'Unauthorize');
        }  
    }
    return false;
  }
);
const GetMessage = (type, messga) => {
  Swal.fire({
    icon: type,
    title: messga,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const adminRegister = createAsyncThunk(
  APIName.getBillboard,
  async (payload, thunkAPI) => {
    try {
      const response = await authRepo.adminRegister(payload);
      if (
        response.data.Responsecode == 100 &&
        response.data.message == "GET Data Sucessfully"
      ) {
        thunkAPI.dispatch(setBillboardData(response.data.data));
        return true;
      }
    } catch (err) {
      console.log(err);
    }
    return false;
  }
);
export const updateprofile = createAsyncThunk(
  APIName.updateprofile,
  async (payload, thunkAPI) => {
    try {
      const response = await authRepo.updateprofile(payload);
 
      if (response.status == 200) {
    

        thunkAPI.dispatch(setUSerData(response.data.user));
        return true;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong", "");
    }
    return false;
  }
);

export const alluser = createAsyncThunk(
  APIName.alluser,
  async (payload, thunkAPI) => {
    try {
      const response = await authRepo.alluser(payload);
 console.log(response,"responseresponseresponse")
      if (response.status == 200) {
    

        thunkAPI.dispatch(Alluser(response.data.user));
        return true;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong", "");
    }
    return false;
  }
);
