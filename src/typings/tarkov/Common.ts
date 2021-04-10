import { ItemProperties } from './common/ItemProperties'

export type CommonProperties = {
  _kind: 'common';
}

export type Common = ItemProperties & CommonProperties;
