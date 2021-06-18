const mergeSort = (list: number[]) => {
  if (list.length < 2) {
    // console.log('Input: ', list);
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
  console.log(tempArr);
  return tempArr;

};

const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const input: number[] = Array.from({ length: 20 }, () => rand(10, 100));
const oneTen = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
// console.log('Input: ', input);
const result = mergeSort(oneTen);
console.log(result);
