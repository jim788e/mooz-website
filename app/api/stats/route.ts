import { NextResponse } from 'next/server';
import MagicEdenAPI from '../lib/tallal-test';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
    const apiKey = process.env.MAGIC_EDEN_API_KEY;
    
    if (!contractAddress || !apiKey) {
      throw new Error('Missing required environment variables');
    }

    const api = new MagicEdenAPI();
    api.auth('Bearer ' + apiKey);

    // Fetch collection data from v4 API
    const { data: collectionData } = await api.getCollectionsV4({
      collectionIds: [contractAddress],
      chain: 'sei'
    });

    // Parse collections array from response
    const collections = collectionData?.collections || [];
    
    if (!collections || collections.length === 0) {
      throw new Error('No collection data received from v4 API');
    }

    const collection = collections[0];
    const collectionId = collection.id || contractAddress;
    
    // Fetch attribute stats to get floor price and listed count
    // If this fails, try with original contract address, then use default values
    let attributes: any[] = [];
    let attributeCount: any[] = [];
    
    try {
      const { data: attributeStats } = await api.getAttributeStats({
        collectionId: collectionId,
        chain: 'sei'
      });
      
      attributes = attributeStats?.attributes || [];
      attributeCount = attributeStats?.attributeCount || [];
    } catch (statsError) {
      // Try with original contract address if collection.id failed
      if (collectionId !== contractAddress) {
        try {
          const { data: attributeStats } = await api.getAttributeStats({
            collectionId: contractAddress,
            chain: 'sei'
          });
          
          attributes = attributeStats?.attributes || [];
          attributeCount = attributeStats?.attributeCount || [];
        } catch (fallbackError) {
          console.error('Failed to fetch attribute stats with both IDs, using defaults');
        }
      } else {
        console.error('Failed to fetch attribute stats, using defaults');
      }
    }
    
    // Calculate floor price: minimum floorAskPrice from all attributes
    let floorPrice = 0;
    const prices: number[] = [];
    
    for (const attr of attributes) {
      if (attr.floorAskPrice?.amount?.native) {
        const price = parseFloat(attr.floorAskPrice.amount.native);
        if (!isNaN(price) && price > 0) {
          prices.push(price);
        }
      }
    }
    
    if (prices.length > 0) {
      floorPrice = Math.min(...prices);
    }
    
    // Calculate listed count: count unique attributes with floorAskPrice
    // Note: This is an approximation - attribute_stats doesn't provide exact listing count
    let listedCount = 0;
    const listedAttributeKeys = new Set<string>();
    
    for (const attr of attributes) {
      if (attr.floorAskPrice) {
        const key = `${attr.name || ''}_${attr.value || ''}`;
        if (!listedAttributeKeys.has(key)) {
          listedAttributeKeys.add(key);
          listedCount += 1;
        }
      }
    }
    
    // Calculate total supply: sum of all tokenCount from attributeCount
    let totalSupply = 0;
    for (const count of attributeCount) {
      if (count.tokenCount) {
        totalSupply += parseInt(String(count.tokenCount)) || 0;
      }
    }
    
    return NextResponse.json({
      success: true,
      data: {
        floorPrice: floorPrice || 0,
        listedCount: listedCount || 0,
        totalVolume: 0, // Will be added in future Magic Eden API updates
        avgPrice24hr: 0, // Will be added in future Magic Eden API updates
        lastSale: null, // Will be added in future Magic Eden API updates
        totalListings: listedCount || 0,
        ownerCount: 0, // Will be added in future Magic Eden API updates
        totalSupply: totalSupply || 0
      }
    });

  } catch (error) {
    console.error('Stats API error:', error);
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