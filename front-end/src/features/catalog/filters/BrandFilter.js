import React from "react";

const BrandFilter = ({onChange, checked}) => {
  
  const handleFIlterChange = (event) => {

    const { checked, id } = event.target;
    onChange(id, checked, "brand");
   //console.log(checked)
    //console.log(ischecked.brand.apple)

  };

  

  return (
    <>
    
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="apple"
          onChange={handleFIlterChange}
          checked={checked.apple}

        />
        <span>Apple</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="samsung"
          onChange={handleFIlterChange}
          checked={checked.samsung}


        />
        <span>Samsung</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="lg"
          onChange={handleFIlterChange}
          checked={checked.lg}


        />
        <span>LG</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="beats"
          onChange={handleFIlterChange}
          checked={checked.beats}


        />
        <span>Beats</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="hp"
          onChange={handleFIlterChange}
          checked={checked.hp}


        />
        <span>HP</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="lenovo"
          onChange={handleFIlterChange}
          checked={checked.lenovo}


        />
        <span>Lenovo</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="logitech"
          onChange={handleFIlterChange}
          checked={checked.logitech}


        />
        <span>Logitech</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="brand"
          id="sony"
          onChange={handleFIlterChange}
          checked={checked.sony}


        />
        <span>Sony</span>
      </li>
    </>
  );
};

export default BrandFilter;
