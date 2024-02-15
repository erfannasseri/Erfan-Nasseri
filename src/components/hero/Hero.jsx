import React, { useState ,  useEffect} from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/erfanNasseri.jpg";
import heroImgMobile from "../../assets/img/erfanNasseriM.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Hero.css"

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "erfan nasseri",
  heroDesignation: "developer & graphic designer & founder of ",
  heroDescriptions: `I'm a Web developer with JavaScript and React js library and familiar with Next js framework and also proficient in WordPress.
  I'm the founder of Feel Company.
  Feel Company is a digital marketing agency that helps the development and progress of companies and brands.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const [isDark, setisDark] = useState(true);

  useEffect(() => {
    let theme = document.querySelector("body").classList.value
    console.log(theme);
  }, []);
  

  return (
    <>
      <div className="row home-details-container align-items-center pd-10">
        
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start" style={{display:"flex", justifyContent:"center"}}>
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <Logo />
                  
            <h1 className="text-uppercase poppins-font" style={{fontSize:"35px", marginTop:"0px"}}>
              
              <span>I'm {heroContent.heroTitleName}.</span>
              <span>{heroContent.heroDesignation}</span>
              Feel Company
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
{/*            <button className="button" onClick={toggleModalOne} style={{margin:"2rem"}}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
        </button>*/}
            <Link to={"https://www.feelco.ir"} target="_blank" >
            <button className="button mb-10">
              <span className="button-text"> www.Feelco.ir </span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
