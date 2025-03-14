import React from 'react';
import Link from 'next/link';

export default function StakingTermsPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center gradient-text mb-10">Staking Terms and Conditions</h1>
        
        <div className="bg-navy-800 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">1. Staking Overview</h2>
          <p className="text-gray-300 mb-6">
            MOOZ NFT staking allows holders to lock their NFTs in a staking contract to earn rewards. By staking your MOOZ NFTs, you agree to all terms outlined in this document.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Staking Process</h2>
          <p className="text-gray-300 mb-6">
            To stake your MOOZ NFTs, you must connect your wallet to our platform and approve the staking contract to interact with your NFTs. Once staked, your NFTs will be locked in the contract for the duration of the staking period.
          </p>
          <p className="text-gray-300 mb-6">
            There is no minimum staking period.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Rewards Structure</h2>
          <p className="text-gray-300 mb-6">
            Staking rewards are distributed in $MOOZ tokens. The reward rate is calculated based on:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">Number of NFTs staked</li>
            <li className="mb-2">Duration of staking period</li>
          </ul>
          <p className="text-gray-300 mb-6">
            Reward rates may be adjusted periodically based on market conditions and sustainability of the rewards program.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Risks and Disclaimers</h2>
          <p className="text-gray-300 mb-6">
            Staking involves certain risks, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li className="mb-2">Smart contract vulnerabilities</li>
            <li className="mb-2">Market volatility affecting reward values</li>
            <li className="mb-2">Regulatory changes that may impact staking operations</li>
            <li className="mb-2">Technical issues that may delay reward distribution</li>
          </ul>
          <p className="text-gray-300 mb-6">
            By participating in the staking program, you acknowledge and accept these risks.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Unstaking and Withdrawals</h2>
          <p className="text-gray-300 mb-6">
            You may unstake your NFTs at any time. Rewards earned during the staking period will be calculated and distributed at the time of unstaking.
          </p>
          <p className="text-gray-300 mb-6">
            Gas fees for staking and unstaking transactions are the responsibility of the user.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Modifications to Staking Terms</h2>
          <p className="text-gray-300 mb-6">
            MOOZ NFT reserves the right to modify these staking terms at any time. Major changes will be communicated to the community through our official channels.
          </p>
          <p className="text-gray-300 mb-6">
            Continued participation in the staking program after modifications have been announced constitutes acceptance of the updated terms.
          </p>
          
          <p className="text-gray-400 mt-10 text-sm">
            Last updated: June 2024
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <Link href="/terms" className="text-secondary hover:text-secondary/80 block">
            Return to General Terms
          </Link>
          <Link href="/" className="text-secondary hover:text-secondary/80 block">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 