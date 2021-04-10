import { ItemKind } from '../../enum/ItemKind';

export type ItemCountsResponse = {
  kinds: Record<
    ItemKind,
    {
      count: number;
      modified: number;
    }
  >;
  modified: number;
  total: number;
};
