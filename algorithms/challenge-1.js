function countTruthy(arr){
    let score = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            score.push(arr[i])
        }
    }return score.length
  
}

console.log(countTruthy([6, 3, 0, 30, 7]));
console.log(countTruthy(['', 3, 0, 30, 7]));
console.log(countTruthy(['', 0, 0, undefined, 7]));
module.exports = countTruthy;