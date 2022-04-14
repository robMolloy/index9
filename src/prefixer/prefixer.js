const prefixObjectKeys = (object, prefix) => {
	const rtn = {}
  console.log(object, ',', prefix)
	Object.entries(object).forEach(([k, v]) => rtn[`${prefix}${k}`] = v)
	return rtn
}

const prefixObjectValues = (object, prefix) => {
	const rtn = {}
	Object.entries(object).forEach(([k, v]) => rtn[k] = `${prefix}${v}`)
  Object.entries(object).reduce((newObject, [k,v]) => {
    return { ...newObject, [k]: v}
  }, {})
	return rtn
}

const prefixArrayOfObjectsKeys = (object, prefix) => {
	const rtn = {}
	Object.entries(object).forEach(([k, v]) => rtn[`${prefix}${k}`] = v)
	return rtn
}

const prefixArrayOfObjectsValues = (object, prefix) => {
	const rtn = {}
	Object.entries(object).forEach(([k, v]) => rtn[`${prefix}${k}`] = v)
	return rtn
}



  



export const prefixObject = (obj1) => ({
  keys: () => ({
    with: (prefix) => {
			console.log(obj1)
			return prefixObjectKeys(object, prefix)
		},
  }),
  values: {
    with: (prefix) => prefixObjectValues(object, prefix),
  },
})

export const prefixArrayOfObjects = (arrayOfObjects) => ({
  keys: {
    with: (prefix) => prefixArrayOfObjectsKeys(arrayOfObjects, prefix),
  },
  values: {
    with: (prefix) => prefixArrayOfObjectsValues(arrayOfObjects, prefix),
  },
})
