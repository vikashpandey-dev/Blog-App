import  Repository  from "../Repository";
import APIName from "../endPoints";
import axios from "axios";

let cancelToken;

export const authRepo = {
  register(payload) {
    return Repository.post(APIName.register,payload)
  },
  updateprofile(payload) {
    return Repository.post(APIName.updateprofile,payload, {
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
      },
    })
  },
  adminlogin(payload) {
    return Repository.post(APIName.login,payload)
  },
  adminRegister(payload) {
    return Repository.post(APIName.register, payload);
  },
  
  alluser(payload) {
    return Repository.post(APIName.alluser, payload);
  },
};
