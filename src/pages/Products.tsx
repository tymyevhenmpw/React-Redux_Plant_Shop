import React, { useMemo } from 'react';
import { plants } from '../data/plants';
import { useCart } from '../hooks/useCart';

export const Products: React.FC = () => {
  const { addToCart, cartItems } = useCart();
  
  const categorizedPlants = useMemo(() => {
    return plants.reduce((acc, plant) => {
      if (!acc[plant.category]) {
        acc[plant.category] = [];
      }
      acc[plant.category].push(plant);
      return acc;
    }, {} as Record<string, typeof plants>);
  }, []);

  const isInCart = (plantId: number) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      {Object.entries(categorizedPlants).map(([category, plants]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                  <p className="text-green-600 font-bold mb-4">${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(plant)}
                    disabled={isInCart(plant.id)}
                    className={`w-full py-2 px-4 rounded-md transition-colors ${
                      isInCart(plant.id)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};