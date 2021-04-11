import { ItemProperties } from './common/ItemProperties';

export type GrenadeType = 'flash' | 'frag' | 'smoke';

export type GrenadeProperties = {
  _kind: 'grenade';
  type: GrenadeType;
  delay: number;
  fragCount: number;
  minDistance: number;
  maxDistance: number;
  contusionDistance: number;
  strength: number;
  emitTime: number;
};

export type Grenade = ItemProperties & GrenadeProperties;
