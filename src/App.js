import "./sass/App.scss";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({
    imgUrl: "",
    title: "",
    price: "",
    counter: 0,
  });

  const addItemHandler = (newItem) => {
    setItem(newItem);
  };

  return (
    <>
      <NavBar products={item} />
      <Product onAddItem={addItemHandler} />
    </>
  );
}

export default App;
