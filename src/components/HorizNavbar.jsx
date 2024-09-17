import React from "react";
import { Avatar,Tooltip,Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import Filled from "../assets/img/Navbar/FilledNotification.png"
import Line from "../assets/img/Navbar/LineNotification.png"
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";

function HorizNavbar(props) {
  const activePage = useSelector((state) => state.auth.IsPage);
  const bames="sdsdsd"
  const name="sdsdsd";
  const fullName = "nkjnkjkj";
  let n="vikash"
const [a, b] = fullName.split(' ');
var newname=`${name} " " ${b}`
const getfulldate=(datetime)=>{
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
  let curtime=`${day}/${month}/${year} ${hours}:${minutes} ${amOrPm}`
  
 
  return curtime
 }
const data = {
  // name: props.AdminData.EMPL_NAME,
  Id: 45555,
  Lastlogin:"4555"
};
  return (
    <div className="py-2 px-6 border-b-8 w-full bg-white sticky z-50 top-0">
      <div className="flex gap-2 items-center justify-end">
      <Link to={`${import.meta.env.BASE_URL}notification`}>
            <img
              src={activePage == 4 ? Filled : Line}
              alt="ICICI Logo"
              className=" py-2 nb-icon"
              style={{color: "#E2E8F0"}}
              // onClick={() => DisableNavbar("notification")}
            />
          </Link>
        <p className="mr-2 font-semibold text-lg text-primary">vikash pandey</p>
        <Tooltip label={
      <Box className="font-normal p-1 text-gray-600">
        <strong>Name: </strong> vikash pandey <br />
    
        <strong>ID: </strong> {data.Id} <br />
        {data.Lastlogin?(<><strong>Last Login: </strong>{data.Lastlogin}</>):(null)}
      </Box> 
    } bg="#d3eaf7" placement="left-start" >
    <Avatar className="cursor-pointer" name={newname} src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </Tooltip>
    
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};
const mapStateToProps = (state, props) => {
  let token=localStorage.getItem("token")
  if(!token){
    const baseUrl = window.location.protocol + "//" + window.location.host;
      window.location.href = baseUrl + "/" + "Blog-App/login";
  }
  return {
    // AdminData:state.auth.data[0]
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorizNavbar);