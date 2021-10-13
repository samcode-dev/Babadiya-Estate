import React from 'react'

import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterColumnLeft,
    FooterColumnRight,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    Small,
    FooterLinkItems,
} from "./FooterElements"


const Footer = ({
    heading, 
    link1, 
    link2, 
    link3, 
    link4, 
    link5, 
    }) => {

    return (
        <FooterContainer>
            <FooterWrap>                
                <FooterColumnLeft>
                    <h1>{heading}</h1>
                </FooterColumnLeft>
                <FooterColumnRight >
                    <FooterLinkItems>
                        <h2>Contact Us</h2>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Questions</Link> 
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <h2>Offices</h2>
                        <Link to='/'>United States</Link>
                        <Link to='/'>Europe</Link>
                        <Link to='/'>Canada </Link>                                              
                    </FooterLinkItems>
                    
                </FooterColumnRight>    
                 
            </FooterWrap>
            <SocialMediaWrap>
                <SocialIcons>
                    <SocialIconLink href='https://facebook.com/samuel.oluwatimileyin.140' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='https://instagram.com/sammy_devv' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink
                        href=''
                        target='_blank'
                        aria-label='Twitter'
                        rel='noopener noreferrer'
                    >
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='' target='_blank' aria-label='Linkedin'>
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>                   
            </SocialMediaWrap>
            <Small >Babadiya Samuel {new Date().getFullYear()}</Small>  
        </FooterContainer>        
    )
}

export default Footer
