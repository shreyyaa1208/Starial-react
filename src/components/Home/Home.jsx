import React from "react";
import "./styles.css";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ProductCard from "../ProductCard/ProductCard";
import Uniforms from "../Uniforms/Uniforms";
import Footer from "../Footer/Footer";
import notebookImage from "../../assets/notebook.png";
import pensImage from "../../assets/pen.jpg";
import compassBoxImage from "../../assets/compass.jpg";
import stickNotesImage from "../../assets/stick.jpg";
import journalDiaryImage from "../../assets/journal.jpg";

function Home() {
  const products = [
    {
      name: "NoteBook",
      price: 60.0,
      img: {
        url: notebookImage,
        alt: "NoteBook",
      },
    },
    {
      name: "Pens",
      price: 6,
      img: {
        url: pensImage,
        alt: "Pens",
      },
    },
    {
      name: "Compass Box",
      price: 53,
      img: {
        url: compassBoxImage,
        alt: "Compass Box",
      },
    },
    {
      name: "Stick Notes",
      price: 53,
      img: {
        url: stickNotesImage,
        alt: "Stick Notes",
      },
    },
    {
      name: "Journal Diary",
      price: 53,
      img: {
        url: journalDiaryImage,
        alt: "Journal Diary",
      },
    },
  ];

  return (
    <>
      <Navbar />

      <Banner />
      <Category />

      <h2 style={{ padding: "30px 10px 10px 0" }}>Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            img={product.img.url}
          />
        ))}
      </div>
      <Uniforms />
      <Footer />
    </>
  );
}

export default Home;
