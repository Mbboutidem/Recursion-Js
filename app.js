//reverse the string
let string = 'Captain'
let newString = ''
for (let i = string.length - 1; i > -1; i -= 1) {
  newString += string[i]
}
//console.log(newString)

function reverse(string) {
    let newStr = "";
    for(let i = string.length-1; i > -1; i--) {
      newStr += string[i];
    }
    return newStr;
  }
//length of a string

function length(str) {
    return str.length
}

// //another method
// const length = ({ length }) => length;
