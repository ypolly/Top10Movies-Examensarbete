import React from "react";
//import Menu from "./Menu";
import "../styles.css";
import Footer from '../core/footer'


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <>
    <div style={{ minHeight: '60vh'}} >
       
        <div className="d-flex justify-content-center">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
       
    </div>
     <Footer/>
     </>
);

export default Layout;