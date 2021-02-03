import React from "react";
import "../styles.css";
import Layout from '../core/Layout';
import Footer from './footer';

const ContactUs = () => {

  return (
    <Layout title="Contact Us" description="">

    <div className="textpagescontainer  d-flex justify-content-center ">
    <div className="textpages row">
    <img
            className="customcarouse d-block w-100"
            src="/images/contactus1.png"
            alt="First slide"
          />
        
    <p>You can visit the github repo as follows: </p>
    <p>https://github.com/ypolly/Top10Movies-Examensarbete </p>
 
    </div>    
       
    </div>
    <Footer />
    </Layout>
);
};
export default ContactUs;