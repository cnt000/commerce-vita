var mergeSort = function (list) {
    if (list.length < 2) {
        return list;
    }
    var mid = Math.floor(list.length / 2);
    var lPart = list.slice(0, mid);
    var l = mergeSort(lPart);
    var rPart = list.slice(mid, list.length);
    var r = mergeSort(rPart);
    var tempArr = Array.from({ length: l.length + r.length }, function () {
        console.log('l', l, 'r', r);
        if (!l.length)
            return r.shift();
        else if (!r.length)
            return l.shift();
        else
            return l[0] > r[0] ? r.shift() : l.shift();
    });
    return tempArr;
};
var rand = function (min, max) { return Math.round(Math.random() * (max - min) + min); };
var input = Array.from({ length: 20 }, function () { return rand(10, 100); });
console.log('input:', input);
var result = mergeSort(input);
console.log(result);
