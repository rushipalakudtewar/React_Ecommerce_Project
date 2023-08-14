import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
// import { RiAccountBoxFill } from "react-icons/ri"
// import { MdShoppingCart } from "react-icons/md"
// import { BsSearch } from "react-icons/bs"

const options = { 
      burgerColor:"black",
      burgerColorHover:"#a62d24",
      logo,
      navColor1:"white",
      logoWidth:"20vmax",
      logoHoverSize:"10px",
      logoHoverColor:"#eb4034",
      link1Text:"Home",
      link2Text:"Product",
      link3Text:"Contact",
      link4Text:"About",
      link1Url:"/",
      link2Url:"/products",
      link3Url:"/contact",
      link4Url:"/about",
      link1Size:"1.2vmax",
      link1Color:"rgba(35,35,35,0.8)",
      nav1justifyContent:"flex-end",
      nav2justifyContent:"flex-end",
      nav3justifyContent:"flex-start",
      nav4justifyContent:"flex-start",
      link1ColorHover:"#eb4034",
      link1Margin:"1vmax",      
      searchIconSize:"2vmax",
      profileIconSize:"2vmax",
      cartIconSize:"2vmax",
      profileIconUrl:"./login",
      profileIconColor:"rgba(35,35,35,0.8)",
      searchIconColor:"rgba(35,35,35,0.8)",
      cartIconColor:"rgba(35,35,35,0.8)",
      profileIconColorHover:"#eb4034",
      searchIconColorHover:"#eb4034",
      cartIconColorHover:"#eb4034",
      searchIconMargin:"1vmax",
      profileIconMargin:"1vmax",
      cartIconMargin:"1vmax",
};
const Header = () => {
  return <ReactNavbar { ...options }/>
}

export default Header;
