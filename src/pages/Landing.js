/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import ProductsStores from "../store/ProductsStores";
import Categories from "../views/Landing/Categories";
import LatestProduct from "../views/Landing/LatestProduct";
import SlideBanner from "../views/Landing/SlideBanner";
import BannerCard from "../widgets/BannerCard";
import SubscribeBox from "../widgets/SubscribeBox";
import { observer } from "mobx-react-lite";
const Landing = () => {
  const productStore = useContext(ProductsStores);
  const {
    brandedProduct,
    featuredProduct,
    arrivalProduct,
    getProducts,
    loading, 
  } = productStore;
  // console.log({ allProduct });
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="p-d-flex p-flex-column p-jc-between p-ac-between">
            <SlideBanner /> 
            <section>
        <Categories />
            </section>

        <div
          className="p-d-flex p-jc-between p-ac-between p-ml-2 p-mr-2 p-mt-5"
          // style={{ width: "100%" }}
        >
          <BannerCard
            image="/assets/banners/left.png"
            heading="Owambe Essential"
            sub="Luxury Swarvroski"
            path="/"
            bg="#E17F93"
          />
          <BannerCard
            image="/assets/banners/right.png"
            heading="Daily Essential"
            sub="Branded Swarvroski"
            path="/branded"
            bg="#DDC0B4"
          />
        </div>
        <div
          className="p-d-flex p-flex-column p-jc-between p-ai-center"
          style={{ width: "100%" }}
        >
          <LatestProduct
            branded={brandedProduct}
            featured={featuredProduct}
            arrival={arrivalProduct}
          />
        </div>
        <div
          className="p-d-flex p-p-5 p-shadow-18"
          style={{ width: "100%" }}
          id="subscribersbox"
        >
          <SubscribeBox />
        </div>
      </div>
    </>
  );
};

export default observer(Landing);
