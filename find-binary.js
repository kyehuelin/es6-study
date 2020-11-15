// function solution(N) {
//     const string = N.toString(2)
//     let regEx = /(?<=1)(0*)(?=1)/g
//     let results = string.match(regEx) || []

//     return results.reduce((acc, string) => {
//         return string.length > acc ? string.length : acc
//     },0)

// }

const hasEnded = (i, binString) => {
  return i > binString.length ? true : false
}

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binString = N.toString(2).split("")
  console.log(binString)

  let ended = false
  let i = 0
  let maxLength = 0
  let tempCounter = 0
  let stillZero = true

  while (!hasEnded(i, binString)) {
    console.log("run the outiside loop")
    if (binString[i] === "1" && binString[i + 1] === "0") {
      tempCounter = 0
      while (!hasEnded(i, binString) || stillZero) {
        if (binString[i] === "0") {
          console.log(binString[i], tempCounter)
          tempCounter++
        }
        if (binString[i] === "1") {
          console.log("not a zero exiting")
          stillZero = false
          maxLength = tempCounter > maxLength ? tempCounter : maxLength
          tempCounter = 0
        }
        i++
      }
    }
    i++
  }
  return maxLength
}

console.log(solution(1041))
// console.log(solution(15))
// console.log(solution(32))
