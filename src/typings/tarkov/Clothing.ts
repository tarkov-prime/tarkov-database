import { ItemProperties } from './common/ItemProperties';
import { Penalties } from './common/Penalties';
import { Slots } from './common/Slots';

export type ClothingProperties = {
  _kind: 'clothing';
  type: string;
  blocking: string[];
  penalties: Penalties;
  slots: Slots;
}

export type Clothing = ItemProperties & ClothingProperties;
