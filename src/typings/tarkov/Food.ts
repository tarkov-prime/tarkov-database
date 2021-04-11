import { ItemProperties } from './common/ItemProperties';
import { Effects } from './Effects';

export type FoodType = 'drink' | 'food';

export type FoodProperties = {
  _kind: 'food';
  type: FoodType;
  resources: number;
  useTime: number;
  effects: Effects;
};

export type Food = ItemProperties & FoodProperties;
