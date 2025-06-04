
import { Button } from '@/components/ui/button';
import Food3D from './Food3D';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Delicious
                </span>
                <br />
                <span className="text-gray-800">Food Delivered</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Fresh & Fast
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Experience the finest cuisine delivered straight to your doorstep. 
                Fresh ingredients, expert chefs, and lightning-fast delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
              >
                Order Now 🚀
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg"
              >
                View Menu 📖
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 animate-bounce">1000+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 animate-bounce" style={{ animationDelay: '0.2s' }}>50+</div>
                <div className="text-gray-600 font-medium">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 animate-bounce" style={{ animationDelay: '0.4s' }}>⭐ 4.9</div>
                <div className="text-gray-600 font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Food Animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Food3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
