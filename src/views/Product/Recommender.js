import React, { Fragment } from "react";
import ProductCarosel from "../../widgets/ProductCarosel";
import { Divider } from "primereact/divider";

const Recommender = (props) => {
  const {  data } = props;
  return (
    <Fragment>
      <div className="tabview-demo">
        <div className="card">
          {/* <div className="p-text-center section-headers p-mt-3 p-mb-1"> Products</div> */}
          <Divider>
            <b>Recommended Products</b>
          </Divider>
          {data && data.length > 0 ? (
            <ProductCarosel products={data} />
          ) : (
            <h4 className="p-text-center">No product found!</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Recommender;
