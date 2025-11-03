'use client';

import { useEffect, useState } from 'react';

interface Stats {
  floorPrice: number;
  listedCount: number;
  totalVolume: number;
  avgPrice24hr: number;
  ownerCount: number;
  totalSupply: number;
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      
      if (data.success && data.data) {
        setStats(data.data);
        setError(null);
      } else {
        const errorMsg = data.error || 'Failed to fetch stats';
        setError(errorMsg);
        // Still set stats from error fallback if available
        if (data.data) {
          setStats(data.data);
        }
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to fetch stats';
      setError(errorMsg);
      console.error('Stats fetch error:', err);
    } finally {
      setLoading(false);
      setLastUpdated(new Date());
    }
  };

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);
    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    }
    return num.toFixed(2);
  };

  const getTimeSince = (date: Date | null) => {
    if (!date || !mounted) return 'Just now';
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">MOOZ Market Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Floor Price</h3>
          <p className="text-3xl font-bold text-white">{stats ? `${stats.floorPrice} SEI` : '-'}</p>
          <p className="text-sm text-gray-400">Current floor price</p>
        </div>

        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Total Volume</h3>
          <p className="text-3xl font-bold text-white">{stats ? `${formatNumber(stats.totalVolume)} SEI` : '-'}</p>
          <p className="text-sm text-gray-400">All-time trading volume</p>
        </div>

        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Listed NFTs</h3>
          <p className="text-3xl font-bold text-white">{stats ? stats.listedCount : '-'}</p>
          <p className="text-sm text-gray-400">
            Currently listed ({stats && stats.totalSupply ? ((stats.listedCount / stats.totalSupply) * 100).toFixed(1) : '0'}%)
          </p>
        </div>

        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Unique Holders</h3>
          <p className="text-3xl font-bold text-white">{stats ? stats.ownerCount : '-'}</p>
          <p className="text-sm text-gray-400">Total unique holders</p>
        </div>

        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">24h Volume</h3>
          <p className="text-3xl font-bold text-white">{stats ? `${stats.avgPrice24hr} SEI` : '-'}</p>
          <p className="text-sm text-gray-400">24-hour trading volume</p>
        </div>

        <div className="bg-[#1a1b4b] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Total Supply</h3>
          <p className="text-3xl font-bold text-white">{stats ? formatNumber(stats.totalSupply) : '-'}</p>
          <p className="text-sm text-gray-400">Total NFTs in collection</p>
        </div>
      </div>

      {error && (
        <div className="text-center mt-4 text-red-400 text-sm">
          Error: {error}
        </div>
      )}
      <div className="text-center mt-4 text-sm text-gray-400">
        {loading ? 'Loading stats...' : mounted && lastUpdated ? (
          `Last updated: ${getTimeSince(lastUpdated)}`
        ) : mounted ? (
          'Last updated: Just now'
        ) : (
          'Loading stats...'
        )}
        <div className="mt-2">
          <a
            href="https://magiceden.io/sei/marketplace/mooz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400"
          >
            Powered by Magic Eden ↗
          </a>
        </div>
      </div>
    </section>
  );
}