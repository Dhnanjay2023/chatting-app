import "./Meet.css"
import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";
};

const Meet = () => {
    const [name , setName]= useState ("");
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img className="login-logo" src={logo} alt="logo" />
        <h1>C CHAT</h1>
        <input onChange={(e)=> setName (e.target.value)}  placeholder="Enter Your Name..." type="text" id="joinInput" /> 
        <br/>
        <Link onClick={(event)=> !name? event.preventDefault():null} to="/chat"> <button onClick={sendUser} className="joinbtn">Login In</button> </Link>
      </div>
    </div>
  );
};

export default Meet;
export { user }; 
