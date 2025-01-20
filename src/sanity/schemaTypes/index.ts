import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'
import foods from './foods'
import shop from './shop'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs,foods,shop],
}
