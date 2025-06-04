
const Footer = () => {
  const footerLinks = {
    company: ['About Us', 'Our Story', 'Careers', 'Press'],
    support: ['Help Center', 'Contact Us', 'Track Order', 'Returns'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍕</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                FoodieHub
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing delicious food to your doorstep with love, care, and the fastest delivery in town.
            </p>
            <div className="flex space-x-4">
              {['📘', '📷', '🐦', '💼'].map((emoji, index) => (
                <div key={index} className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates!</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none text-white"
              />
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105">
                Subscribe 📧
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 FoodieHub. All rights reserved. Made with ❤️ for food lovers.
            </div>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
