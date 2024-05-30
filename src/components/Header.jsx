import React from "react";
import "../styles/components/Header.css"
import { Link } from "react-router-dom";
import Button from "./Button";

const Header =()=>{

    return(<>
    <div className="head-cont">
         <div className="logo-cont">
            <img src="/Icons/playIcon.png" alt="playIcon" />
            <h3>Cinema</h3>
         </div>
         <div className="link-cont">
               <Link to='/' style={{textDecoration:'none'}}>
                <p className="link">Home</p>
               </Link>
               <Link to='/movies' style={{textDecoration:'none'}}>
                <p className="link">Movies</p>
               </Link >
               <Link to='/series' style={{textDecoration:'none'}}>
                <p className="link">Series</p>
               </Link>
               <Link to='/animation' style={{textDecoration:'none'}}>
                <p className="link">Animation</p>
               </Link>
         </div>
          <div className="search-cont">
            <input class="input" name="text" placeholder="Search..." type="search"/>
          </div>
         <div className="login-btn">
         <Link to="/login">
         <Button buttonText={'Login'} />         
         </Link>
         </div>
         <div className="sub-btn">
           <Link to='/subscribe'>
           <Button buttonText={'Subscribe'} />           
           </Link>
         </div>
    </div>
    </>)

}
export default Header;