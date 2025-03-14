const { Flipside } = require("@flipsidecrypto/sdk");

// Initialize Flipside with your API key
const flipside = new Flipside(
    "433da7d2-e833-4fad-8621-3fbe9af55f5a", // Replace with your actual API key
    "https://api-v2.flipsidecrypto.xyz"
);

async function testQuery() {
    try {
        console.log("Running MOOZ collection stats query...");

        const query = `
WITH info AS (
  SELECT 
    tx_hash,
    block_timestamp,
    from_address AS buyer,
    to_address AS collection,
    value AS attribute_value
  FROM 
    sei.core_evm.fact_transactions
  WHERE 
    block_timestamp > '2024-12-01'
    AND origin_function_signature IN ('0xa22cb465') 
    AND to_address = '0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd'
),

info2 AS (
  SELECT 
    *,
    attribute_value AS prices,
    45 AS sei_price,
    (sei_price) AS sei_volume
  FROM 
    info
)

SELECT 
  COUNT(DISTINCT tx_hash) AS sales,
  COUNT(DISTINCT tx_hash) AS distinct_nft_sold,
  COUNT(DISTINCT buyer) AS buyers,
  SUM(sei_volume) AS sei_volume,
  AVG(sei_price) AS avg_nft_price
FROM info2;
`;

        console.log("Executing query...");
        const result = await flipside.query.run({
            sql: query,
            ttlMinutes: 10,
        });

        console.log("Query status:", result.status);

        if (result.status === "finished" && result.rows) {
            console.log("\nMOOZ Collection Stats:");
            console.log(JSON.stringify(result.rows, null, 2));
        } else {
            console.error("Query failed or returned no results:", result);
        }
    } catch (error) {
        console.error("Error running query:", error);
    }
}

// Run the test
console.log("Starting MOOZ collection analysis...");
testQuery();