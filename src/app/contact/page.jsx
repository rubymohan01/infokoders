"use Client";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "../../components/contact/ContactForm";
import styles from "./../../styles/Contact.module.css";
import Footer from "../../components/footer/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../../components/navbar/Navbar";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen font-circular ">
      <Navbar nav={true} />
      <div id="carousel" className={styles.contactBanner}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <div className={styles.row}>
              <div className="col-md-8">
                <div className="ps-20 text-left md:text-center  md:text-[60px] sm:text-[0px] lg:text-[60px]">
                  <h1 className={styles.h1}>Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 mt-10">
        <span className="text-[30px] font-[NovemberPro] text-[#650909] text-center font-bold flex justify-center items-center h-[20]">
          Every great deal starts with a simple conversation
        </span>
        <span className="text-[25px] font-[NovemberPro-Reg] font-bold text-center flex justify-center items-center h-[20] ">
          Want to do a Project with us? Let’s talk!
        </span>
      </div>
      <div className="flex flex-col md:flex-row w-full p-4 lg:p-24">
        {/* <div className='text-[30px]' >Every great deal starts with a simple conversation</div>
         */}

        <div
          className={`flex flex-col p-10 py-12 border border-gray-100 rounded-lg shadow-lg m-4 md:m-0 md:mr-4 md:w-1/2 font-circular ${styles.details}`}
        >
          <span className="text-[#333] font-[NovemberPro] text-[25px] font-bold mb-10 text-center">
            Contact Details
          </span>
          <span className="flex items-center font-[NovemberPro-Reg] mb-4 text-center md:text-left">
            <LocationOnIcon className="mr-2 self-start mb-5" />
            213, Satguru Parinay Opp. C21 mall, <br /> AB Rd Indore, MP 452001,
            IN
          </span>
          <span className="flex items-center font-[NovemberPro-Reg] text-center md:text-left">
            <EmailIcon className="mr-2" /> hr@infokoders.com
          </span>
          <span className="flex items-center font-[NovemberPro-Reg] mt-5 ">
            <LocalPhoneIcon className="mr-2 " />
            0731-4105427
          </span>
          <span
            className="flex items-start font-[NovemberPro-Reg] md:text-left mt-5 "
            style={{ marginBottom: "160px" }}
          >
            <LinkedInIcon className="mr-2 self-start" />
            InfoKoders Technologies Private Limited
          </span>
        </div>
        <div className="flex flex-col px-2  border border-gray-100 rounded-lg shadow-lg m-4 md:m-0 md:ml-4 md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.558644985285!2d75.8820338!3d22.7230498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda822cee3e05d2ec!2sInfoKoders%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1652078046125!5m2!1sen!2sin"
          width="100%"
          height="450px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
