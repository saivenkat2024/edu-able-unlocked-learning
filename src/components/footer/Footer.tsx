
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-edu-purple to-edu-blue">
              Edu-Able
            </h3>
            <p className="text-gray-300">
              Empowering everyone to learn without boundaries through accessible, quality education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Useful Links</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/learning" className="text-gray-300 hover:text-white transition-colors">Learning Platform</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Support</h5>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Contact Info</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-edu-purple mr-2 mt-0.5" />
                <span className="text-gray-300">123 Education Ave, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-edu-purple mr-2" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-edu-purple mr-2" />
                <span className="text-gray-300">info@eduable.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Edu-Able Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
