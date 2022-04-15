import { prefixObject, groupArrayOfObjects, prefixArrayOfObjects } from '../..'

const leftJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []
  const rightGrouped = groupArrayOfObjects(rightRows).on(rightJoinKey)

  leftRows.forEach((leftRow) => {
    const leftGroupSelector = leftRow[leftJoinKey]
    const rightGroupSelection = rightGrouped[leftGroupSelector]

    const newRows = !rightGroupSelection
      ? [{...prefixObject(leftRow).keys.with(leftPrefix)}]
      : prefixArrayOfObjects(rightGroupSelection).keys.with(rightPrefix)
        .map((rightRow) => ({...rightRow, ...leftRow}))

    rtn.push(...newRows)
  })

  return rtn
}


export const leftJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => leftJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
