const { Flipside } = require("@flipsidecrypto/sdk");

// Initialize Flipside with your API key
const flipside = new Flipside(
    "433da7d2-e833-4fad-8621-3fbe9af55f5a",
    "https://api-v2.flipsidecrypto.xyz"
);

async function testQuery() {
    try {
        console.log("Running MOOZ collection stats query...");
        
        const query = `
        WITH info AS (
            SELECT 
                case when value>0 then value/40 else 1 end as nft_id,
                tx_hash,
                block_timestamp,
                from_address AS minter,
                to_address AS collection,
                value AS attribute_value
            FROM 
                sei.core_evm.fact_transactions
            WHERE 
                block_timestamp > '2024-12-01'
                and origin_function_signature in ('0xb971b4c4') 
                and to_address='0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd'
            GROUP BY 
                tx_hash, block_timestamp, minter, collection, attribute_value
        )

        select 
            count(distinct tx_hash) as mints,
            sum(nft_id)*3 as distinct_nft_minted,
            count(distinct minter) as minters,
            sum(attribute_value) as sei_volume,
            avg(case when attribute_value>0 then attribute_value/nft_id else attribute_value end) as avg_nft_price,
            max(attribute_value/nft_id) as max_nft_price
        from info`;

        console.log("Executing query...");
        const result = await flipside.query.run({
            sql: query,
            ttlMinutes: 10,
        });

        console.log("Query status:", result.status);
        console.log("\nMOOZ Collection Stats:");
        console.log(JSON.stringify(result.rows, null, 2));
        
    } catch (error) {
        console.error("Error running query:", error);
    }
}

// Run the test
console.log("Starting MOOZ collection analysis...");
testQuery();