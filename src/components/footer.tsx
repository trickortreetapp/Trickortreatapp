import { useState } from "react";
import {
  Heart,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import trickortreetlogo from "../assets/trickortreatlogotrans.png";
import { ContactDialog } from "./contact-dialog";

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-[#fff3e0] to-[#fefbf8] text-[#5d4037] py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={trickortreetlogo}
                alt="Trick or Treet Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-[#8d6e63] mb-6 max-w-md">
              The sweetest way to find love. Connect with
              amazing singles, send virtual treats, and discover
              meaningful relationships.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#8d6e63]">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#e91e63] fill-current" />
              <span>for hopeless romantics</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#8d6e63]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#ff7043] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-[#ff7043] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-[#ff7043] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-[#ff7043] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and copyright */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#8d6e63] text-sm">
            © 2024 Trick or Treet Dating. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#8d6e63] hover:text-[#ff7043] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-[#8d6e63] hover:text-[#ff7043] transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-[#8d6e63] hover:text-[#ff7043] transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Fun footer message */}
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-[#8d6e63] text-sm">
            🎃 Ready to find your boo? Start your love story
            today! 💕
          </p>
        </div>
      </div>
      
      <ContactDialog 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </footer>
  );
}