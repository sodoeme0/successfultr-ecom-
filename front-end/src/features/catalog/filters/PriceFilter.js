import React from "react";

const PriceFilter = (onChange) => {
  return (
    <>
      <li class="range">
        <input type="text" data-filter-type="price" id="max" />
        <span>Max</span>
      </li>
      <li class="range">
        <input type="text" data-filter-type="price" id="min" />
        <span>Min</span>
      </li>
    </>
  );
};

export default PriceFilter;
