/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PageItemLoading from "../widgets/PageItemLoading";
import Helmet from "react-helmet";
import ProductsStores from "../store/ProductsStores";
import ProductCard from "../widgets/ProductCard";
import { useParams } from "react-router-dom";
const Category = () => {
  const store = useContext(ProductsStores);
  const params = useParams();
  const { loading, getProductsByCategory, productCategoryMenu: data } = store;
  useEffect(() => {
    getProductsByCategory(params.slug);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Category Page</title>
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

export default observer(Category);
