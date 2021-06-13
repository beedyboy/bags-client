import React, { Fragment } from "react";
import { TabView, TabPanel } from "primereact/tabview"; 
import ProductCarosel from "../../widgets/ProductCarosel";

const LatestProduct = (props) => {
  const { branded, featured, arrival } = props;
  return (
    <Fragment>
      <div className="tabview-demo">
        <div className="card">
          <div className="p-text-center section-headers p-mt-3 p-mb-1"> Products</div>
          <TabView>
            <TabPanel header="New Arrival">
              {arrival && arrival.length > 0 ? (
                <ProductCarosel products={arrival} />
              ) : (
                <h4 className="p-text-center">No product found!</h4>
              )}
            </TabPanel>
            <TabPanel header="Featured">
              {featured && featured.length > 0 ? (
                <ProductCarosel products={featured} />
              ) : (
                <h4 className="p-text-center">No product found!</h4>
              )}
            </TabPanel>
            <TabPanel header="Branded">
              {branded && branded.length > 0 ? (
                <ProductCarosel products={branded} />
              ) : (
                <h4 className="p-text-center">No product found!</h4>
              )}
            </TabPanel>
          </TabView>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestProduct;
