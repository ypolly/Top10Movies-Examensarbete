import React from "react";
import "../styles.css";


const Footer = () => {

  return (
    <div className="main-footer">
      <div className="containe">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Top 10 Movies</h4>
            <h4 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Gothenburg</li>
              <li>123 Streeet South North</li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>LInks</h4>
            <ul className="list-unstyled">
              <li>AAAAAAAAAAA</li>
              <li>BBBBBBBBBBBB</li>
              <li>CCCCCCCCCC</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>AAAAAAAAAAA</li>
              <li>BBBBBBBBBBB</li>
              <li>CCCCCCCCCCC</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Top10Movies | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;