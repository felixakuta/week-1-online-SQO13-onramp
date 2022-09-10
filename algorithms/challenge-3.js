function sumMix(arr) {
    let sum = 0;
    
    let numOnlyArr = arr.map((item) => { return parseInt(item, 10);});
    numOnlyArr.map((item) => { return sum += item; })
        return sum;
    }
    

    module.exports = sumMix
    
    console.log(sumMix([9, 3, '7', '3']));