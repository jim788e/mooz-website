# Magic Eden API v4 Stats Integration Documentation

This document contains the complete implementation details for integrating Magic Eden API v4 to fetch and display NFT collection statistics. This functionality has been removed from the codebase but is preserved here for future reference.

## Overview

The stats integration fetches real-time collection data from Magic Eden's v4 API, including floor price, listed count, total supply, and other market analytics. The implementation consists of:

1. **Magic Eden API Client** (`app/api/lib/tallal-test.ts`)
2. **Stats API Route** (`app/api/stats/route.ts`)
3. **Stats Section Component** (`app/components/StatsSection.tsx`)
4. **Test Script** (`test-magic-eden-api.js`)

## API Endpoints Used

### 1. Collections Endpoint (POST)
- **URL**: `https://api-mainnet.magiceden.dev/v4/evm-public/collections`
- **Method**: POST
- **Purpose**: Fetch collection metadata and get the collection ID
- **For EVM chains** (SEI, Ethereum, etc.), use the `evm-public` prefix

**Request Body:**
```json
{
  "chain": "sei",
  "collectionIds": ["0xcE0FEe0ac17f37CD66642F0EC8a4675Ae7F590dd"]
}
```

**Headers:**
```
accept: */*
content-type: application/json
Authorization: Bearer YOUR_API_KEY
```

### 2. Attribute Stats Endpoint (GET)
- **URL**: `https://api-mainnet.magiceden.dev/v4/collections/attribute_stats`
- **Method**: GET
- **Purpose**: Fetch attribute-level statistics including floor prices and token counts

**Query Parameters:**
- `chain`: The blockchain (e.g., "sei")
- `collectionId`: The collection contract address or ID

**Example:**
```
GET /v4/collections/attribute_stats?chain=sei&collectionId=0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd
```

**Headers:**
```
accept: */*
Authorization: Bearer YOUR_API_KEY
```

**Response Structure:**
```json
{
  "attributes": [
    {
      "name": "Fur",
      "value": "Black&white",
      "tokenCount": 799,
      "floorAskPrice": {
        "amount": {
          "raw": "24900000000000000000",
          "native": "24.9"
        },
        "currency": {
          "contract": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "symbol": "SEI",
          "decimals": 18,
          "displayName": "SEI"
        }
      }
    }
  ],
  "attributeCount": [
    {
      "tokenCount": 799
    }
  ]
}
```

## Implementation Details

### Magic Eden API Client (`app/api/lib/tallal-test.ts`)

```typescript
class MagicEdenAPI {
  private apiKey: string = '';
  private readonly baseUrl: string = 'https://api-mainnet.magiceden.dev';

  auth(token: string) {
    this.apiKey = token;
  }

  async getCollectionsV4(params: {
    collectionIds: string[];
    chain: string;
  }) {
    // For EVM chains (SEI, Ethereum, etc.), use evm-public endpoint
    const url = `${this.baseUrl}/v4/evm-public/collections`;
    const body = {
      chain: params.chain,
      collectionIds: params.collectionIds
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'content-type': 'application/json',
        'Authorization': this.apiKey,
      },
      body: JSON.stringify(body),
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return { data };
  }

  async getAttributeStats(params: {
    collectionId: string;
    chain: string;
  }) {
    // Attribute stats endpoint works with standard v4 path
    const url = `${this.baseUrl}/v4/collections/attribute_stats?chain=${params.chain}&collectionId=${params.collectionId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'Authorization': this.apiKey,
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return { data };
  }
}

export default MagicEdenAPI;
```

### Stats API Route (`app/api/stats/route.ts`)

**Key Features:**
- Fetches collection metadata to get the proper collection ID
- Fetches attribute stats to calculate floor price, listed count, and total supply
- Implements fallback mechanisms if endpoints fail
- Returns graceful error responses with default values

**Calculations:**
1. **Floor Price**: Minimum `floorAskPrice.amount.native` from all attributes
2. **Listed Count**: Count of unique attributes that have `floorAskPrice`
3. **Total Supply**: Sum of all `tokenCount` values from `attributeCount` array

**Response Format:**
```json
{
  "success": true,
  "data": {
    "floorPrice": 24.9,
    "listedCount": 150,
    "totalVolume": 0,
    "avgPrice24hr": 0,
    "lastSale": null,
    "totalListings": 150,
    "ownerCount": 0,
    "totalSupply": 3333
  }
}
```

**Note**: `totalVolume`, `avgPrice24hr`, `lastSale`, and `ownerCount` are placeholders set to 0/null as they are not yet available in the v4 API.

### Stats Section Component (`app/components/StatsSection.tsx`)

**Features:**
- Client-side React component with auto-refresh every 60 seconds
- Handles loading and error states
- Displays "Last updated" timestamp with relative time
- Prevents React hydration mismatches using `mounted` state
- Formats large numbers (e.g., 1000 → "1.00K")

**Stats Displayed:**
1. Floor Price (in SEI)
2. Total Volume (formatted, e.g., "1.23K SEI")
3. Listed NFTs (with percentage of total supply)
4. Unique Holders
5. 24h Volume
6. Total Supply (formatted)

**Hydration Fix:**
- Uses `mounted` state to ensure client-side only rendering of dynamic content
- Uses `suppressHydrationWarning` on time-sensitive elements
- Initializes `lastUpdated` as `null` to avoid server/client mismatch

## Environment Variables Required

```env
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=0xcE0FEe0ac17f37CD66642F0EC8a4675Ae7F590dd
MAGIC_EDEN_API_KEY=your_api_key_here
```

## Error Handling

1. **Missing Environment Variables**: Returns error with default values
2. **Collections Endpoint Failure**: Falls back to using contract address directly
3. **Attribute Stats Failure**: Tries with original contract address if collection ID fails
4. **Complete Failure**: Returns default values (all zeros) to prevent UI crashes

## React Hydration Issues Fixed

The implementation includes several fixes for React hydration mismatches:

1. **StatsSection Component**:
   - `mounted` state to track client-side rendering
   - `lastUpdated` initialized as `null`
   - `getTimeSince` function checks `mounted` before calculating time
   - `suppressHydrationWarning` on time display elements

2. **Layout Component** (`app/layout.tsx`):
   - `suppressHydrationWarning` on `<html>` and `<body>` tags

3. **NavLink Component** (`app/components/NavLink.tsx`):
   - `mounted` state and `typeof window !== 'undefined'` check before accessing `document`

## Test Script (`test-magic-eden-api.js`)

A comprehensive test script that:
- Tests multiple Magic Eden API endpoints
- Analyzes response structures
- Identifies which endpoints contain stats data
- Provides colored console output for easy debugging

**Usage:**
```bash
node test-magic-eden-api.js
```

## Integration Steps (For Future Use)

1. **Create API Client**:
   - Copy `app/api/lib/tallal-test.ts` to your project
   - Ensure it uses the correct EVM endpoint (`/v4/evm-public/collections`)

2. **Create API Route**:
   - Copy `app/api/stats/route.ts` to `app/api/stats/route.ts`
   - Set up environment variables

3. **Create Component**:
   - Copy `app/components/StatsSection.tsx` to your components directory
   - Import and use in your page

4. **Update Navigation**:
   - Add "Stats" link to navigation pointing to `#StatsSection`

5. **Add to Page**:
   ```tsx
   import StatsSection from './components/StatsSection';
   
   // In your page component:
   <section id="StatsSection">
     <StatsSection />
   </section>
   ```

## Known Limitations

1. **Listed Count**: The current implementation counts unique attributes with floor prices, which is an approximation. The exact listing count is not available in the attribute_stats endpoint.

2. **Missing Stats**: The following stats are not yet available in Magic Eden v4 API:
   - Total Volume
   - 24h Average Price
   - Last Sale
   - Owner Count

3. **API Rate Limits**: No rate limiting is implemented. Consider adding caching or rate limiting for production use.

## API Documentation Reference

- [Magic Eden API v4 Documentation](https://docs.magiceden.io/v4.0/reference/getcollections)
- [EVM API Collections Endpoint](https://docs.magiceden.io/v4.0/reference/getcollections)

## Troubleshooting

### 404 Error on Collections Endpoint
- **Issue**: Using `/v4/collections` instead of `/v4/evm-public/collections`
- **Solution**: Ensure you're using the EVM-specific endpoint for SEI chain

### 500 Error on Attribute Stats
- **Issue**: Collection ID format mismatch
- **Solution**: Try with both the collection ID from the collections endpoint and the original contract address

### Hydration Mismatch Errors
- **Issue**: Server-rendered HTML differs from client-rendered HTML
- **Solution**: Use `mounted` state and `suppressHydrationWarning` as shown in the component

### Stats Showing as 0 or "-"
- **Issue**: API calls failing silently
- **Solution**: Check browser console and server logs for API errors. Verify API key is correct.

## Future Enhancements

1. Add caching layer to reduce API calls
2. Implement WebSocket for real-time updates
3. Add more detailed error messages for users
4. Implement retry logic with exponential backoff
5. Add support for additional stats when Magic Eden API v4 adds them
6. Implement rate limiting to respect API limits
7. Add unit tests for API client and calculations

