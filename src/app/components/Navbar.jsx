'use client';

import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">E-Comm</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">HOME</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">SHOP</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">CATEGORIES</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">BLOG</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">CONTACT</a>
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:block">Items: $0.00</span>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;