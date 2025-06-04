
const AboutSection = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our professional chefs craft every dish with passion'
    },
    {
      icon: '🌱',
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients daily'
    },
    {
      icon: '⭐',
      title: 'Top Rated',
      description: '4.9/5 stars from over 10,000+ satisfied customers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  FoodieHub?
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another food delivery service. We're passionate food lovers 
                dedicated to bringing you the most delicious, high-quality meals with 
                exceptional service that exceeds your expectations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-gray-600 font-medium">Orders Delivered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  15min
                </div>
                <div className="text-gray-600 font-medium">Avg Delivery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Service</div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 text-center text-white">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Join Our Food Family!</h3>
                <p className="text-orange-100">
                  Become part of our growing community of food lovers and enjoy exclusive offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
