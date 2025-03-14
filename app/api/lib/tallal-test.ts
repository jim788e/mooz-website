class TallalTest {
  private apiKey: string = '';
  private baseUrl: string = '';

  auth(token: string) {
    this.apiKey = token;
  }

  server(url: string) {
    this.baseUrl = url;
  }

  async getCollectionsV7(params: {
    id: string;
    includeMintStages?: string;
    includeSecurityConfigs?: string;
    normalizeRoyalties?: string;
    useNonFlaggedFloorAsk?: string;
    sortBy?: string;
    limit?: string;
    chain?: string;
    accept?: string;
  }) {
    try {
      const url = `${this.baseUrl}/${params.chain}/collections/v7?id=${params.id}`;
      console.log('Fetching from URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': this.apiKey,
          'Accept': params.accept || '*/*',
        },
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}

const tallalTest = new TallalTest();
export default tallalTest; 