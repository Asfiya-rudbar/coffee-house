import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, ordersRes] = await Promise.all([
          fetch("http://localhost:5000/api/products"),
          fetch("http://localhost:5000/api/orders")
        ]);
        const productsData = await productsRes.json();
        const ordersData = await ordersRes.json();

        setProducts(productsData || []);
        setOrders(ordersData || []);
        setLoading(false);
      } catch (err) {
        console.log("Fetch Error:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  const editProduct = async (product) => {
    const newName = prompt("Enter new name", product.name);
    const newPrice = prompt("Enter new price", product.price);

    try {
      await fetch(`http://localhost:5000/api/products/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          price: newPrice,
          category: product.category,
        }),
      });

      setProducts(products.map(p =>
        p._id === product._id ? { ...p, name: newName, price: newPrice } : p
      ));
    } catch (err) {
      console.log("Edit Error:", err);
    }
  };

  if (loading) {
    return <p className="text-center mt-20 text-xl font-semibold">Loading Admin Panel...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5ebe0] to-[#fffaf6] p-17">
      <h1 className="text-5xl font-extrabold text-[#3e2723] mb-12 text-center">Admin Panel</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-[#3e2723] mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
        {products.length === 0 ? (
          <p className="text-[#6f4e37]">No products found.</p>
        ) : (
          products.map(product => (
            <div key={product._id} className="bg-gradient-to-b from-[#fffaf6] to-[#f3e5d8] rounded-2xl shadow-xl overflow-hidden
                          hover:-translate-y-1 hover:shadow-2xl transition transform duration-300">
              <div>
                <p className="font-bold">{product.name}</p>
                <p>Rs. {product.price}</p>
                <p>Category: {product.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => editProduct(product)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map(order => (
            <div key={order._id} className="p-4 bg-white rounded shadow mb-2">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> Rs. {order.totalAmount}</p>
              <p><strong>Items:</strong></p>
              <ul className="ml-5 list-disc">
                {order.items?.map(item => (
                  <li key={item.id}>{item.name} x {item.qty}</li>
                )) || <li>No items</li>}
              </ul>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default AdminPanel;
