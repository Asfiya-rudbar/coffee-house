import React from "react";
import { NavLink } from "react-router-dom";

import hotcoffee from "../assets/hot-coffee.jpg";
import dessert from "../assets/desserts.jpg";
import coldcoffee from "../assets/coffee.jpg";
import drinks from "../assets/drinks.jpg";
import beans from "../assets/beans1.jpg";
import people from "../assets/beans.jpg";

const items = [
  { type: "image", title: "Hot Coffee", image: hotcoffee, span: "col-span-2 row-span-2", link:"/hot-coffee" },
  { type: "image", title: "Desserts", image: dessert, span: "col-span-1 row-span-1", link:"/desserts" },
  { type: "image", title: "Cold Coffee", image: coldcoffee, span: "col-span-1 row-span-1", link:"/cold-coffee" },

  { type: "color", title: "ABOUT US", desc: "We serve the best coffee with passion and quality beans.", bg: "bg-[#d4a373]", span: "col-span-1 row-span-2" },

  { type: "image", title: "Special Drinks", image: drinks, span: "col-span-2 row-span-1", link:"/drinks" },

  { type: "image", title: "Coffee Beans", image: beans, span: "col-span-2 row-span-1",  },
  { type: "image", title: "Our Story", image: people, span: "col-span-1 row-span-1",  },

  { type: "color", title: "LOCATION", desc: "Visit us in Karachi for a cozy coffee experience.", bg: "bg-[#c08b5c]", span: "col-span-1 row-span-1", link:"/contact" },
  { type: "color", title: "WRITE TO US",  desc: "Have questions or feedback? We'd love to hear from you!", bg: "bg-[#b07d62]", span: "col-span-1 row-span-1" , link:"/contact" },
];

function Menu() {
  return (
    <div className="min-h-screen bg-[#faf3e0] pt-28 px-6 md:px-20 ">

      <h1 className="text-5xl font-bold text-center text-[#3e2723] mb-16">
        Our Menu 
      </h1>

     
      <div className="grid grid-cols-2 md:grid-cols-5 auto-rows-[220px] gap-4">

        {items.map((item, index) => (

             <NavLink
               key={index}
               to={item.link}
               onClick={() => window.scrollTo(0, 0)}
               className={`relative ${item.span} overflow-hidden group cursor-pointer block`}
             >
           
               {item.type === "image" && (
                 <>
                   <img
                     src={item.image}
                     alt={item.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                   />
           
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition"></div>
           
                   <div className="absolute inset-0 flex items-center justify-center">
                     <h2 className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
                       {item.title}
                     </h2>
                   </div>
                 </>
               )}
           
               {item.type === "color" && (
                 <div className={`w-full h-full ${item.bg} flex flex-col justify-center px-6 text-white`}>
                   <h2 className="text-xl md:text-2xl font-bold">
                     {item.title}
                   </h2>
                   <p className="mt-2 text-sm opacity-90">
                     {item.desc}
                   </p>
                 </div>
               )}
           
             </NavLink>
           
           ))}

      </div>
    </div>
  );
}

export default Menu;