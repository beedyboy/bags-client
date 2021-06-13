import React, { Fragment } from "react";
import { Button } from "primereact/button";

const BannerCard = (props) => {
  const { image, heading, sub, path, bg } = props;
  return (
    <Fragment>
      <div
        className="p-grid p-mr-2 p-ml-2"
        style={{ height: "259px", width: '100%', background: `${bg}` }}
      >
        <div className="p-col-8 p-col-align-end">
          <p>{heading}</p>
          <p>{sub}</p>
          <Button label="Shop Now" className="p-button-plain" />
        </div>
        <div className="p-col-4">
          <img src={image} alt={image} width="100%" />
        </div>
      </div>
      {/* <div
        className="p-d-flex p-jc-between p-mr-2 p-ml-2"
        style={{ height: "259px", background: `${bg}` }}
      >
        <div
          className="p-d-flex p-flex-column p-jc-end"
          style={{ width: "60%", marginLeft: "1rem" }}
        >
          <p>{heading}</p>
          <p>{sub}</p>
          <Button label="Shop Now" className="p-button-link p-button-plain" />
        </div>
        <div style={{ width: "40%", marginRight: "1rem" }}>
          <img src={image} alt={image} width="100%" />
        </div>
      </div> */}
    </Fragment>
  );
};

export default BannerCard;
