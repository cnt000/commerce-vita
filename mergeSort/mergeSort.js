var mergeSort = function (list) {
    if (list.length < 2) {
        // console.log('Input: ', list);
        return list;
    }
    var mid = Math.floor(list.length / 2);
    var lPart = list.slice(0, mid);
    // console.log('chiamo mergeSort su', lPart);
    var l = mergeSort(lPart);
    var rPart = list.slice(mid, list.length);
    // console.log('chiamo mergeSort su', rPart);
    var r = mergeSort(rPart);
    // console.log('Left part: ', l)
    // console.log('Right part: ', r);
    var tempArr = Array.from({ length: l.length + r.length }, function () {
        console.log('l', l, 'r', r);
        if (!l.length)
            return r.shift();
        else if (!r.length)
            return l.shift();
        else
            return l[0] > r[0] ? r.shift() : l.shift();
    });
    console.log(tempArr);
    return tempArr;
};
var rand = function (min, max) { return Math.round(Math.random() * (max - min) + min); };
var input = Array.from({ length: 20 }, function () { return rand(10, 100); });
var oneTen = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// console.log('Input: ', input);
var result = mergeSort(oneTen);
console.log(result);
