import { prefixObject, indexArrayOfObjects, prefixArrayOfObjects } from '../..'

const leftJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []

  leftRows = prefixArrayOfObjects(leftRows).keys.with(leftPrefix)
  rightRows = prefixArrayOfObjects(rightRows).keys.with(rightPrefix)

  leftJoinKey = `${leftPrefix || ''}${leftJoinKey}`
  rightJoinKey = `${rightPrefix || ''}${rightJoinKey}`

  const leftIndexed = indexArrayOfObjects(leftRows).on(leftJoinKey)

  rightRows.forEach((rightRow) => {
    const rightRowSelector = rightRow[rightJoinKey]
    const leftRowSelection = leftIndexed[rightRowSelector]

    const newRow = !leftRowSelection
      ? { ...rightRow }
      : { ...leftRowSelection, ...rightRow }
    rtn.push(newRow)
  })

  return rtn
}


export const rightJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => leftJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
