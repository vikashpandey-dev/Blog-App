import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { getBillboard,Dashboardcount } from "../../../api/billBoard";
import { getBanner, handletabs } from "../../../api/banner";
import { getEvent } from "../../../api/community";
import { getPost } from "../../../api/community";
import { GetUSers } from "../../../api/users";
import moment from "moment";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Card1 from "../../../assets/icons/Card1.png";
import Card2 from "../../../assets/icons/Card2.png";
import Card3 from "../../../assets/icons/Card3.png";
import Card4 from "../../../assets/icons/Card4.png";
import Card5 from "../../../assets/icons/Card5.png";
import { handletoggletabse } from "../../../api/banner";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loder/Loder";
import { setPage } from "../../../store/auth";
function Header(props) {

 
  const [loder, setloder] = useState(false);
  const GetDashBoard = async () => {
    try {
      const payload = {
        Search: "",
      };
      setloder(true)
      await props.DashboardcountApi();
      
      setloder(false)
    } catch (err) {
      setloder(false)
      console.log(err);
    }
  };

  useEffect(() => {
    GetDashBoard();
  }, []);
 

  return (
    <>
    {loder?<Loader/>:(
        <div className="p-6 bge8f4ff w-full">
        <div className="flex justify-between">
          <div className="flex justify-center items-center">
            <p className="hdr-title">Dashboard</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3 mt-4">
          <Card>
            <CardBody>
              <div
                className="flex gap-4 items-center rounded-xl cursor-pointer"
                onClick={() => redirectotpage("community", "post")}
              >
                <div>
                  <img src={Card1} alt="" />
                </div>
                <div className="text">
                  <p className="hdr-subttl">Total Blog</p>
                  {props.setDashboard ? (
                    <h3 className="font-bold text-2xl">
                      {props.setDashboard.blogCounts}
                    </h3>
                  ) : (
                    <h3 className="font-bold text-2xl">0</h3>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
      
          <Card>
            <CardBody>
              <div
                className="flex gap-4 items-center rounded-xl cursor-pointer"
                onClick={() => redirectotpage("community", "users")}
              >
                <div>
                  <img src={Card3} alt="" />
                </div>
                <div className="text">
                  <p className="hdr-subttl">Total User</p>
                  {props.setDashboard ? (
                    <h3 className="font-bold text-2xl">
                      {props.setDashboard.userCount}
                    </h3>
                  ) : (
                    <h3 className="font-bold text-2xl">0</h3>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        
        </div>
      </div>
    )}
    </>
  
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    DashboardcountApi: (payload) => dispatch(Dashboardcount(payload)),
  };
};
const mapStateToProps = (state, props) => {
  return {
    setDashboard: state.billBoard.setDashboard,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
