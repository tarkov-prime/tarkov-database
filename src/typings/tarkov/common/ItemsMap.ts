import { ItemKind } from '../../../enum/ItemKind';
import { Ammunition } from '../Ammunition';
import { Armor } from '../Armor';
import { Backpack } from '../Backpack';
import { Barter } from '../Barter';
import { Clothing } from '../Clothing';
import { Common } from '../Common';
import { Container } from '../Container';
import { Firearm } from '../Firearm';
import { Food } from '../Food';
import { Grenade } from '../Grenade';

export type ItemsMap = {
  [ItemKind.AMMUNITION]: Record<string, Ammunition>;
  [ItemKind.ARMOR]: Record<string, Armor>;
  [ItemKind.BACKPACK]: Record<string, Backpack>;
  [ItemKind.BARTER]: Record<string, Barter>;
  [ItemKind.CLOTHING]: Record<string, Clothing>;
  [ItemKind.COMMON]: Record<string, Common>;
  [ItemKind.CONTAINER]: Record<string, Container>;
  [ItemKind.FIREARM]: Record<string, Firearm>;
  [ItemKind.FOOD]: Record<string, Food>;
  [ItemKind.GRENADE]: Record<string, Grenade>;

  [ItemKind.HEADPHONES]: Record<string, any>;
  [ItemKind.KEY]: Record<string, any>;
  [ItemKind.MAGAZINE]: Record<string, any>;
  [ItemKind.MAP]: Record<string, any>;
  [ItemKind.MEDICAL]: Record<string, any>;
  [ItemKind.MELEE]: Record<string, any>;
  [ItemKind.MODIFICATION]: Record<string, any>;
  [ItemKind.MODIFICATION_BARREL]: Record<string, any>;
  [ItemKind.MODIFICATION_BIPOD]: Record<string, any>;
  [ItemKind.MODIFICATION_CHARGE]: Record<string, any>;
  [ItemKind.MODIFICATION_DEVICE]: Record<string, any>;
  [ItemKind.MODIFICATION_FOREGRIP]: Record<string, any>;
  [ItemKind.MODIFICATION_GASBLOCK]: Record<string, any>;
  [ItemKind.MODIFICATION_GOGGLES]: Record<string, any>;
  [ItemKind.MODIFICATION_HANDGUARD]: Record<string, any>;
  [ItemKind.MODIFICATION_LAUNCHER]: Record<string, any>;
  [ItemKind.MODIFICATION_MOUNT]: Record<string, any>;
  [ItemKind.MODIFICATION_MUZZLE]: Record<string, any>;
  [ItemKind.MODIFICATION_PISTOLGRIP]: Record<string, any>;
  [ItemKind.MODIFICATION_RECEIVER]: Record<string, any>;
  [ItemKind.MODIFICATION_SIGHT]: Record<string, any>;
  [ItemKind.MODIFICATION_SIGHT_SPECIAL]: Record<string, any>;
  [ItemKind.MODIFICATION_STOCK]: Record<string, any>;
  [ItemKind.MONEY]: Record<string, any>;
  [ItemKind.TACTICAL_RIG]: Record<string, any>;
};
