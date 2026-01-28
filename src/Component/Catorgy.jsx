import React from "react";
import Wrapper from "./Wrapper";

const Catorgy = ({className}) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className={`bg-[#0e131b] ${className}`}>
      <Wrapper>
        <div className="max-w-full w-fit flex m-auto overflow-x-auto scroll-none px-4 gap-5">
          {categories.map((curItems, index) => {
            return (
              <button key={index} className="btn btn-primary">
                {curItems}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Catorgy;
