import "./App.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useState } from "react";


function App() {
   const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <>

      <Navbar cartCount={cartCount}/>

      <div className="product-grid">
        <ProductCard
          name="Wireless Headphones"
          price="₹2,999"
          image="https://cdn.pixabay.com/photo/2016/03/19/23/03/handsfree-1267605_640.jpg"
          onAdd={addToCart}
        />
        <ProductCard
          name="Smart Watch"
          price="₹4,999"
          image="https://m.media-amazon.com/images/I/61pIzNaNRWL.jpg"
          onAdd={addToCart}
        />
        <ProductCard
          name="Bluetooth Speaker"
          price="₹3,499"
          image="https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_640%2Cc_limit/StormBox%25202%2520ryan%2520waniata.png"
          onAdd={addToCart}
        />
        <ProductCard
          name="Laptop Stand"
          price="₹1,299"
          image="https://cdn.pixabay.com/photo/2022/11/05/08/27/cobra-phone-stand-7571376_1280.jpg"
          onAdd={addToCart}
        />
         <ProductCard
          name="Phone Stand"
          price="₹999"
          image="https://www.wecool.in/cdn/shop/products/1_de798187-9751-485d-bb1f-d280f20ffae2.jpg?v=1658833321"
          onAdd={addToCart}
        />
        <ProductCard
          name="Phone charger protector"
          price="₹999"
          image="https://veriluxhub.com/cdn/shop/files/514ym92H9fL.jpg?v=1764886269"
          onAdd={addToCart}
          />

          <ProductCard
          name="Phone Pouch"
          price="₹499"
          image="https://m.media-amazon.com/images/I/61SayPbIFXL.jpg"
          onAdd={addToCart}
          />
          
          <ProductCard
          name="USB"
          price="₹299"
          image="https://shop.sandisk.com/content/dam/store/en-us/assets/products/usb-flash-drives/cruzer-blade-usb-2-0/gallery/cruzer-blade-usb-2-0-angle.png"
          onAdd={addToCart}
          />


      </div>
    </>
  );
}

export default App;
