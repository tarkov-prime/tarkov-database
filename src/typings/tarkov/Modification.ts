import { GridModifier } from './common/GridModifier';
import { ItemList } from './common/ItemList';
import { Slots } from './common/Slots';

export type ModificationProperties = {
  ergonomicsFP: number;
  accuracy: number;
  recoil: number;
  raidModdable: boolean;
  gridModifier: GridModifier;
  slots: Slots;
  compatibility: ItemList;
  conflicts: ItemList;
}
