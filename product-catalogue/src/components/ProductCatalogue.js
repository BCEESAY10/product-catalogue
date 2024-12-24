import React, { useState } from 'react';
import { Search } from 'lucide-react';


const ProductCatalogue = () => {
 
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'electronics', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Smart Watch', price: 199.99, category: 'electronics', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Denim Jacket', price: 59.99, category: 'fashion', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Running Shoes', price: 79.99, category: 'fashion', image: '/api/placeholder/200/200' },
    { id: 5, name: 'Gaming Console', price: 499.99, category: 'electronics', image: '/api/placeholder/200/200' },
    { id: 6, name: 'Cotton T-Shirt', price: 24.99, category: 'fashion', image: '/api/placeholder/200/200' },
  ];

  const categories = ['all', 'electronics', 'fashion'];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Catalogue</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex-shrink-0">
          <select
            className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">${product.price}</span>
                <span className="text-sm text-gray-500 capitalize">{product.category}</span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ProductCatalogue;