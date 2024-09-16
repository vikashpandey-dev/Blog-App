import axios from "axios";
import crypto from "../utility/crypto.js";
import * as urls from "../config/constants";
import  * as ENABLE_ENCRIPTION from "../config/ENABLE_ENCRIPTION"
const Repository = axios.create({
  baseURL: urls.AlumniBaseurl,
});
var sttrue = true;

Repository.interceptors.response.use(
  (response) => {
   
    return response;
  },
  (error) => Promise.reject(error)
);

export default Repository;
