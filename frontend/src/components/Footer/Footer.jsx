import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiHome, HiPhone, HiMail } from "react-icons/hi";
import { IoIosRocket, IoIosCall } from 'react-icons/io'
import "./Footer.css";


const Footer = ({ name, address, phone, email, description }) => {

    return (
        <div className="footer">
            <div>
                <Typography className="aboutme" variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is {name}.<br />{description}
                </Typography>
                <div className="coordonnees">

                    <div className="coordonnee1"><IoIosRocket size={20} className="icon" /><Typography>{address}</Typography></div>


                    <div className="coordonnee1"> <IoIosCall size={20} className="icon" /><Typography>{phone}</Typography></div>

                    <div className="coordonnee1"><HiMail size={20} className="icon" /><Typography>{email}</Typography></div>
                </div>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Me</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/Nourchene-Hamrita" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100006096212756" target="black">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/nourchenehamrita/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/nourchene-hamrita" target="black">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Footer;
