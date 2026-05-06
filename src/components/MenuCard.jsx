import { Link } from "react-router-dom";

function MenuCard() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Our Full Menu 
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          to="/hot-coffee"
          className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Hot Coffee</h2>
          <p className="text-gray-600">Espresso, Latte, Cappuccino</p>
        </Link>

        <Link
          to="/cold-coffee"
          className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Cold Coffee</h2>
          <p className="text-gray-600">Iced Latte, Mocha</p>
        </Link>

        <Link
          to="/special-drinks"
          className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-2"> Drinks</h2>
          <p className="text-gray-600">Frappes, Shakes</p>
        </Link>

        <Link
          to="/desserts"
          className="bg-white shadow-xl rounded-xl p-8 text-center hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Desserts</h2>
          <p className="text-gray-600">Brownies, Cakes</p>
        </Link>
      </div>
    </div>
  );
}

export default MenuCard;
