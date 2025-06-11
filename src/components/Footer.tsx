import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">Luxe</span>
                <span className="text-xs text-gray-400 -mt-1 tracking-wider">AUTOMOTIVE</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Curating the world's finest luxury automobiles for discerning collectors and enthusiasts.
              Experience unparalleled elegance and performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Our Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Financing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/sales" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Luxury Car Sales
                </Link>
              </li>
              <li>
                <Link href="/services/consignment" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Consignment
                </Link>
              </li>
              <li>
                <Link href="/services/appraisal" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Vehicle Appraisal
                </Link>
              </li>
              <li>
                <Link href="/services/concierge" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Concierge Service
                </Link>
              </li>
              <li>
                <Link href="/services/delivery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  White Glove Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Luxury Lane</p>
                  <p>Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@luxeauto.com</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p className="text-white font-medium">Showroom Hours:</p>
              <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Luxe Automotive. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
