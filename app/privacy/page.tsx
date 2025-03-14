import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center gradient-text mb-10">Privacy Policy</h1>
        
        <div className="bg-navy-800 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p className="text-gray-300 mb-6">
            At MOOZ Collection, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our NFT collection.
          </p>
          <p className="text-gray-300 mb-6">
            By using our website and services, you consent to the data practices described in this policy.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Information We Collect</h2>
          <p className="text-gray-300 mb-4">We may collect several types of information, including:</p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Personal Information</h3>
          <p className="text-gray-300 mb-4">
            When you interact with our platform, we may collect personal information such as:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">Wallet addresses</li>
            <li className="mb-2">Email addresses (if provided for notifications or support)</li>
            <li className="mb-2">Transaction data related to minting or trading our NFTs</li>
            <li className="mb-2">Communication records when you contact our support team</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Automatically Collected Information</h3>
          <p className="text-gray-300 mb-4">
            When you visit our website, our servers may automatically record certain information including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">IP addresses</li>
            <li className="mb-2">Browser type and version</li>
            <li className="mb-2">Pages visited and navigation patterns</li>
            <li className="mb-2">Time spent on pages</li>
            <li className="mb-2">Device information</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">Providing, operating, and maintaining our website and NFT services</li>
            <li className="mb-2">Verifying NFT ownership and facilitating transactions</li>
            <li className="mb-2">Improving our website experience and customer service</li>
            <li className="mb-2">Sending notifications about your NFTs, staking rewards, or important updates</li>
            <li className="mb-2">Responding to your inquiries and support requests</li>
            <li className="mb-2">Preventing fraudulent activities and enhancing security</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Blockchain Data</h2>
          <p className="text-gray-300 mb-6">
            Please be aware that blockchain technology inherently creates a permanent, public record of all transactions. When you interact with our NFTs on the SEI blockchain, information such as your wallet address and transaction details become publicly visible. This data cannot be deleted or modified due to the nature of blockchain technology.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Cookies and Tracking Technologies</h2>
          <p className="text-gray-300 mb-6">
            We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content based on your preferences, and improve your overall experience.
          </p>
          <p className="text-gray-300 mb-6">
            You can control cookies through your browser settings. However, disabling cookies may limit your access to certain features of our website.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Data Sharing and Disclosure</h2>
          <p className="text-gray-300 mb-4">
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">With service providers who help us operate our website and services</li>
            <li className="mb-2">To comply with legal obligations or respond to lawful requests</li>
            <li className="mb-2">To protect our rights, privacy, safety, or property</li>
            <li className="mb-2">In connection with a business transfer, merger, or acquisition</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Data Security</h2>
          <p className="text-gray-300 mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no Internet transmission is completely secure, and we cannot guarantee the security of information transmitted to or from our website.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Your Rights</h2>
          <p className="text-gray-300 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">The right to access the personal information we hold about you</li>
            <li className="mb-2">The right to request correction of inaccurate information</li>
            <li className="mb-2">The right to request deletion of your information (subject to blockchain limitations)</li>
            <li className="mb-2">The right to restrict or object to processing of your information</li>
            <li className="mb-2">The right to data portability</li>
          </ul>
          <p className="text-gray-300 mb-6">
            To exercise these rights, please contact us at privacy@moozcollection.io.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. Children's Privacy</h2>
          <p className="text-gray-300 mb-6">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-300 mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the effective date.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@moozcollection.io.
          </p>
          
          <p className="text-gray-400 mt-10 text-sm">
            Last updated: June 2024
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <Link href="/" className="text-secondary hover:text-secondary/80 block">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 