function MenuItemCard({ item }) {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition">
      <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
      <div className="p-5 text-center">
        <h2 className="text-2xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">Rs. {item.price}</p>
        <button className="mt-4 bg-[#3e2723] text-white px-6 py-2 rounded hover:bg-[#5d4037] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
