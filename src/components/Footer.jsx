import React from "react"

import "../styles/components/Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="list-cont">
            <h4>Terms of Use</h4>
            <h4>Privacy-Policy</h4>
            <h4>Blog</h4>
            <h4>FAQ</h4>
            <h4>Watch List</h4>
            <h3>Follow US</h3>
            <h3>Cinema App</h3>
        </div>
        <div className="text-cont">
          <h4>@2024 Cinema. All Rights Reserved</h4>
          <div className="follow-cont">
            <img src="/socialicons/instagram.png" alt="" />
            <img src="/socialicons/twitter.png" alt="" />
            <img src="/socialicons/youtube.png" alt="" />
          </div>
          <div className="app-cont">
          <img src="/socialicons/google-play.png" alt="" />
          </div>
        </div>

    </div>

    </>
  )
}

export default Footer