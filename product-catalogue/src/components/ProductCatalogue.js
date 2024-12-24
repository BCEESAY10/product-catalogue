import React, { useState } from 'react';
import { Search } from 'lucide-react';


const ProductCatalogue = () => {
 
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 500, category: 'electronics', image: 'https://th.bing.com/th/id/OIP.JjcpExhYJsBDWPMpPKD_LAHaJB?w=177&h=216&c=7&r=0&o=5&pid=1.7' },
    { id: 2, name: 'Smart Watch', price: 2000, category: 'electronics', image: 'https://www.topbestproreview.com/wp-content/uploads/2018/01/9-8.jpg' },
    { id: 3, name: 'Jeen Jacket', price: 700, category: 'fashion', image: 'https://th.bing.com/th/id/OIP.rCuBFfQniB95oOIQBECP3gAAAA?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Running Shoes', price: 1000, category: 'sports', image: 'https://th.bing.com/th/id/R.15ee2a65f6752b0c038abc06b2e98e79?rik=jRzGJ0tXN8c4VQ&pid=ImgRaw&r=0' },
    { id: 5, name: 'Gaming Console', price: 1600, category: 'electronics', image: 'https://th.bing.com/th/id/OIP.d0rPc9vlnmbUdM6ItxJvnAHaEK?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Cotton T-Shirt', price: 400, category: 'fashion', image: 'https://th.bing.com/th/id/OIP.OFJc3pGUGzSVpvQp4a6uQQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7' },
    { id: 7, name: 'Ear bud', price: 1200, category: 'electronics', image: 'https://images-na.ssl-images-amazon.com/images/I/61-1B-m03bL._SL1500_.jpg' },
    { id: 8, name: 'Polo T-Shirt', price: 500, category: 'electronics', image: 'https://th.bing.com/th/id/OIP.DGaHyM_0RNTUetN2bHSqIgHaHa?rs=1&pid=ImgDetMain' },
    { id: 9, name: 'Fifa Ball', price: 1200, category: 'sports', image: 'https://th.bing.com/th/id/R.781f3038b917ad6ccc1bc47ae59cccc9?rik=3agHvphc%2b2RQpQ&pid=ImgRaw&r=0' },
    { id: 10, name: 'Football Boot', price: 2500, category: 'sports', image: 'https://th.bing.com/th/id/R.7f4289ccd9559a9f0d07ab76079ce81f?rik=em0K0D6FE9Dt1Q&pid=ImgRaw&r=0' },
    { id: 11, name: 'Shin pad', price: 200, category: 'sports', image: 'https://th.bing.com/th/id/OIP.o4bJyyxTPTcuw1ktBveMvQHaHa?rs=1&pid=ImgDetMain' },
    { id: 12, name: 'iPhone 14 Pro', price: 32000, category: 'electronics', image: 'https://th.bing.com/th/id/OIP.V_M3E6rGGHhAm1gZF4DdBQHaHa?rs=1&pid=ImgDetMain' },
  ];

  const categories = ['all', 'electronics', 'fashion', 'sports'];
  const maxPrice = Math.max(...products.map(p => p.price));

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(maxPrice);

  // Filter products based on search query price, and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header Section */}
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-xl sm:text-3xl text-center text-blue-500 font-bold mb-4">FASHION, ELECTRONICS AND SPORTS STORE</h1>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-4">
            <select
              className="w-36 sm:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Range: D0 - D{priceRange.toFixed(0)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={maxPrice}
                step="1"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full sm:w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      

      
       {/* Products Section */}
       <div className="container mx-auto px-4 pt-[225px] sm:pt-[200px] pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
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

      {filteredProducts.length === 0 && (
        <div className="text-center font-medium text-gray-500 mt-8">
          No products found
        </div>
      )}
      </div>
    </div>
  );
}

export default ProductCatalogue;