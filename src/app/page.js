'use client';

import { useState, useEffect } from 'react';
import { Grid, List } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { mockProducts } from './data/products';

export default function Home() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedColor, setSelectedColor] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: 0, max: 1000 },
    color: ''
  });

  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Filter and sort logic
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase().includes(filters.category.toLowerCase()) ||
        product.name.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.discountPrice >= filters.priceRange.min && 
      product.discountPrice <= filters.priceRange.max
    );

    // Color filter
    if (filters.color) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.includes(filters.color)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.discountPrice - b.discountPrice;
        case 'price-high':
          return b.discountPrice - a.discountPrice;
        case 'rating':
          return b.ratingValue - a.ratingValue;
        case 'popularity':
          return b.ratingCount - a.ratingCount;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, products]);

  const handleCategoryFilter = (category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleColorFilter = (color) => {
    setSelectedColor(color);
    setFilters(prev => ({ ...prev, color }));
  };

  const handlePriceFilter = (priceRange) => {
    setFilters(prev => ({ ...prev, priceRange }));
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: { min: 0, max: 1000 }, color: '' });
    setSelectedColor('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={0} />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <Sidebar 
            onCategoryFilter={handleCategoryFilter}
            onColorFilter={handleColorFilter}
            onPriceFilter={handlePriceFilter}
            selectedColor={selectedColor}
          />
          
          <main className="flex-1">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-8 mb-6 text-white relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="z-10 relative">
                  <h1 className="text-3xl font-bold mb-2">Adidas Men Running</h1>
                  <h2 className="text-3xl font-bold mb-4">Sneakers</h2>
                  <p className="mb-6 text-blue-100 max-w-md">Performance and style meet with our premium running collection</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="hidden md:block relative">
                  <div className="w-48 h-36 bg-white/20 rounded-lg flex items-center justify-center">
                    <img 
                      src={mockProducts[0]?.imageUrl} 
                      alt="Featured Product" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Pink accent */}
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-pink-400 to-transparent opacity-60"></div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex justify-between items-center shadow-sm">
              <div className="flex space-x-6">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-1 font-medium text-sm">
                  All Items
                </button>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-gray-600 bg-transparent border-none outline-none cursor-pointer text-sm"
                >
                  <option value="name">Sort By Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="popularity">Popularity</option>
                </select>
                <span className="text-gray-600 text-sm">Show</span>
                <span className="text-gray-600 text-sm">Price</span>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className={`grid ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              } gap-6 mb-8`}>
                {currentProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    selectedColor={selectedColor}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}