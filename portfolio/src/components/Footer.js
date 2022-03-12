import React from "react";
import facebook_icon from '../images/facebook_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import instagram_icon from '../images/instagram_icon.png'
import GitHub_icon from '../images/GitHub_icon.png'

export default function Footer(){
        return (
                <footer>
                        <img src={facebook_icon} alt="facebook_icon" />
                        <img src={twitter_icon} alt="twitter_icon" />
                        <img src={instagram_icon} alt="instagram_icon" />
                        <img src={GitHub_icon} alt="GitHub_icon" />
                </footer>
        )
}