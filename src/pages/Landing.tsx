import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&w=2000&q=80)',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6 text-center">GreenHaven</h1>
        
        <div className="max-w-2xl text-center mb-8">
          <p className="text-xl leading-relaxed">
            Welcome to GreenHaven, where nature meets modern living. We carefully curate the finest selection of houseplants 
            to bring life and beauty to your space. Each plant is hand-picked and nurtured to ensure it thrives in its new home.
          </p>
        </div>

        <Link
          to="/products"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-colors"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};