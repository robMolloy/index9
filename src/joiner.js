import { group } from './grouper';

export const join = (parents) =>{
  const to = (children) => {
    
    const on = (joinKey)=>{

      return { 
        whereIdMatches: (childKey) =>{
          const result = {};

          const parentEntries = Object.entries(parents);
          const groupedChildren = group(children).on(childKey);

          parentEntries.forEach(([parentId, parentVal]) => {
            const childGroup = groupedChildren[parentId] ?? {};
            const joinObject = { [joinKey]: childGroup };

            result[parentId] = { ...parentVal, ...joinObject };
          });

          return result
      } 
      }
    }

    return { on }
  }

  return { to }
}

