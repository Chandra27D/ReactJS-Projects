import React from "react";
import prof_picture from '../images/profile_picture.jpg'
import LinkedIn_logo from '../images/LinkedIn logo.png'
import email_icon from '../images/email_icon.png'

export default function Info (){
    return (
        <nav>
            <img src={prof_picture} alt="profile_picture" />
            <h3>Chandrabhan Singh</h3>
            <h5>Full-stack Web Developer</h5>
            <a id="website" href="chandradev.website">chandradev.website</a>
            <div className="redirects">
            <button className="email--btn"><img src={email_icon} /> Email</button>
            <button className="linkedin--btn"><img src={LinkedIn_logo} /> LinkedIn</button>
            </div>
        </nav>
    )
}