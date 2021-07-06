import React from "react";
import { Skeleton } from "primereact/skeleton";

const ProductLoading = (props) => {
  const { loading } = props;
  const item = () => {
    [4].map((i) => {
      return (
        <React.Fragment key={i}>
          <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
          <div>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </React.Fragment>
      );
    });
  };
  return <>{!loading ? null : <div className="p-d-flex p-mb-3">{item()}</div>}</>;
};

export default ProductLoading;
