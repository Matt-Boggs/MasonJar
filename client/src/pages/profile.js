import React, {useState, useEffect} from "react";
import { useAuth0 } from "../react-auth0-spa";
import Nav from "../components/Nav";
import Footer from "../components/Footer/index.js";
import "../index.css";

//this destructures useAuth0 into useable variables
const Profile = (props) => {

  const [user, setUser] = useState();
    // const { name, picture, email } = user;
    useEffect(() =>{
        setUser()
        console.log(user)
    })

   
  return (
    <>
     
    <div className="profile-container"> 
      <Nav />
      <h1 className="profile-title">Account Information</h1>
      <div className="acount-container">
        <div className="col-md-2 mb-3">
          <br></br>
            <img
              // src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
        </div>
        <div className="col-md text-center text-md-left">
          <h2 className="user-name">{props.user}</h2>
          <br></br>
          <p className=" user-info">Username:</p>
          <br></br>
          <p className="user-info ">Email: {props.email}</p>  
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
    </>
  );
};

export default Profile;