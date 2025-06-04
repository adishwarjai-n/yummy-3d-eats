
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', emoji: '🍽️' },
    { id: 'pizza', name: 'Pizza', emoji: '🍕' },
    { id: 'burgers', name: 'Burgers', emoji: '🍔' },
    { id: 'asian', name: 'Asian', emoji: '🍜' },
    { id: 'desserts', name: 'Desserts', emoji: '🍰' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic tomato sauce, mozzarella, and fresh basil',
      price: 18.99,
      category: 'pizza',
      image: '🍕',
      popular: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Truffle Burger',
      description: 'Wagyu beef, truffle aioli, arugula, and aged cheddar',
      price: 24.99,
      category: 'burgers',
      image: '🍔',
      popular: true,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Dragon Roll',
      description: 'Fresh salmon, avocado, cucumber with spicy mayo',
      price: 16.99,
      category: 'asian',
      image: '🍣',
      popular: false,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 12.99,
      category: 'desserts',
      image: '🍰',
      popular: true,
      rating: 4.9
    },
    {
      id: 5,
      name: 'Pepperoni Deluxe',
      description: 'Double pepperoni, mozzarella, and our signature spicy sauce',
      price: 21.99,
      category: 'pizza',
      image: '🍕',
      popular: false,
      rating: 4.6
    },
    {
      id: 6,
      name: 'Ramen Bowl',
      description: 'Rich tonkotsu broth, chashu pork, soft egg, and green onions',
      price: 19.99,
      category: 'asian',
      image: '🍜',
      popular: true,
      rating: 4.8
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Menu
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and lots of love
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'border-orange-300 text-orange-600 hover:bg-orange-50'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border-orange-100 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Item Image & Popular Badge */}
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    {item.image}
                  </div>
                  {item.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">
                      🔥 Popular
                    </Badge>
                  )}
                </div>

                {/* Item Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ${item.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-6 transition-all duration-300 hover:scale-105"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg">
            View Full Menu 📋
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
