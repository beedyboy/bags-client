import React, { Fragment, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PageItemLoading from "../widgets/PageItemLoading";
import Helmet from "react-helmet";
import ProductsStores from "../store/ProductsStores";
import ProductCard from "../widgets/ProductCard";
const Products = () => {
  const store = useContext(ProductsStores);
  const { loading, getProducts, allProduct: data } = store;
  useEffect(() => {
    getProducts();
  }, []); 
  
  return (
    <Fragment>
         <Helmet>
        <title>
          Product Page
        </title>
        </Helmet>
      <PageItemLoading loading={loading} />

   <div className="p-d-flex p-jc-between p-ac-between">
   {data && data.length > 0 ? (
        data.map((product) => {
          return (
            <Fragment key={product.id}>
              <ProductCard data={product} />
            </Fragment>
          );
        })
      ) : (
        <h4 className="p-text-center">No product found!</h4>
      )}
   </div>
    </Fragment>
  );
};

export default observer(Products);
