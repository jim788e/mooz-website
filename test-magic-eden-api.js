/**
 * Test script to find the correct Magic Eden API v4 endpoint for collection stats
 * Run with: node test-magic-eden-api.js
 */

const API_BASE = 'https://api-mainnet.magiceden.dev';
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || '0xcE0FEe0ac17f37CD66642F0EC8a4675Ae7F590dd';
const API_KEY = process.env.MAGIC_EDEN_API_KEY || 'YOUR_API_KEY_HERE';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testEndpoint(name, url, options = {}) {
  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`Testing: ${name}`, 'blue');
  log(`URL: ${url}`, 'yellow');
  log(`${'='.repeat(60)}`, 'cyan');

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'accept': '*/*',
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        ...options.headers,
      },
    });

    log(`Status: ${response.status} ${response.statusText}`, response.ok ? 'green' : 'red');

    if (!response.ok) {
      const errorText = await response.text();
      log(`Error: ${errorText}`, 'red');
      return null;
    }

    const data = await response.json();
    
    // Log response structure
    log('\nResponse Structure:', 'cyan');
    log(JSON.stringify(data, null, 2), 'reset');
    
    // Analyze the response
    log('\nResponse Analysis:', 'cyan');
    if (Array.isArray(data)) {
      log(`- Type: Array (${data.length} items)`, 'green');
      if (data.length > 0) {
        log(`- First item keys: ${Object.keys(data[0]).join(', ')}`, 'green');
      }
    } else if (data && typeof data === 'object') {
      log(`- Type: Object`, 'green');
      log(`- Top-level keys: ${Object.keys(data).join(', ')}`, 'green');
      
      // Check for collections array
      if (data.collections && Array.isArray(data.collections)) {
        log(`- Collections array: ${data.collections.length} items`, 'green');
        if (data.collections.length > 0) {
          const collection = data.collections[0];
          log(`- Collection keys: ${Object.keys(collection).join(', ')}`, 'green');
          
          // Check for stats-related fields
          const statsFields = Object.keys(collection).filter(key => 
            key.toLowerCase().includes('stat') ||
            key.toLowerCase().includes('volume') ||
            key.toLowerCase().includes('floor') ||
            key.toLowerCase().includes('price') ||
            key.toLowerCase().includes('supply') ||
            key.toLowerCase().includes('owner') ||
            key.toLowerCase().includes('listed') ||
            key.toLowerCase().includes('chain')
          );
          if (statsFields.length > 0) {
            log(`- Stats-related fields: ${statsFields.join(', ')}`, 'green');
          }
          
          // Check chainData
          if (collection.chainData) {
            log(`- chainData type: ${typeof collection.chainData}`, 'green');
            if (typeof collection.chainData === 'object') {
              log(`- chainData keys: ${Object.keys(collection.chainData).join(', ')}`, 'green');
            }
          }
        }
      }
      
      // Check for stats object
      if (data.stats) {
        log(`- Stats object keys: ${Object.keys(data.stats).join(', ')}`, 'green');
      }
    }

    return data;
  } catch (error) {
    log(`Error: ${error.message}`, 'red');
    return null;
  }
}

async function runTests() {
  log('\n🧪 Magic Eden API v4 Test Suite', 'cyan');
  log(`Contract Address: ${CONTRACT_ADDRESS}`, 'yellow');
  log(`API Key: ${API_KEY.substring(0, 10)}...`, 'yellow');

  const tests = [
    // Test 1: v4 Collections endpoint (POST)
    {
      name: 'v4 Collections (POST)',
      url: `${API_BASE}/v4/collections`,
      options: {
        method: 'POST',
        body: JSON.stringify({
          chain: 'sei',
          collectionIds: [CONTRACT_ADDRESS]
        })
      }
    },

    // Test 2: v4 Collections with symbol (if we can get it)
    {
      name: 'v4 Collections with lowercase address (POST)',
      url: `${API_BASE}/v4/collections`,
      options: {
        method: 'POST',
        body: JSON.stringify({
          chain: 'sei',
          collectionIds: [CONTRACT_ADDRESS.toLowerCase()]
        })
      }
    },

    // Test 3: EVM API collections endpoint
    {
      name: 'EVM API Collections (POST)',
      url: `${API_BASE}/v3/rtp/sei/collections`,
      options: {
        method: 'POST',
        body: JSON.stringify({
          collectionIds: [CONTRACT_ADDRESS]
        })
      }
    },

    // Test 4: v4 Attribute Stats endpoint (GET) - Correct endpoint!
    {
      name: 'v4 Attribute Stats (GET) - Correct endpoint',
      url: `${API_BASE}/v4/collections/attribute_stats?chain=sei&collectionId=${CONTRACT_ADDRESS}`,
      options: {
        method: 'GET'
      }
    },

    // Test 5: Try general stats endpoint (might not exist)
    {
      name: 'v4 General Stats (GET) - May not exist',
      url: `${API_BASE}/v4/collections/stats?chain=sei&collectionId=${CONTRACT_ADDRESS}`,
      options: {
        method: 'GET'
      }
    },

    // Test 6: Try Solana-style stats endpoint (probably won't work for SEI)
    {
      name: 'Solana Stats Endpoint (GET) - Likely to fail',
      url: `${API_BASE}/v2/collections/${CONTRACT_ADDRESS}/stats`,
      options: {
        method: 'GET'
      }
    },

    // Test 7: Try listings endpoint to get floor price
    {
      name: 'v4 Listings Endpoint (POST) - Get floor price',
      url: `${API_BASE}/v4/collections/listings`,
      options: {
        method: 'POST',
        body: JSON.stringify({
          chain: 'sei',
          collectionId: CONTRACT_ADDRESS,
          limit: 1,
          sortBy: 'PRICE_ASC'
        })
      }
    },

    // Test 8: Try activities endpoint for volume data
    {
      name: 'v4 Activities Endpoint (POST) - Get volume data',
      url: `${API_BASE}/v4/collections/activities`,
      options: {
        method: 'POST',
        body: JSON.stringify({
          chain: 'sei',
          collectionId: CONTRACT_ADDRESS,
          limit: 100
        })
      }
    },
  ];

  const results = {};
  let collectionSymbol = null;
  let collectionId = null;

  for (const test of tests) {
    if (test.skip) {
      log(`\n⏭️  Skipping: ${test.name}`, 'yellow');
      continue;
    }

    const result = await testEndpoint(test.name, test.url, test.options);
    
    if (result) {
      results[test.name] = result;
      
      // Extract symbol and id from collections endpoint if available
      if (result.collections && result.collections.length > 0) {
        const collection = result.collections[0];
        collectionSymbol = collection.symbol || collectionSymbol;
        collectionId = collection.id || collectionId;
        
        log(`\n✅ Found collection info:`, 'green');
        log(`   - Symbol: ${collectionSymbol || 'N/A'}`, 'green');
        log(`   - ID: ${collectionId || 'N/A'}`, 'green');
        log(`   - Name: ${collection.name || 'N/A'}`, 'green');
      }
    }

    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // If we got a symbol, try stats endpoint with it
  if (collectionSymbol || collectionId) {
    log(`\n\n🔍 Trying stats endpoints with symbol/id...`, 'cyan');
    
    const symbol = collectionSymbol || collectionId;
    const statsTests = [
      {
        name: `EVM Stats with Symbol (GET)`,
        url: `${API_BASE}/v3/rtp/sei/collections/${symbol}/stats`,
        options: { method: 'GET' }
      },
      {
        name: `EVM Stats with ID (GET)`,
        url: `${API_BASE}/v3/rtp/sei/collections/${collectionId}/stats`,
        options: { method: 'GET' }
      },
      {
        name: `Solana-style Stats with Symbol (GET)`,
        url: `${API_BASE}/v2/collections/${symbol}/stats`,
        options: { method: 'GET' }
      }
    ];

    for (const test of statsTests) {
      const result = await testEndpoint(test.name, test.url, test.options);
      if (result) {
        results[test.name] = result;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Summary
  log(`\n\n${'='.repeat(60)}`, 'cyan');
  log('📊 Test Summary', 'blue');
  log(`${'='.repeat(60)}`, 'cyan');
  log(`Total tests run: ${Object.keys(results).length}`, 'green');
  
  // Find which endpoint has stats data
  log(`\n🔍 Looking for stats data...`, 'cyan');
  for (const [name, data] of Object.entries(results)) {
    const hasStats = JSON.stringify(data).toLowerCase().includes('floor') ||
                     JSON.stringify(data).toLowerCase().includes('volume') ||
                     JSON.stringify(data).toLowerCase().includes('stat');
    
    if (hasStats) {
      log(`✅ ${name} - Contains potential stats data`, 'green');
    }
  }

  log(`\n✨ Testing complete! Check the output above for response structures.`, 'cyan');
}

// Run the tests
runTests().catch(error => {
  log(`\n❌ Fatal error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});

