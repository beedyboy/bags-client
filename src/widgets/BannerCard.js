import React, { Fragment } from "react";
import { Button } from "primereact/button";

const BannerCard = (props) => {
  const { image, heading, sub, path, bg } = props;
  return (
    <Fragment>
      {/* <div className="p-d-flex"> */}
        
      <div
        className="p-grid p-p-6 white-color p-m-3"
        style={{ height: "249px", width: "95%",  background: `${bg}` }}
      >
        <div className="p-col-7 p-col-align-end">
          <p>{heading}</p>
          <p
            className="p-text-bold"
            style={{ fontFamily: "Libre Baskerville", letterSpacing: "0.5em" }}
          >
            {sub}
          </p>
          <Button
            label="Shop Now"
            className="p-button-rounded app-color bg-white"
          />
        </div>
        <div className="p-col-5">
          <img src={image} alt={image} width="100%" />
        </div>
      </div>
   
      {/* </div> */}
    </Fragment>
  );
};

export default BannerCard;
