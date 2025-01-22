import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalItems,
    getTotalCost,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart ({getTotalItems()} items)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-green-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5" />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 rounded-md hover:bg-red-100 text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotalCost().toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => alert('Coming Soon!')}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-4"
          >
            Checkout
          </button>
          <Link
            to="/products"
            className="w-full flex items-center justify-center space-x-2 text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};