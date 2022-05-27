import React, { useState } from "react";
import "./SearchPage.css";
import { FaSearch } from "react-icons/fa";
const SearchPage = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.text.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <body>
      <div className="search-container">
        <h4>Search For:</h4>
        <div className="searchBar">
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <h2 className="search-icon">
            <FaSearch />
          </h2>
        </div>
        {filteredData.length !== 0 && (
          <div className="data-result">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="data-item">
                  <h3>{value.author}</h3>
                  <p>{value.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </body>
  );
};
export default SearchPage;
