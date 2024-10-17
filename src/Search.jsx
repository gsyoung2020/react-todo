import PropTypes from "prop-types";
import React from "react";

export default function Search({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <label className="indexText" htmlFor="search">
        Search:{" "}
      </label>
      <input id="search" type="text" onChange={handleChange} />
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
