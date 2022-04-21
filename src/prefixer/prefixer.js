import { prefixObjectKeys, prefixObjectValues, prefixArrayOfObjectsKeys, prefixArrayOfObjectsValues } from './prefixerHelpers'

export const prefixObject = (object) => ({
  keys: {
    with: (prefix) => prefixObjectKeys(object, prefix)
  },
  values: {
    with: (prefix) => prefixObjectValues(object, prefix)
  }
})


export const prefixArrayOfObjects = (arrayOfObjects) => ({
  keys: {
    with: (prefix) => prefixArrayOfObjectsKeys(arrayOfObjects, prefix)
  },
  values: {
    with: (prefix) => prefixArrayOfObjectsValues(arrayOfObjects, prefix)
  }
})

export const prefix = {
  object: prefixObject,
  objects: prefixArrayOfObjects
}