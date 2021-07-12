/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react"; 
import Helmet from "react-helmet";
const About = () => {
  return (
    <Fragment>
      <Helmet>
        <title>About Us Page</title>
      </Helmet>

      <div className="p-d-flex p-flex-column p-jc-between p-ac-between">
        <div className="landing_banner p-mb-3">
          <img
            src="/assets/banners/about-us.jpg"
            alt="faq"
            style={{ width: "100%", height: "100%" }}
            // style={{ width: "fit-content", height: "100%" }}
          />
          <div
            className="p-text-center p-text-bold p-mb-4"
            style={{ marginTop: "-25%", zIndex: 99999, color: "white" }}
          >
            If you were into fashion business, what medium would you choose to
            Show people what you do?
            <p>
              Catch this in our story <i className="fa fa-arrow-down fa-fw"></i>
            </p>
          </div>
        </div>

        <div className="p-text-center p-text-bold p-mb-4">Our Story</div>
        {/* <div className="p-text-center p-text-bold p-mb-4"> */}
       <ul>
         <li> Who were are.</li>
         <li>
What matters to us.</li>
<li>What we do.
</li>
<li>How we do it.</li>
       </ul>
        {/* </div> */}
        
        </div>
    </Fragment>
  );
};

export default About;
