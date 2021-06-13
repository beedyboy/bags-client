import React, { Fragment } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button"; 
import { serverUrl } from '../engine/config';

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
];
const ProductCarosel = (props) => {
  const { products } = props; 
   
// best: true
// brandName: "Puma"  
// category: "footwears" 
// description: "<p>Blue, double laced sneakers</p>" 
// id: 12 
// subName: "half shoes"
  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-1">
            <img
              src={`${serverUrl}uploads/products/${product.images[0]}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={product.id}
              className="product-image"
            />
          </div>
          <div>
            <h4 className="p-mb-1 p-text-center">{product.category}</h4>
            {/* <h6 className="p-mt-0 p-mb-3">${product.price}</h6> */}
            {/* <span
              className={`product-badge status-${product.status.toLowerCase()}`}
            >
              {product.status}
            </span> */}
            <div className="car-buttons p-mt-5">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded p-mr-2"
              />
              <Button
                icon="pi pi-star"
                className="p-button-success p-button-rounded p-mr-2"
              />
              <Button
                icon="pi pi-cog"
                className="p-button-help p-button-rounded"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </Fragment>
  );
};

export default ProductCarosel;
