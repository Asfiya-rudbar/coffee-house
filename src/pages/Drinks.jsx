import React, { useState, useEffect } from "react";
import { useCart } from "../store/CartContext";

function Drinks() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch("http://localhost:5000/api/products?category=Special Drinks")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching  Drinks:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c6b2a2] via-[#f9f0d7] to-[#e0c9aa] pt-32 px-6 md:px-20">
    
      <h1 className="text-5xl font-extrabold tracking-wide text-transparent 
      bg-clip-text bg-gradient-to-r from-[#3e2723] via-[#6f4e37] to-[#b07d62] 
      mb-20 text-center">
         Drinks
      </h1>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <p className="text-[#6f4e37] text-center text-xl mt-10">
            No  Drinks products found. 
          </p>
        ) : (
          products.map((item) => (
            <div
              key={item._id}
              className="bg-gradient-to-b from-[#a3866f] to-[#f3e5d8]
              rounded-[2.5rem] shadow-xl overflow-hidden
              hover:-translate-y-7 hover:shadow-15xl
              transition duration-300"
            >
              
             <div className="h-120 bg-gradient-to-br from-[#4e342e]/40 via-[#6f4e37]/30 to-[#d4a373]/40
              flex items-center justify-center text-[#3e2723] text-lg font-medium shadow-inner">
                <img
                  src={item.image || "/images/default-coffee.jpg"}
                  alt={item.name}
                  className="h-full w-full object-cover "
                />
              </div>

              
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-[#3e2723]">
                  {item.name}
                </h2>

                <p className="text-[#6f4e37] text-lg mt-2">
                  Rs. {item.price}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-6 w-full bg-gradient-to-r from-[#3e2723] to-[#5d4037]
                  text-white py-3 rounded-full font-semibold
                  hover:from-[#2b1712] hover:to-[#3e2723]
                  transition duration-300
                  hover:shadow-[0_12px_35px_rgba(111,78,55,0.4)]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Drinks;