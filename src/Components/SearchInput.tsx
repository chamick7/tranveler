import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Styles/search.css";

export default function SearchInput() {
  return (
    <form className="input_search_container">
      <span>ค้นหา</span>
      <input type="search" name="search" placeholder="จังหวัด สถานที่" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
