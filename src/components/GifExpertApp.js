import React, { useState } from "react";
import "./GifExpertApp.css";
import AddCategory from "./AddCategory/AddCategory";
import GifCollection from "./GifCollection/GifCollection";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={setCategories}></AddCategory>
      <hr></hr>

      <div className="collection-content">
        {categories.map((category) => {
          return (
            <GifCollection key={category} collection={category}></GifCollection>
          );
        })}
      </div>
    </div>
  );
};

export default GifExpertApp;
