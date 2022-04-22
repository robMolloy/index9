export const join = (arrayOfObjects1) => ({
  to: (arrayOfObjects2) => ({
    where: (link1) => ({
      matchesIndex: () => ({
        ifNoMatch: (ifNoMatchFn) => {
          const returnEmptyArray = (row) => []
          ifNoMatchFn = ifNoMatchFn || returnEmptyArray
          
          const rtn = []
          arrayOfObjects1.forEach((object1Row) => {
            const selector = object1Row[link1]
            const selection = arrayOfObjects2[selector]

            const selectionArray = Array.isArray(selection) ? selection : [selection]

            const newRows = !selection
              ? ifNoMatchFn(object1Row)
              : selectionArray.map((object2Row) => ({...object2Row, ...object1Row}))
            
            rtn.push(...newRows)
          })

          return rtn 
        }
      })
    })
  })
})


