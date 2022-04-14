import { group } from '../grouper/grouper'

const leftJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, rightPrefix) => {
  const rtn = []
  // const isRightArray = Array.isArray(rightRows)
  const rightGrouped = group(rightRows).on(rightJoinKey)

  Object.values(leftRows).forEach((leftRow) => {
      const leftGroupSelector = leftRow[leftJoinKey]
      const rightGroupSelection = rightGrouped[leftGroupSelector]
      

      const newRows = !rightGroupSelection
        ? [{...leftRow}]
        : rightGroupSelection.map((rightRow) => ({...rightRow, ...leftRow}))

      rtn.push(...newRows)
  })

  return rtn
}


export const leftJoin = (rightRows, rightPrefix) => ({
  to: (leftRows) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => leftJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, rightPrefix)
    })
  })
})
