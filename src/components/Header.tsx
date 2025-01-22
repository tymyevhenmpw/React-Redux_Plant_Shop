import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-green-600">
            <Leaf className="h-8 w-8" />
            <span className="text-xl font-bold">GreenHaven</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-green-600">
              Shop Plants
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-green-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};