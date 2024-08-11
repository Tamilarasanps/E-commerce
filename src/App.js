import "./App.css";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import Shopcategory from "./Pages/Shopcategory";

import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>test1</h1>} />
          <Route path="/mens" element={<Shopcategory category="men"/>} />
          <Route path="/womens" element={<Shopcategory category="women"/>} />
          <Route path="/kids" element={<Shopcategory category ="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
