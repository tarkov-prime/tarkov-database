import { ItemKind } from '../src/enum/ItemKind';
import { TarkovDatabase } from '../src/TarkovDatabase';

if (!process.env.TOKEN) {
  throw new Error('Missing TOKEN');
}

const token = process.env.TOKEN;

let api = new TarkovDatabase(token, 'Tarkov Database TS Tests');

beforeEach(() => {
  api = new TarkovDatabase(token, 'Tarkov Database TS Tests');
});

describe('TarkovDatabase Class', () => {
  describe('getNewToken Method', () => {
    it('Retrieves a new token', async () => {
      const newToken = await api.getNewToken();

      // Assert the regex match as a boolean to avoid leaking the token on failure
      const hasContent = /.+/.test(newToken);
      expect(hasContent).toBe(true);
    });
  });

  describe('getItemCounts Method', () => {
    it('Retrieves item counts', async () => {
      const itemCounts = await api.getItemCounts();

      // Iterate over every item kind and check for expected fields
      Object.values(ItemKind).forEach(v => {
        if (!(v in itemCounts)) {
          throw new Error('No count record found for ' + v);
        }

        const keys = Object.keys(itemCounts[v]);

        expect(keys.sort()).toEqual(['count', 'modified']);
      });
    });
  });
});
