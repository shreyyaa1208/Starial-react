import React, { useState, useRef } from "react";
import "./styles.css";
import NoteBook from "../../assets/notebook.png";
import Pens from "../../assets/pens.png";
import Fancy from "../../assets/fancy.jpg";
import Sheets from "../../assets/sheets.png";
import Geometry from "../../assets/geometry.png";
import Cover from "../../assets/covers.png";
import Art from "../../assets/art.png";
import Files from "../../assets/files.png";
import Map from "../../assets/map.png";
import Glue from "../../assets/glue.png";

function Category() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoriesContainerRef = useRef(null);

  const categories = [
    { img: NoteBook, alt: "Notebooks", title: "Notebooks" },
    { img: Pens, alt: "Pens", title: "Pens" },
    { img: Fancy, alt: "Fancy Stationery", title: "Fancy Stationery" },
    { img: Sheets, alt: "Craft Sheets", title: "Craft Sheets" },
    { img: Geometry, alt: "Geometry Box", title: "Geometry Box" },
    { img: Cover, alt: "Notebook Cover", title: "Notebook Cover" },
    { img: Art, alt: "Art & Craft", title: "Art & Craft" },
    { img: Files, alt: "Files", title: "Files" },
    { img: Map, alt: "Climatic & World Maps", title: "Climatic & World Maps" },
    { img: Glue, alt: "Glue and other Stuffs", title: "Glue and other Stuffs" },
  ];

  function scrollCategories(direction) {
    const totalCategories = categories.length;
    const categoriesVisible = 5;
    let newIndex = categoryIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > totalCategories - categoriesVisible) {
      newIndex = totalCategories - categoriesVisible;
    }
    setCategoryIndex(newIndex);
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.style.transform = `translateX(-${
        (newIndex * 100) / categoriesVisible
      }%)`;
    }
  }

  return (
    <div id="categories-section" className="container">
      <h2 style={{ padding: "30px 10px 10px 0" }}>Shop by Category</h2>
      <div className="categories-container">
        <button className="arrow left" onClick={() => scrollCategories(-1)}>
          &#9664;
        </button>
        <div className="categories" ref={categoriesContainerRef}>
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <a href="#">
                <img src={category.img} alt={category.alt} />
              </a>
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scrollCategories(1)}>
          &#9654;
        </button>
      </div>
    </div>
  );
}

export default Category;
