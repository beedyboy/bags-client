import React, { Fragment, useState } from "react";
import { Tooltip } from "primereact/tooltip";
import { Chip } from "primereact/chip";
import { serverUrl, clientUrl } from '../engine/config';
import { toJS } from "mobx";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { data } = props;
  const [imgIdx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const product = toJS(data);
  const { images } = product;

  return (
    <Fragment>
      <div className="product-wrapper ">
        <div className="product-container">
          <div className="product-top">
            <img
              src={`${serverUrl}uploads/products/${images[0]}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={product.id}
              onClick={() => setIsOpen(true)}
            />
            <Chip
              className="totalImg"
              label={images.length.toString()}
              icon="pi pi-camera"
            />
          </div>
          <div className="product-bottom">
            <a
              href={`https://api.whatsapp.com/send?phone=2348181575752&amp;text=${clientUrl}#/${product.product_name};source=&amp;data=&amp;app_absent=`}
              target="_blank"
              rel="noreferrer"
              className="inquire"
              data-pr-tooltip="Ask us on whatsapp"
              data-pr-position="top"
            >
              <i className="fa fa-whatsapp"></i>{" "}
            </a>
            <Link to={`/products/${data.product_name}`}>
            <i className="cart-icon pi pi-icon-search"></i>VIEW
            </Link>
            {/* <a href="/" className="cart-btn">
              <i className="cart-icon pi pi-icon-search"></i>VIEW
            </a> */}
          </div>
        </div>
      </div>
      <Tooltip target=".inquire" />
      {isOpen && (
        <Lightbox
          mainSrc={`${serverUrl}uploads/products/${images[imgIdx]}`}
          nextSrc={`${serverUrl}uploads/products/${
            images[(imgIdx + 1) % images.length]
          }`}
          prevSrc={`${serverUrl}uploads/products/${
            images[(imgIdx - 1) % images.length]
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIdx((imgIdx + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIdx((imgIdx + 1) % images.length)}
        />
      )}
    </Fragment>
  );
};

export default ProductCard;
