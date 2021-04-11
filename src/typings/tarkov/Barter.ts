import { ItemProperties } from './common/ItemProperties';

export type BarterProperties = {
  _kind: 'barter';
};

export type Barter = ItemProperties & BarterProperties;
