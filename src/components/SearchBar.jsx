import React from "react";

import { Image } from "./Image";
import { Input } from "./Input";

import searchIcon from "../assets/images/icons/search.svg";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="container">
        <Image
          src={searchIcon}
          className="search-bar__img"
          alt="Magnifying glass icon"
          loading="lazy"
        />
        <Input
          type="text"
          className="search-bar__input"
          placeholder="Поиск товара, бренда или продавца..."
        />
      </div>
    </div>
  );
};
