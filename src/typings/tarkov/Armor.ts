import { ItemList } from './common/ItemList';
import { ItemProperties } from './common/ItemProperties';
import { Penalties } from './common/Penalties';
import { Slots } from './common/Slots';

export type ArmorMaterial = {
  name: string;
  destructibility: number;
};

export type ArmorStats = {
  class: number;
  durability: number;
  material: ArmorMaterial;
  bluntThroughput: number;
  zones: string[];
};

export type ArmorProperties = {
  _kind: 'armor';
  type: string;
  armor: ArmorStats;
  penalties: Penalties;
  blocking: string[];
  slots: Slots;
  compatibility: ItemList;
};

export type Armor = ItemProperties & ArmorProperties;
