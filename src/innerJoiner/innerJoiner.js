import { groupArrayOfObjects, prefixArrayOfObjects } from '..'

const innerJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []

  leftRows = prefixArrayOfObjects(leftRows).keys.with(leftPrefix)
  rightRows = prefixArrayOfObjects(rightRows).keys.with(rightPrefix)

  leftJoinKey = `${leftPrefix || ''}${leftJoinKey}`
  rightJoinKey = `${rightPrefix || ''}${rightJoinKey}`

  const rightGrouped = groupArrayOfObjects(rightRows).on(rightJoinKey)

  leftRows.forEach((leftRow) => {
    const leftGroupSelector = leftRow[leftJoinKey]
    const rightGroupSelection = rightGrouped[leftGroupSelector]

    const newRows = !rightGroupSelection
      ? []
      : rightGroupSelection.map((rightRow) => ({...rightRow, ...leftRow}))

    rtn.push(...newRows)
  })

  return rtn
}


export const innerJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => innerJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
