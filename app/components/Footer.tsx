import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-4">MOOZ Collection</h3>
            <p className="text-gray-400 max-w-md">
              A unique NFT collection on the SEI blockchain featuring exclusive digital artwork.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/MoozNft" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.05 4.27 20.82 3.27 21.2 2.14C20.22 2.69 19.14 3.09 18 3.29C17.09 2.29 15.84 1.7 14.5 1.7C11.91 1.7 9.82 3.79 9.82 6.38C9.82 6.76 9.85 7.13 9.93 7.47C6.1 7.29 2.74 5.44 0.5 2.64C0.37 3.36 0.25 4.09 0.25 4.86C0.25 6.31 0.96 7.61 2.07 8.37C1.55 8.37 1.03 8.21 0.56 7.94V7.99C0.56 10.25 2.15 12.13 4.29 12.57C3.49 12.81 2.64 12.84 1.82 12.67C2.24 14.52 3.97 15.87 5.97 15.91C4.35 17.15 2.38 17.86 0.35 17.86C0.16 17.86 0 17.85 -0.15 17.83C1.86 19.11 4.28 19.85 6.86 19.85C14.5 19.85 18.68 13.67 18.68 8.37C18.68 8.15 18.68 7.94 18.67 7.72C19.67 7.09 20.53 6.3 21.29 5.35C20.41 5.73 19.45 5.98 18.46 6.08C19.47 5.48 20.23 4.5 20.58 3.34C19.62 3.91 18.56 4.32 17.44 4.54C16.54 3.57 15.27 2.99 13.88 2.99C11.12 2.99 8.89 5.22 8.89 7.97C8.89 8.35 8.93 8.71 9.01 9.06C4.78 8.86 1.09 6.87 -1.09 3.94C-1.31 4.71 -1.43 5.54 -1.43 6.4C-1.43 8.04 -0.67 9.5 0.53 10.35C-0.21 10.34 -0.91 10.12 -1.54 9.77V9.82C-1.54 12.24 0.33 14.24 2.84 14.69C2.09 14.9 1.31 14.94 0.54 14.79C1.12 16.76 3.01 18.17 5.2 18.2C3.45 19.51 1.27 20.25 -1.04 20.24C-1.24 20.24 -1.43 20.23 -1.62 20.21C0.6 21.57 3.16 22.33 5.87 22.33C13.38 22.33 17.45 16.19 17.45 10.84C17.45 10.63 17.45 10.42 17.44 10.21C18.44 9.53 19.32 8.68 20.02 7.69C19.09 8.1 18.09 8.36 17.05 8.46C18.11 7.85 18.91 6.86 19.28 5.69C18.27 6.27 17.17 6.68 16 6.89C15.12 5.92 13.86 5.33 12.5 5.33C9.91 5.33 7.82 7.42 7.82 10.01C7.82 10.39 7.86 10.76 7.93 11.1C4.1 10.92 0.74 9.07 -1.5 6.27C-1.63 6.99 -1.75 7.72 -1.75 8.49C-1.75 9.94 -1.05 11.24 0.07 12C-0.45 12 -0.97 11.84 -1.44 11.56V11.62C-1.44 13.88 0.15 15.76 2.29 16.2C1.49 16.44 0.64 16.47 -0.18 16.3C0.24 18.15 1.97 19.5 3.97 19.54C2.35 20.78 0.38 21.49 -1.65 21.49C-1.84 21.49 -2 21.48 -2.15 21.46C-0.15 22.74 2.28 23.48 4.86 23.48C12.5 23.48 16.68 17.3 16.68 12C16.68 11.78 16.68 11.57 16.67 11.35C17.67 10.72 18.53 9.93 19.29 8.98C18.41 9.36 17.45 9.61 16.46 9.71C17.47 9.11 18.23 8.13 18.58 6.97C17.62 7.54 16.56 7.95 15.44 8.17C14.54 7.2 13.27 6.62 11.88 6.62C9.12 6.62 6.89 8.85 6.89 11.6C6.89 11.98 6.93 12.34 7.01 12.69C2.78 12.49 -0.91 10.5 -3.09 7.57C-3.31 8.34 -3.43 9.17 -3.43 10.03C-3.43 11.67 -2.67 13.13 -1.47 13.98C-2.21 13.97 -2.91 13.75 -3.54 13.4V13.45C-3.54 15.87 -1.67 17.87 0.84 18.32C0.09 18.53 -0.69 18.57 -1.46 18.42C-0.88 20.39 1.01 21.8 3.2 21.83C1.45 23.14 -0.73 23.88 -3.04 23.87C-3.24 23.87 -3.43 23.86 -3.62 23.84C-1.42 25.2 1.14 25.96 3.87 25.96C11.38 25.96 15.45 19.82 15.45 14.47C15.45 14.26 15.45 14.05 15.44 13.84C16.44 13.16 17.32 12.31 18.02 11.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://discord.com/invite/WWBJYYkYt2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 8.5V8.51M14.5 8.5V8.51M7 16.0001L7.5 14.0001C4.2 13.0001 3 10.0001 3 8.50005C3 5.20005 5.25 3.00005 8 3.00005C10 3.00005 11 4.00005 12 4.00005C13 4.00005 14 3.00005 16 3.00005C18.8 3.00005 21 5.00005 21 8.50005C21 10.0001 20 13.0001 16.5 14.0001L17 16.0001C17 16.0001 15 15.0001 12 15.0001C9 15.0001 7 16.0001 7 16.0001ZM9.5 8.5C9.5 8.22386 9.72386 8 10 8C10.2761 8 10.5 8.22386 10.5 8.5C10.5 8.77614 10.2761 9 10 9C9.72386 9 9.5 8.77614 9.5 8.5ZM14.5 8.5C14.5 8.22386 14.7239 8 15 8C15.2761 8 15.5 8.22386 15.5 8.5C15.5 8.77614 15.2761 9 15 9C14.7239 9 14.5 8.77614 14.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms & Conditions
            </Link>
            <li>
              <Link href="/terms/staking" className="text-gray-400 hover:text-white transition">
                Staking Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <a href="mailto:contact@moozcollection.io" className="hover:text-secondary transition-colors">
              Contact Us
            </a>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} MOOZ Collection. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 