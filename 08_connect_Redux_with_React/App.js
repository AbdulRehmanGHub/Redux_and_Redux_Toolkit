import React from "react";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "react-redux";

const App = () => {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productsList.map(({ id, title, price, description, image, rating }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          image={image}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default App;
