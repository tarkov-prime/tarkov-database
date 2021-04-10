import { AmmunitionCaliber } from './Ammunition';
import { ItemProperties } from './common/ItemProperties'
import { Slots } from './common/Slots';

export type FirearmType =
  | 'primary'
  | 'secondary';

export type FirearmClass =
  | "assaultCarbine"
  | "assaultRifle"
  | "grenadeLauncher"
  | "machinegun"
  | "marksmanRifle"
  | "pistol"
  | "shotgun"
  | "smg"
  | "sniperRifle"
  | "specialWeapon";

export type FirearmProperties = {
  _kind: 'firearm';
  type: FirearmType;
  class: FirearmClass;
  caliber: AmmunitionCaliber;
  rof: number;
  burstRounds?: number;
  action: number;
  modes: string[];
  velocity: number;
  effectiveDist: number;
  ergonomicsFP: number;
  foldRectractable: boolean;
  recoilVertical: number;
  recoilHorizontal: number;
  slots: Slots;
}

export type Firearm = ItemProperties & FirearmProperties;
