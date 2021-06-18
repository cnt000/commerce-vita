interface ArrayConstructor {
  from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}

const mergeSort = (list: number[]) => {
  if (list.length < 2) {
    return list;
  }
  const mid = Math.floor(list.length / 2);
  const lPart = list.slice(0, mid);
  const l = mergeSort(lPart);
  const rPart = list.slice(mid, list.length);
  const r = mergeSort(rPart);
  const tempArr = Array.from({ length: l.length + r.length }, () => {
    console.log('l', l, 'r', r);
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
  return tempArr;

};

const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const input: number[] = Array.from({ length: 20 }, () => rand(10, 100));
console.log('input:', input);
const result = mergeSort(input);
console.log(result);
