import React from "react";
import { Link } from "react-router-dom";
// import NavLogoLink from "../NavLogoLink";
import "./Footer.scss";
import {Instagram,Facebook,Twitter,Slack} from "../../Components/Icons"
import {ExternalLink}  from "react-external-link"

export default () => (
  <footer className="footer" id="js-footer">
    <div className="row">
      <div className="footer-links-container">

        <ul className="main-links">
          <li className="woc-link">
            <Link to="/" className="linkFix margin-right">
              <div className="nav-logo">
                <div className="main-nav-logo-container">
                  <img
                    src={require("../../Assets/org-logo.png")}
                    className="image"
                    alt="winter of code logo"
                  />
                </div>
                <p className="nav-logo-text nav-logo-text-footer">Winter of Code</p>
              </div>
            </Link>
          </li>  

          <li>
          <div className="social-links">
            <ExternalLink href="https://www.instagram.com/winterofcode/">
            <Instagram fill={"#DA003D"} width={30} height={30} />
            </ExternalLink>
            <ExternalLink href="https://www.facebook.com/winterofcode/">
            <Facebook fill="#4267B2" width={30} height={30} />
            </ExternalLink>
            <ExternalLink href="https://twitter.com/winterofcode/">
            <Twitter fill="#00acee" width={30} height={30} />
            </ExternalLink>
            <ExternalLink href="https://dscnsec-winterofcode.slack.com">
            <Slack fill="#ECB22E" width={40} height={40} />
            </ExternalLink>
        
            </div>
          </li>

          <li>
          <p className="footer-text">The Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.</p>

          <p className="footer-text copyright">&copy;Winter of Code 2020</p>
          <p className="footer-text copyright">Developed By <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vishwajeetraj11/">Vishwajeet Raj</a></p>

          </li>

        </ul>

        <ul className="projects">
        <li className="footer-title">Resources</li>
        {Resources.map((link,index) => <li className="list-link" key={index}><ExternalLink className="footer-link" href={link.url}>{link.title}</ExternalLink></li>)}
        </ul>

        <ul className="organisations">
        <li className="footer-title">Organisations</li>
        <div className="organisation-links">
        {Organisations.map((link, index) => <li key={index} className="list-link"><ExternalLink className="footer-link" href={link.url}>{link.title}</ExternalLink></li>)}
        </div>
        </ul>

        <ul className="dscnsec handles">
        <li className="footer-title">DSC NSEC Handles</li>
        <div className="dsc-social-links">
        {DSC_NSEC_Links.map((link, index) => <li key={index} className="list-link"><ExternalLink className="footer-link" href={link.url}>{link.title}</ExternalLink></li>)}
        </div>
        </ul>

      </div>
    </div>
  </footer>
);

const Resources = [
  {
    title: "Intro to ML",
    url: "https://intro2ml.dscnsec.com/", 
  },
  {
    title: "Logo Generator",
    url: "https://logo-generator.dscnsec.com/", 
  },
  {
    title: "DSC NSEC Go",
    url: "https://go.dscnsec.com/", 
  },
  {
    title: "Full Stack Projects",
    url: "https://www.youtube.com/playlist?list=PLLGfrNGZ7g4MzarnbBN-DC_AGErhYMC2s", 
  },
  {
    title: "30 Days of Google Cloud",
    url: "https://30daysofgc.dscnsec.com/", 
  }
]

const Organisations = [
  {
    title: "DSC NSEC",
    url: "https://dscnsec.com/"
  },
  {
    title: "The Code Foundation (TCF)",
    url: "https://thecodefoundation.dev/"
  },
]

const DSC_NSEC_Links = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dscnsec/"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/dscnsec"
  },
  {
    title: "Telegram",
    url: "https://t.me/dscnsec"
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/channel/UCKKrqXvTWZm0tULPxqv1NPg"
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/dscnsec/"
  },
]