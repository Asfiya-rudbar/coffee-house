import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./store/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./pages/Home";
import Menu from "./pages/Menu";
import HotCoffee from "./pages/HotCoffee";
import ColdCoffee from "./pages/ColdCoffee";
import Drinks from "./pages/Drinks";
import Desserts from "./pages/Desserts";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  return (

    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/hot-coffee" element={<HotCoffee />} />
        <Route path="/cold-coffee" element={<ColdCoffee />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
