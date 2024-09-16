import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import VerticleNavbar from "../src/components/VertNavbar";
import HorizNavbar from "../src/components/HorizNavbar";
import { Switch, Route } from "react-router-dom";
import Billboard from "./pages/billboard/Billboard";
import Feedback from "./pages/feedback/Feedback";
import Community from "./pages/community/Community";
import Homes from "./pages/Users/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Users/Footer/Footer";
import Details from "./pages/Users/BlogDetails/Details";
import { useLocation } from 'react-router-dom';
import Register from "./pages/login/Register";
function App() {
  const location = useLocation();
  return (
    <div className="flex w-full">
      {location.pathname.includes("/login") || location.pathname.includes("/home") || location.pathname.includes("/register") || location.pathname.includes("/Details")? (
        ""
      ) : (
        <div className="w8perc h-screen border-r-4 sticky top-0">
          <VerticleNavbar />
        </div>
      )}
      <div className="w-full bg-secondary">
        {window.location.href.includes("/login") || location.pathname.includes("/register") ? (null) : <Navbar />}
        <Switch>
          {/* user routes */}
          <Route
            path={`${import.meta.env.BASE_URL}home`}
            exact
            component={Homes}
          />
          <Route
            path={`${import.meta.env.BASE_URL}dashboard`}
            exact
            component={Home}
          />
            <Route
            path={`${import.meta.env.BASE_URL}Details`}
            exact
            component={Details}
          />
          <Route
            path={`${import.meta.env.BASE_URL}login`}
            exact
            component={Login}
          />
           <Route
            path={`${import.meta.env.BASE_URL}register`}
            exact
            component={Register}
          />
          <Route
            path={`${import.meta.env.BASE_URL}billboard`}
            exact
            component={Billboard}
          />
          <Route
            path={`${import.meta.env.BASE_URL}feedback`}
            exact
            component={Feedback}
          />
          <Route
            path={`${import.meta.env.BASE_URL}community`}
            exact
            component={Community}
          />
        </Switch>
        <Footer/>

      </div>
    </div>
  );
}
export default App;
