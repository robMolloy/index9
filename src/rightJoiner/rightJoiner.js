import { indexArrayOfObjects, prefixArrayOfObjects, join } from '../..'

const leftJoiner = (leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix) => {
  const rtn = []

  leftRows = prefixArrayOfObjects(leftRows).keys.with(leftPrefix)
  rightRows = prefixArrayOfObjects(rightRows).keys.with(rightPrefix)

  leftJoinKey = `${leftPrefix || ''}${leftJoinKey}`
  rightJoinKey = `${rightPrefix || ''}${rightJoinKey}`

  const leftIndexed = indexArrayOfObjects(leftRows).on(leftJoinKey)

  return join(rightRows).to(leftIndexed).where(rightJoinKey).matchesIndex().ifNoMatch((row) => ({...row}))
}


export const rightJoinArrayOfObjects = (rightRows, rightPrefix) => ({
  to: (leftRows, leftPrefix) => ({
    where: (rightJoinKey) => ({
      matches: (leftJoinKey) => leftJoiner(leftRows, rightRows, leftJoinKey, rightJoinKey, leftPrefix, rightPrefix)
    })
  })
})
