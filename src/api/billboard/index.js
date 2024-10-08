import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBillboardData,BlogDetails,setDashboard } from "../../store/billBoard";
import APIName from "../endPoints";
import { billBoardRepo } from "../billboard/billboardRepo";
import Swal from 'sweetalert2'
export const addBillboard = createAsyncThunk(
  // console.log("jsdhksjadasd"),
  APIName.addBillboard,
  async (payload, thunkAPI) => {
    try {
      const reqPayload = new FormData();
      const  data  = await billBoardRepo.addBillboard(payload);
      console.log(data,"datadata")
      if (data.status == 200) {
        await getSuccessMessage("success", "Blog Added")
        return data;
      }
    } catch (err) {
      await getSuccessMessage("warning", "Something went wrong")
      await CheckLogin(err);
    }
    return false;
  }
);
const getSuccessMessage = (type, messga) => {
  setTimeout(() => {
    Swal.fire({
      icon: type,
      title: messga,
      showConfirmButton: false,
      timer: 2000
    })
  }, []);
}
export const getBillboard = createAsyncThunk(
  APIName.getBillboard,
  async (payload, thunkAPI) => {
    try {
      const responce = await billBoardRepo.getBillboard(payload);
      if (
        responce.status == 200
      ) {

        thunkAPI.dispatch(setBillboardData(responce.data.record));
        return true;
      }
    } catch (err) {
      console.log(err);
      await CheckLogin(err);
    }
    return false;
  }
);
export const Dashboardcount = createAsyncThunk(
  APIName.Dashboardcount,
  async (payload, thunkAPI) => {
    try {
      const responce = await billBoardRepo.Dashboardcount(payload);
      if (
        responce.status == 200
      ) {

        thunkAPI.dispatch(setDashboard(responce.data.record));
        return true;
      }
    } catch (err) {
      console.log(err);
      await CheckLogin(err);
    }
    return false;
  }
);

export const BlogDetailsPage = createAsyncThunk(
  APIName.BlogDetails,
  async (payload, thunkAPI) => {
    console.log(payload,"payloadpayload")
    try {
        thunkAPI.dispatch(BlogDetails(payload));
        return true;
      
    } catch (err) {
      console.log(err);
    }
    return false;
  }
);
const CheckLogin = (err) => {
  if (err.response.status == "403") {
    localStorage.removeItem("token");
    const baseUrl = window.location.protocol + "//" + window.location.host;
    getSuccessMessage("warning", "Your Session Expired?");
    setTimeout(() => {
      window.location.href = baseUrl + "/" + "Blog-App/login";
    }, 1000);
  }
};
export const updateBillboard = createAsyncThunk(
  // console.log("jsdhksjadasd"),
  APIName.updateBillboard,
  async (payload, thunkAPI) => {
    try {
      const response = await billBoardRepo.updateBillboard(payload);
      if (response.status == 200) {
        await getSuccessMessage("success", "Blog Updated")
        return response;
      }
    } catch (err) {
      console.log(err);
      await CheckLogin(err);

      if (response.status == 200) {
        await getSuccessMessage("error", "Something went wrong")
        return response;
      }
    }
    return false;
  }
);

export const deleteBillboard = createAsyncThunk(
  // console.log("jsdhksjadasd"),
  APIName.updateBillboard,
  async (payload, thunkAPI) => {
    try {
      const response = await billBoardRepo.updateBillboard(payload);
      if (response.status == 200) {
        await getSuccessMessage("success", "Billboard Deleated")
        return response;
      }
    } catch (err) {
      console.log(err);


      await CheckLogin(err);
      if (response.status == 200) {
        await getSuccessMessage("error", "Something went wrong")
        return response;
      }
    }
    return false;
  }
);