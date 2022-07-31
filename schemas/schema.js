// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import car from './car'
import brand from './brand'
import richText from './richText'
import picture from './picture'
import gallery from './gallery'
import city from './city'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    car,
    brand,
    city,
   richText,
   picture,
   gallery

  ]),
})
