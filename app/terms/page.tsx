import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center gradient-text mb-10">Terms and Conditions</h1>
        
        <div className="bg-navy-800 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p className="text-gray-300 mb-6">
            Welcome to MOOZ NFT. These terms and conditions outline the rules and regulations for the use of the MOOZ NFT platform.
          </p>
          <p className="text-gray-300 mb-6">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use MOOZ NFT if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. NFT Ownership</h2>
          <p className="text-gray-300 mb-6">
            When you purchase a MOOZ NFT, you own the NFT (the non-fungible token) that represents your digital collectible on the blockchain. This ownership grants you certain rights to the associated digital artwork, but with limitations.
          </p>
          <p className="text-gray-300 mb-6">
            Purchasing a MOOZ NFT grants you personal, non-commercial, non-exclusive rights to display the associated artwork for your personal use.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            MOOZ NFT retains all intellectual property rights to the artwork, designs, and content associated with the NFTs. The purchase of an NFT does not transfer copyright or other intellectual property rights to the buyer.
          </p>
          <p className="text-gray-300 mb-6">
            You may not use the MOOZ NFT artwork for commercial purposes without explicit written permission.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Trading and Resale</h2>
          <p className="text-gray-300 mb-6">
            You are permitted to sell or transfer your MOOZ NFT to another party. All transfers must occur on authorized platforms that properly enforce royalty payments to original creators.
          </p>
          <p className="text-gray-300 mb-6">
            A royalty fee (typically 5-10% of the sale price) will be automatically collected and distributed to the original creators on secondary sales.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Prohibited Uses</h2>
          <p className="text-gray-300 mb-6">
            You agree not to use MOOZ NFTs in connection with any content that:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">Promotes hatred, discrimination, or violence against any individual or group</li>
            <li className="mb-2">Infringes on the intellectual property rights of others</li>
            <li className="mb-2">Contains illegal or unlawful content</li>
            <li className="mb-2">Misrepresents your association with MOOZ NFT</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Disclaimer</h2>
          <p className="text-gray-300 mb-6">
            MOOZ NFTs are provided "as is" without warranty of any kind. We do not guarantee the value, rarity, or future marketability of any NFT. Market values can fluctuate significantly based on market demand.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Changes to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify these terms at any time. Your continued use of the platform after changes indicates your acceptance of the revised terms.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Contact Information</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms and Conditions, please contact us at support@example.com.
          </p>
          
          <p className="text-gray-400 mt-10 text-sm">
            Last updated: June 2024
          </p>
        </div>
        
        <div className="text-center">
          <a href="/" className="text-secondary hover:text-secondary/80">
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
} 