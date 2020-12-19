import React from "react";
import SearchInput from "../Components/SearchInput";

import "../Styles/home.css";

export default function Home() {
  return (
    <div className="home_body">
      <SearchInput />
      <div className="search_container"></div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus, neque, fuga
        molestiae assumenda perspiciatis molestias repudiandae, impedit aut perferendis quis
        voluptatum? Natus, ipsa ea odit laborum quaerat facilis quae.
      </h1>
      <div className="testheight"></div>
    </div>
  );
}
