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
    const url = `${this.baseUrl}/v4/collections`;
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