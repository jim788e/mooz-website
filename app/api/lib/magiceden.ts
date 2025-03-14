import tallalTest from './tallal-test';

interface CollectionParams {
  id: string;
  includeMintStages?: string;
  includeSecurityConfigs?: string;
  normalizeRoyalties?: string;
  useNonFlaggedFloorAsk?: string;
  sortBy?: string;
  limit?: string;
  chain?: string;
  accept?: string;
}

class MagicEdenAPI {
  constructor() {
    // Initialize the API with the token
    tallalTest.auth('Bearer' + process.env.MAGIC_EDEN_API_KEY);
    tallalTest.server('https://api-mainnet.magiceden.dev/v3/rtp');
  }

  async getCollectionStats(params: CollectionParams) {
    try {
      const { data } = await tallalTest.getCollectionsV7({
        id: params.id,
        includeMintStages: 'false',
        includeSecurityConfigs: 'false',
        normalizeRoyalties: 'false',
        useNonFlaggedFloorAsk: 'false',
        sortBy: 'allTimeVolume',
        limit: '20',
        chain: 'sei',
        accept: '*/*'
      });

      console.log('Magic Eden API Response:', data);
      return { data };
    } catch (error) {
      console.error('Magic Eden API error:', error);
      throw error;
    }
  }
}

export const magicEden = new MagicEdenAPI(); 