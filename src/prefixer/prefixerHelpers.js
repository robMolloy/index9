export const prefixObjectKeysOrValues = (object, prefix, prefixes = {}) => {
  if(!prefix) return object
  
  const rtn = {}
  const keyPrefix = prefixes.key ? prefix : ''
  const valuePrefix = prefixes.value ? prefix : ''
  
  Object.entries(object).forEach(([k, v]) =>rtn[`${keyPrefix}${k}`] = `${valuePrefix}${v}`)
  return rtn
}

export const prefixObjectKeys = (object, prefix) => prefixObjectKeysOrValues(object, prefix, {key: true})
export const prefixObjectValues = (object, prefix) => prefixObjectKeysOrValues(object, prefix, {value: true})


export const prefixArrayOfObjectsKeys = (arrayOfObjects, prefix) => {
  if(!prefix) return arrayOfObjects
  return arrayOfObjects.map((object) => prefixObjectKeys(object, prefix))
}

export const prefixArrayOfObjectsValues = (arrayOfObjects, prefix) => {
  if(!prefix) return arrayOfObjects
  return arrayOfObjects.map((object) => prefixObjectValues(object, prefix))
}
