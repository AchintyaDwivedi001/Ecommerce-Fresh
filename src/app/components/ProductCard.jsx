import Badge from './Badge';
import Rating from './Rating';

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '248, 249, 250';
}

const ProductCard = ({ product, selectedColor }) => {
  const cardBgColor = selectedColor && product.colors?.includes(selectedColor) 
    ? `rgba(${hexToRgb(selectedColor)}, 0.1)` 
    : '#f8f9fa';

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
      {/* Product Image */}
      <div 
        className="relative h-48 flex items-center justify-center p-4 transition-colors duration-300"
        style={{ backgroundColor: cardBgColor }}
      >
        {product.isHot && <Badge text="SALE" variant="red" className="absolute top-3 left-3 z-10" />}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 text-sm leading-tight line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-blue-600 font-bold text-lg">
            ${product.discountPrice?.toFixed(2)}
          </span>
          {product.price !== product.discountPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.price?.toFixed(2)}
            </span>
          )}
          {product.discountPercent && (
            <span className="text-red-500 text-xs font-semibold">
              {product.discountPercent}% off
            </span>
          )}
        </div>

        {/* Rating */}
        <Rating 
          rating={product.ratingValue} 
          count={product.ratingCount} 
        />
      </div>
    </div>
  );
};

export default ProductCard;