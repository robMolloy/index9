import { group } from './grouper';

export class Joiner {
  constructor(parents) {
    this.parents = parents;
    this.children = {};
    this.newObj = {};
    this.orphans = {};
    this.joinKey = 'data';

    return this;
  }

  with(children) {
    this.children = children;

    return this;
  }

  on(joinKey) {
    this.joinKey = joinKey;
    return this;
  }

  whereIdMatches(childKey) {
    const { joinKey } = this;
    const newObj = {};

    const parentEntries = Object.entries(this.parents);
    const groupedChildren = group(this.children).on(childKey);

    parentEntries.forEach(([parentId, parentVal]) => {
      const childGroup = groupedChildren[parentId] ?? {};
      const joinObject = { [joinKey]: childGroup };

      newObj[parentId] = { ...parentVal, ...joinObject };
    });

    this.newObj = newObj;
    return newObj;
  }
}

// const populater = (params) => {};
export const join = (obj) => new Joiner(obj);
