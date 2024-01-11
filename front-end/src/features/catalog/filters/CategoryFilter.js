import React from "react";

const CategoryFilter = ({onChange, checked}) => {
  const handleFIlterChange = (event) => {
    const { checked, id } = event.target;
    onChange(id, checked, "category");
  };
  return (
    <>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="category"
          id="tv"
          onChange={handleFIlterChange}
          checked={checked.tv}

        />
        <span>T.V.</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="category"
          id="laptop"
          onChange={handleFIlterChange}
          checked={checked.laptop}

        />
        <span>Laptop</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="category"
          id="phone"
          onChange={handleFIlterChange}
          checked={checked.phone}


        />
        <span>Phone</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="category"
          id="headphone"
          onChange={handleFIlterChange}
          checked={checked.headphone}

        />
        <span>Headphone</span>
      </li>
      <li>
        <input
          class="filter"
          type="checkbox"
          data-filter-type="category"
          id="game"
          onChange={handleFIlterChange}
          checked={checked.game}

        />
        <span>Game System</span>
      </li>
    </>
  );
};

export default CategoryFilter;
