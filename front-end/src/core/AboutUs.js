import React from "react";
import "../styles.css";
import Layout from '../core/Layout';

const AboutUs = () => {

  return (
    <Layout title="About Us" description="">
    <div className="textpagescontainer  d-flex justify-content-center ">
    <div className="textpages row">
    <img
            className="customcarouse d-block w-100"
            src="/images/aboutus.jpg"
            alt="First slide"
          />
        
        <p>This project is the final exam project for the university studies, presented to Medieinstitute located in Gothenburg Sweden. </p>
        <p>Under the program by the Medieinstitute which is a vocational university, the focus has been to develop websites and platforms focused on ecommerce.</p>
        <p>The syntax studied include Fullstack PHP MySql, Fullstack MERN, and CMS such as wordpress and shopify </p>
        <p>This website has been built with Fullstack MERN: MongoDB, Express, React and NodeJs. Braintree has been used for payement system.</p>
        <p>Other APIes used include Sengrid for email alerts and confirmation</p>
 
    </div>    
       
    </div>




          
    </Layout>
    
);
};
export default AboutUs;