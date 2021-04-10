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
  [ItemKind.AMMUNITION]: Ammunition;
  [ItemKind.ARMOR]: Armor;
  [ItemKind.BACKPACK]: Backpack;
  [ItemKind.BARTER]: Barter;
  [ItemKind.CLOTHING]: Clothing;
  [ItemKind.COMMON]: Common;
  [ItemKind.CONTAINER]: Container;
  [ItemKind.FIREARM]: Firearm;
  [ItemKind.FOOD]: Food;
  [ItemKind.GRENADE]: Grenade;
}
