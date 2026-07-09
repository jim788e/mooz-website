import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-8 border-t border-navy-800/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy-400">
          <div>
            &copy; copyright {new Date().getFullYear()}. All Rights Reserved. Design & Development by{' '}
            <a 
              href="https://x.com/d_misios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              misios
            </a>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8">
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <a href="mailto:contact@moozcollection.io" className="hover:text-secondary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
