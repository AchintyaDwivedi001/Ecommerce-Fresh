'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const colors = [
  { name: "Red", value: "#FF4757" },
  { name: "Blue", value: "#3742FA" },
  { name: "Green", value: "#2EED73" },
  { name: "Yellow", value: "#FFA502" },
  { name: "Pink", value: "#FF6B9D" },
  { name: "Black", value: "#2F3542" }
];

const Sidebar = ({ onCategoryFilter, onColorFilter, onPriceFilter, selectedColor }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    'Hot Deals': true,
    'Nike': true,
    'Adidas': false,
    'Vans': false,
    'All Stars': false
  });

  const [priceRange, setPriceRange] = useState({ min: 19, max: 99 });

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handlePriceChange = (type, value) => {
    const newRange = { ...priceRange, [type]: parseInt(value) || 0 };
    setPriceRange(newRange);
    onPriceFilter && onPriceFilter(newRange);
  };

  return (
    <div className="w-72 bg-white rounded-lg shadow-sm p-0 h-fit sticky top-24">
      {/* Hot Deals Section */}
      <div className="mb-0">
        <div className="bg-gray-100 px-4 py-3 font-semibold text-gray-900 text-sm border-b">
          Hot Deals
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Nike')}>Nike</span>
            <span className="text-gray-400 text-sm">2</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-blue-600 text-sm cursor-pointer hover:underline" onClick={() => onCategoryFilter && onCategoryFilter('Airmax')}>Airmax</span>
            <span className="text-gray-400 text-sm">48</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Nike')}>Nike</span>
            <span className="text-gray-400 text-sm">14</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Adidas')}>Adidas</span>
            <span className="text-gray-400 text-sm">8</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Vans')}>Vans</span>
            <span className="text-gray-400 text-sm">23</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('All Stars')}>All Stars</span>
            <span className="text-gray-400 text-sm">1</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Adidas')}>Adidas</span>
            <span className="text-gray-400 text-sm">95</span>
          </div>
        </div>
      </div>
      {/* Price Range */}
      <div className="mb-6 border-t pt-4 px-4">
        <h3 className="font-semibold text-gray-900 mb-4 text-sm">PRICES</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Range:</span>
            <span>${priceRange.min}.00 - ${priceRange.max}.00</span>
          </div>
          
          {/* Price Slider */}
          <div className="relative mt-4">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{
                  width: `${((priceRange.max - priceRange.min) / 200) * 100}%`,
                  marginLeft: `${(priceRange.min / 200) * 100}%`
                }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
              style={{WebkitAppearance: 'none'}}
            />
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
              style={{WebkitAppearance: 'none'}}
            />
          </div>
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-6 px-4">
        <h3 className="font-semibold text-gray-900 mb-3 text-sm">COLOR</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorFilter && onColorFilter(color.value)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor === color.value 
                  ? 'border-gray-900 scale-110' 
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="px-4 pb-4">
        <h3 className="font-semibold text-gray-900 mb-3 text-sm">BRAND</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Nike')}>Nike</span>
            <span className="text-gray-400 text-sm">35</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-blue-600 text-sm cursor-pointer hover:underline" onClick={() => onCategoryFilter && onCategoryFilter('Nike')}>Nike</span>
            <span className="text-gray-400 text-sm">35</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Adidas')}>Adidas</span>
            <span className="text-gray-400 text-sm">95</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-700 text-sm cursor-pointer hover:text-blue-600" onClick={() => onCategoryFilter && onCategoryFilter('Siemens')}>Siemens</span>
            <span className="text-gray-400 text-sm">95</span>
          </div>
        </div>
      </div>

      {/* MORE Section */}
      <div className="border-t pt-4 px-4 pb-4">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm">MORE</h3>
      </div>
    </div>
  );
};

export default Sidebar;