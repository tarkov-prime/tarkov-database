import { Grid } from './common/Grid';
import { ItemProperties } from './common/ItemProperties';

export type ContainerProperties = {
  _kind: 'container';
  grids: Grid[];
};

export type Container = ItemProperties & ContainerProperties;
