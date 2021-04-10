import { Grid } from './common/Grid';
import { ItemProperties } from './common/ItemProperties';
import { Penalties } from './common/Penalties';

export type BackpackProperties = {
  _kind: 'backpack';
  grids: Grid[];
  penalties: Penalties;
}

export type Backpack = ItemProperties & BackpackProperties;
