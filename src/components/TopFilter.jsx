import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch, changeSort } from "../features/filter/filterSlice";

const TopFilter = () => {
  const dispatch = useDispatch();
  const { search, sorting } = useSelector((state) => state.filter);

  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          value={search}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
      </div>
      <select
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1"
        value={sorting}
        onChange={(e) => dispatch(changeSort(e.target.value))}
      >
        <option value="default">Default</option>
        <option value="low_to_high">Salary (Low to High)</option>
        <option value="high_to_low">Salary (High to Low)</option>
      </select>
    </div>
  );
};

export default TopFilter;
