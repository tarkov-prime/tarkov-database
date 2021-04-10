import { ItemKind } from '../../../enum/ItemKind';

export type ItemList = Partial<Record<ItemKind, string[]>>;
