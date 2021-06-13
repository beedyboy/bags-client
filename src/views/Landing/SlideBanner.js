import React, { Fragment } from "react";
import { Galleria } from "primereact/galleria";

const SlideBanner = () => {
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
const images =[
    {
        src: "/assets/banners/5132704.jpg",
        alt:"banner"
    },
    {
        src: "/assets/banners/9550448.jpg",
        alt:"banner2"
    }
]
  const itemTemplate = (item) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };
 

  const indicatorTemplate = (index) => {
    return <span className="indicator-text">{index + 1}</span>;
  };

  const caption = (item) => {
    return (
        <React.Fragment>
            <h4 className="p-mb-2">{item.title}</h4>
            <p>{item.alt}</p>
        </React.Fragment>
    );
  };
  return (
    <Fragment>
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        style={{ maxWidth: "100%" }}
        showThumbnails={false}
        showIndicators
        item={itemTemplate}
        // caption={caption}
      />
    </Fragment>
  );
};

export default SlideBanner;
