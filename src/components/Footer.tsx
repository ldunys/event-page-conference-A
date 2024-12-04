import React from 'react';
import { Mail, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import { EventtiaLogo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:hello@eventtia.com" className="hover:text-blue-400">
                hello@eventtia.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.eventtia.com/en/terms-of-service" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="https://www.eventtia.com/en/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right flex flex-col items-end">
            <a
              href="https://www.eventtia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <EventtiaLogo />
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/eventtia.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/eventtia.ems"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/eventtia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@eventtia_com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/eventtia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}