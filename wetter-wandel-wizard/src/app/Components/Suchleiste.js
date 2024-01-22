import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

function SearchBar({ onSearch, onLocation }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const countries = require('../api/orte.json');
  const cities = countries.orte;

  const onChangeHandler = (text) => {
    const matches = cities.filter(city => city.match(new RegExp(text, "gi")));
    setSuggestions(matches);
    setValue(text);
  };

  const onSuggestHandler = (text) => {
    setValue(text);
    setSuggestions([]);
    onSearch(text);
    onLocation(text);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && value && cities.includes(value)) {
      onSearch(value);
      onLocation(value);
      setValue("");
    }
  };

  return (
    <div className="relative mx-auto max-w-lg">
      <div className="flex items-center bg-white rounded-full shadow-md pl-2">
        <span className="text-gray-400">
          <MdSearch style={{ color: 'gray' , fontSize: 25 }} />
        </span>
        <input
          type="text"
          className="w-full py-2 px-2 rounded-full focus:outline-none"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={value}
          style={{ backgroundColor: "#fff", marginTop: "0.5rem" }}
          placeholder="Ort aussuchen"
          onKeyDown={handleEnterKeyPress}
        />
      </div>
      {suggestions.length > 0 && (
        <div className="absolute z-50 bg-white p-2 text-black rounded w-full mt-2 left-0">
          {suggestions.slice(0, 5).map((suggestion, i) => (
            <div
              key={i}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => onSuggestHandler(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
