import React from "react";
import { Divider } from "primereact/divider";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="p-d-flex d-flex-column p-flex-wrap p-jc-between">
        <div
          className="p-d-flex p-flex-wrap p-jc-between w-100"
          style={{ background: "#C4C4C4" }}
        >
          <div className="p-d-flex p-flex-column p-jc-between p-ac-between w-50 p-p-2">
            <div className="p-text-center p-text-bold p-mb-4">Map Location</div>
            <div className="gmap_canvas p-pl-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3548844499096!2d3.3378086144131722!3d6.602744995225082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92267f4514db%3A0x21a238fc27c2ecb0!2sBags%20warehouse1!5e0!3m2!1sen!2sng!4v1623592518235!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                // allowfullscreen=""
                loading="lazy"
                title="location"
              ></iframe>
            </div>
          </div>
          <div className="p-d-flex p-flex-column w-50 p-p-2">
            <div className="p-text-center p-text-bold p-mb-4">
              Quick Links
            </div>
            <ul className="footer-link">
              <li><Link to="/payments">Payment & Order</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
            <div className="p-d-flex p-flex-column p-text-justify p-text-uppercase">
             
            </div>
          </div>
        </div>
        {/*         
        <div
          className="p-grid p-p-3 p-dir-column w-100 p-justify-around"
          style={{ background: "#C4C4C4" }}
        >
          <div className="p-col-6">
            <div className="p-d-flex p-flex-column p-jc-between p-ac-between">
              <div className="p-text-center p-text-bold p-mb-4">
                Map Location
              </div>
              <div className="gmap_canvas p-pl-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3548844499096!2d3.3378086144131722!3d6.602744995225082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92267f4514db%3A0x21a238fc27c2ecb0!2sBags%20warehouse1!5e0!3m2!1sen!2sng!4v1623592518235!5m2!1sen!2sng"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                  title="location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="p-col-6">
            <div className="p-grid p-align-between">
              <div className="p-text-center p-text-bold p-mb-4">
                Let Us Help You
              </div> 
                <Link to="/payments" className="p-col-12">Payment</Link>
                <Link to="/contact-us" className="p-col-12">Contact Us</Link>
                <Link to="/faq" className="p-col-12">FAQ</Link> 
            </div>
          </div>
        </div> */}

        <div className="w-100">
          <Divider />
          <span>
            Copyright &copy; {new Date().getFullYear()} Bags, Footwear and More
            - All Rights Reserved
          </span>
        </div>
      </div>
      {/* <div className="p-col-6">
            <div className="p-grid p-align-between">
              <div className="p-col-12">
                <div className="p-text-center p-text-bold p-mb-4">
                  Let Us Help You
                </div>
              </div>
              <div className="p-col-12">
                <address className="p-text-center p-text-wrap">
                  Contact Us Monday through Friday From 9am to 6pm CAT, and
                  Saturday & Sunday from 10am to 6pm CAT
                </address>
              </div>
              <div className="p-col-12">
                <div className="p-grid p-justify-center">
                  <div className="p-col-3">Address:</div>
                  <div className="p-col-9">
                    <address className="p-text-center p-text-wrap">
                      Shekinah Plaza, 23 Ajao road, Off Adeniyi Jones (Close to
                      Time Square Event Center). Ikeja, Lagos, Nigeria.
                    </address>
                  </div>
                </div>
              </div>

              <div className="p-col-12">
                <div className="p-grid p-justify-center">
                  <div className="p-col-3">Helpline:</div>
                  <div className="p-col-9 p-text-center p-text-wrap">
                    +2348181575752
                  </div>
                </div>
              </div>

              <div className="p-col-12">
                <div className="p-grid p-justify-center">
                  <div className="p-col-3">Email:</div>
                  <div className="p-col-9 p-text-center p-text-wrap">
                    bagsnmore@yahoo.com
                  </div>
                </div>
              </div>
            </div>
          </div> */}
    </footer>
  );
};
