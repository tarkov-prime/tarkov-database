import { ItemKind } from '../../../enum/ItemKind';
import { GridProperties } from './GridProperties';

export type ItemProperties = {
  _id: string;
  name: string;
  shortName: string;
  description: string;
  price: number;
  weight: number;
  maxStack: number;
  rarity: string;
  grid: GridProperties;
  _modified: number;
  _Kind: ItemKind;
};
