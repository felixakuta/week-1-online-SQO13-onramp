function filterList(arr) {
    return arr.filter(function (item) { return typeof item === 'number' });
 }

module.exports = filterList
console.log(filterList([1, 2, 'a', 'b']));
console.log(filterList([1,'a','b',0,15]));
console.log(filterList([1,2,'aasf','1','123',123]));