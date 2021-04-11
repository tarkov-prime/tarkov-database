import { ItemList } from './ItemList';

export type Grid = {
  id: string;
  height: number;
  width: number;
  maxWeight: number;
  filter: ItemList;
};
