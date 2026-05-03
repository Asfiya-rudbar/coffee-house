import { useCart } from "../store/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: cart.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.qty
        })),
        totalAmount: totalPrice
      })
    });

    await response.json();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#faf3e0] pt-32 px-6 md:px-20 overflow-hidden">

      <h1 className="text-5xl font-bold text-[#3e2723] mb-12 text-center">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-[#6f4e37] text-lg">
          Your cart is empty ☕
        </p>
      ) : (
        <>
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white p-5 rounded-2xl shadow-md flex justify-between items-center"
              >

               
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

              
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-bold text-[#3e2723]">
                    {item.name}
                  </h2>
                  <p className="text-[#6f4e37]">
                    Rs. {item.price}
                  </p>
                </div>

                
                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQty(item._id)}
                    className="bg-gray-300 px-2 rounded"
                  >
                    -
                  </button>

                  <span className="px-3 font-semibold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item._id)}
                    className="bg-gray-300 px-2 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 ml-3"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="text-center m-10 ">
            <h2 className="text-2xl font-bold text-[#3e2723]">
              Total: Rs. {totalPrice}
            </h2>

            <button
              onClick={placeOrder}
              className="mt-4 bg-[#6f4e37] text-white px-8 py-3 rounded-xl"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;