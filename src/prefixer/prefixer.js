const prefixObjectKeys = (object, prefix) => {
  if(!prefix) return object
  const rtn = {}
	Object.entries(object).forEach(([k, v]) => rtn[`${prefix}${k}`] = v)
  return rtn
}

const prefixObjectValues = (object, prefix) => {
  if(!prefix) return object
  const rtn = {}
	Object.entries(object).forEach(([k, v]) => rtn[k] = `${prefix}${v}`)
  return rtn
}

const prefixArrayOfObjectsKeys = (arrayOfObjects, prefix) => {
  if(!prefix) return arrayOfObjects
  return arrayOfObjects.map((object) => prefixObjectKeys(object, prefix))
}

const prefixArrayOfObjectsValues = (arrayOfObjects, prefix) => {
  if(!prefix) return arrayOfObjects
  return arrayOfObjects.map((object) => prefixObjectValues(object, prefix))
}

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

