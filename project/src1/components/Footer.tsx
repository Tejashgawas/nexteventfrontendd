import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-[#E6C79C] mb-4">Eventique</h3>
            <p className="text-white/80 mb-6">
              Creating perfect events by connecting you with the best venues, decorators, and caterers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Event Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Event Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/wedding" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/services/birthday" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Birthdays
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-white/80 hover:text-[#E6C79C] transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#E6C79C] mt-1 flex-shrink-0" />
                <span className="text-white/80">NexEvent<br />Verna, Goa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#E6C79C] flex-shrink-0" />
                <span className="text-white/80">+91 0000000000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#E6C79C] flex-shrink-0" />
                <span className="text-white/80">info@nexevent.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexEvent. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-white/60 text-sm hover:text-[#E6C79C] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-white/60 text-sm hover:text-[#E6C79C] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;