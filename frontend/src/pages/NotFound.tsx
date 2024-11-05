import React, { useState } from 'react';

const PosPage: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const products = [
    { id: 1, name: 'Mechanical Keyboard', price: 100, image: '/keyboard.png' },
    { id: 2, name: 'Gaming Mouse', price: 50, image: '/mouse.png' },
    { id: 3, name: 'Monitor', price: 150, image: '/monitor.png' },
  ];

  const taxRate = 0.1; // 10% tax
  const discount = 10; // Flat $10 discount

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const removedProduct = cart.find((item) => item.id === productId);
    setCart(updatedCart);
    setTotal(total - (removedProduct?.price || 0));
  };

  const calculateTax = () => total * taxRate;
  const calculateTotalWithTaxAndDiscount = () => total + calculateTax() - discount;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Product List */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-medium text-gray-600 mb-2">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Cart</h2>
            <div className="space-y-4 h-64 overflow-y-auto border-b pb-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-lg">{item.name}</span>
                    <span className="text-lg">${item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Total Section */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>${calculateTotalWithTaxAndDiscount().toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setShowCheckout(true)}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <p className="mb-4">Total Amount: ${calculateTotalWithTaxAndDiscount().toFixed(2)}</p>
            <button
              className="bg-green-500 text-white py-2 w-full rounded-lg hover:bg-green-600 transition"
              onClick={() => {
                setShowCheckout(false);
                alert('Order Placed!');
              }}
            >
              Confirm Payment
            </button>
            <button
              className="mt-4 text-gray-500 w-full hover:text-gray-700"
              onClick={() => setShowCheckout(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PosPage;
