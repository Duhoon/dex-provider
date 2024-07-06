import { Token } from 'src/types';

export const tokens: { [chain_id: string]: { [symbol: string]: Token } } = {
  '8453': {
    AERO: {
      name: 'Aerodrome',
      symbol: 'AERO',
      ex_symbol: 'AERO',
      address: '',
    },
    DEGEN: {
      name: 'DEGEN',
      symbol: 'DEGEN',
      ex_symbol: 'DEGEN',
      address: '',
    },
  },
};
