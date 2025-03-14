import { NextResponse } from 'next/server';
import tallalTest from '../lib/tallal-test';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
    const apiKey = process.env.MAGIC_EDEN_API_KEY;
    
    if (!contractAddress || !apiKey) {
      throw new Error('Missing required environment variables');
    }

    tallalTest.auth('Bearer ' + apiKey);
    tallalTest.server('https://api-mainnet.magiceden.dev/v3/rtp');

    const { data } = await tallalTest.getCollectionsV7({
      id: contractAddress,
      includeMintStages: 'false',
      includeSecurityConfigs: 'false',
      normalizeRoyalties: 'false',
      useNonFlaggedFloorAsk: 'false',
      sortBy: 'allTimeVolume',
      limit: '20',
      chain: 'sei',
      accept: '*/*'
    });

    if (!data?.collections?.[0]) {
      throw new Error('No collection data received');
    }

    const collection = data.collections[0];
    
    return NextResponse.json({
      success: true,
      data: {
        floorPrice: collection.floorAsk?.price?.amount?.native || 0,
        listedCount: parseInt(collection.onSaleCount) || 0,
        totalVolume: collection.volume?.allTime || 0,
        avgPrice24hr: collection.volume?.['1day'] || 0,
        lastSale: collection.floorSale?.price?.amount?.native || null,
        totalListings: parseInt(collection.onSaleCount) || 0,
        ownerCount: collection.ownerCount || 0,
        totalSupply: parseInt(collection.supply) || 0
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      data: {
        floorPrice: 0,
        listedCount: 0,
        totalVolume: 0,
        avgPrice24hr: 0,
        lastSale: null,
        totalListings: 0,
        ownerCount: 0,
        totalSupply: 0
      }
    });
  }
}