import React, { Fragment } from "react";
import shortId from "short-id"
const Categories = () => {
  const images = [
    {
      src: "/assets/categories/Ellipse6.png",
      alt: "Belts",
    },
    {
      src: "/assets/categories/Ellipse7.png",
      alt: "Jewelries",
    },
    {
      src: "/assets/categories/Ellipse8.png",
      alt: "Shoes",
    },
    {
      src: "/assets/categories/Ellipse9.png",
      alt: "Swarvroski Purses",
    },
    {
      src: "/assets/categories/Ellipse10.png",
      alt: "Handbags",
    },
    {
      src: "/assets/categories/Ellipse11.png",
      alt: "Sun Shades & Frames",
    },
  ];
  return (
    <Fragment>
      <div className="p-text-center p-text-uppercase section-headers p-mb-3">Browse Categories</div>
      <div className="p-d-flex p-jc-center p-ac-between p-flex-wrap">
        {images.map((item) => {
          return (
            <Fragment key={shortId.generate()}>
              <a href={item.src} className="p-d-flex p-flex-column p-mr-3">
                <img src={item.src} alt={item.src} className="ellipse" />
                <p className="ellipse-text p-text-center">{item.alt}</p>
              </a>
            </Fragment>
          );
          //   return ;
        })}
      </div>
    </Fragment>
  );
};

export default Categories;
