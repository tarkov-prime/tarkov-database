import { ItemProperties } from './common/ItemProperties'

export type AmmunitionFragmentationStats = {
  chance: number;
  min: number;
  max: number;
}

export type AmmunitionEffects = {
  lightBleedingChance?: number;
  heavyBleedingChance?: number;
}

export type AmmunitionGrenadeProperties = {
  delay: number;
  fragCount: number;
  minRadius: number;
  maxRadius: number;
}

export type AmmunitionCaliber =
  | ".366 TKM"
  | "11.43x23mm ACP"
  | "12.7x108mm"
  | "12.7x55mm STs-130"
  | "12ga"
  | "20ga"
  | "23x75mmR"
  | "30x29mm"
  | "40mmRU"
  | "40x46mm"
  | "5.45x39mm"
  | "5.56x45mm NATO"
  | "5.7x28mm"
  | "7.62x25mm Tokarev"
  | "7.62x35mm"
  | "7.62x39mm"
  | "7.62x51mm NATO"
  | "7.62x54mmR"
  | "8.6x70mm"
  | "9x18mm Makarov"
  | "9x19mm Parabellum"
  | "9x21mm Gyurza"
  | "9x39mm"
  | "HK 4.6x30mm";

export type WeaponModifier = {
  accuracy: number;
  recoil: number;
}

export type AmmunitionProperties = {
  _kind: 'ammunition';
  caliber: AmmunitionCaliber;
  type: string;
  tracer: boolean;
  tracerColor: string;
  subsonic: boolean;
  velocity: number;
  ballisticCoef: number;
  damage: number;
  penetration: number;
  armorDamage: number;
  fragmentation: AmmunitionFragmentationStats;
  effects: AmmunitionEffects;
  projectiles: number;
  weaponModifier: WeaponModifier;
  grenadeProps: AmmunitionGrenadeProperties;
}

export type Ammunition = ItemProperties & AmmunitionProperties;
