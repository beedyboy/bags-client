/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PageItemLoading from "../widgets/PageItemLoading";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import ProductsStores from "../store/ProductsStores";
import ReactHtmlParser from "react-html-parser";
import { serverUrl, clientUrl } from '../engine/config';
import { Galleria } from "primereact/galleria";
import { Divider } from "primereact/divider";
import { BreadCrumb } from "primereact/breadcrumb";
import categories from "../engine/categories.json";
const ProductDetails = () => {
  const params = useParams();
  const store = useContext(ProductsStores);
  const { loading, getProductInfo, product: data } = store;
  useEffect(() => {
    getProductInfo(params.slug);
  }, []);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];
  const { images } = data;
  let items = [];
  const filterCategory = (item) => {
    return (
      categories.data.filter(
        (x) => x.label.toLocaleLowerCase() === item.toLocaleLowerCase()
      ) || "null"
    );
  };
  const home = { icon: "pi pi-home", url: "/" };
  if (data && data.category) {
    const cat = {
      label: data.category,
      url: `/#/category/${filterCategory(data.category)[0].value}`,
    };
    items.push(cat);
  }
  if (data && data.sub_id) {
    const sub = { label: data.subName };
    items.push(sub);
  }
  // console.log({items})
  const itemTemplate = (item) => {
    return (
      <div className="info-carousel-content">
        <img
          src={`${serverUrl}uploads/products/${item}`}
          alt={item}
          style={{ width: "fit-content", height: "fit-content" }}
        />
      </div>
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={`${serverUrl}uploads/products/${item}`}
        alt={item}
        style={{ width: "80px", height: "70px" }}
      />
    );
  };
 
  return (
    <Fragment>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <PageItemLoading loading={loading} />
      <div className="card">
        <BreadCrumb model={items} home={home} className="p-text-capitalize" />
      </div>
      <div className="p-d-flex p-jc-center p-shadow-1 p-mb-3">
        <div className="p-info-page">
          <div className="p-d-flex p-jc-center info-carousel p-mb-3">
            <Galleria
              value={images}
              responsiveOptions={responsiveOptions}
              numVisible={5}
              style={{ width: "fit-content" }}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
              showItemNavigators
              showItemNavigatorsOnHover
            />
          </div>
        </div>
        <Divider layout="vertical"  />
        <div className="card p-mr-2 ">
          <h4 className="p-text-bold">Description</h4>
          <Divider />
          <div className="p-shadow-1 p-p-3">
            {ReactHtmlParser(data && data.description)}
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=2348181575752&amp;text=${clientUrl}#/${
              data && data.id
            };source=&amp;data=&amp;app_absent=`}
            target="_blank"
            rel="noreferrer"
            className="inquire p-button p-m-2"
            data-pr-tooltip="Ask us on whatsapp"
            data-pr-position="top"
          >
            <i className="fa fa-whatsapp"></i>{" "}
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default observer(ProductDetails);
