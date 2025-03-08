import React from "react";
import "./App.css";
import { productsList } from "./store/productsData";
import Product from "./components/Product";

import { store } from "./store/index";
// console.log(store);


const App = () => {
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
