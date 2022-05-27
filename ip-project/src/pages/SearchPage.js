import React, { useState } from "react";
import "./SearchPage.css";
import { FaSearch } from "react-icons/fa";
const SearchPage = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;

    const newFilter = data.filter((value) => {
      if (
        value.body.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.author.name.toLowerCase().includes(searchWord.toLowerCase())
      ) {
        return value;
      }
      // return value.body.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search-container">
      <h4>Search For:</h4>
      <div className="searchBar">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <h2 className="search-icon">
          <FaSearch />
        </h2>
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="data-item">
                <h3>{value.author.name}</h3>
                <p>{value.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchPage;
