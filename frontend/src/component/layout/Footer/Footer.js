import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" className="" />
            <img src={appStore} alt="Appstore" className="" />
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE.</h1>
            <p>High Quanlity is our first priority</p>
            <p>Copyrights 2022 &copy; IAmRushi</p>
        </div>
        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href="http://instagram.com/i_am_rushi_123">Instagram</a>
            <a href="http://youtube.com/iamrushi">Youtube</a>
            <a href="http://facebook.com/iamrushi">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer