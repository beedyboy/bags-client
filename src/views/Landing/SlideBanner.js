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
  const images = [
    {
      src: "/assets/banners/pin.jpg",
      alt: "banner",
    },
    {
      src: "/assets/banners/sales.jpeg",
      alt: "banner2",
    },
    {
      src: "/assets/banners/Footwear-Banner.jpg",
      alt: "banner3",
    },
  ];
  // const itemTemplate = (item) => {
  //   return (
  //     <div className="banner-content">
  //       <img
  //         src={item.src}
  //         alt={item.alt}
  //         style={{ width: "fit-content", height: "fit-content" }}
  //         // style={{ width: "100%", display: "block" }}
  //       />
  //     </div>
  //   );
  // };
  const itemTemplate = (item) => {
    return (
      <div className="banner-content">
        <img
        src={item.src}
          alt={item}
          style={{ width: "100%", height: "100%" }}
          // style={{ width: "fit-content", height: "100%" }}
        />
      </div>
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
      <div className="landing_banner p-mb-3">
      <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{ width: "100%", height: '430px' }}
          showThumbnails={false}
          showIndicators
          item={itemTemplate}
          // caption={caption}
        />
      </div>
        
    </Fragment>
  );
};

export default SlideBanner;
