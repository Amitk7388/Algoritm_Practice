let name = ["amit@", "man!gor", "O$range"]

// const arr = name.map((ele) => {
//     return ele.replace(/[^a-zA-Z]/g, "")
// })

const usingForLoop = function(arr){
    const len = arr.length
    const finalArray = []
    for(let i = 0; i < len ; i++){  
        finalArray.push( arr[i].replace(/[^a-zA-Z]/g, ""))
    }
    return finalArray
}
//console.log(usingForLoop(name))


//dsfhasdkjfhakjshdfahskjhdcadsjfjahsdkjf //Find number of String preasent in this string and find higest alpha used
//[a, b, c, d, e]  startlength =2 // outPut cdeab
//Working on Map
//working on filter
//Working on reduce
//when not to use node.js
//when to use mysql and mongodb
//[....] spread operators
//if else ternary
//self called function
//slice 
//splice
//charCodeAt()
//self = this
//what is sharding
//MultiThreading
//git commands
//arr.pop()

//1)
const str = "dsfhasdkjfhakjshdfahskjhdcadsjfjahsdkjf"
const countAlpha = function (str){
    let leng = str.length
    let counOb = {}
    for(let i = 0; i < leng; i++){
        let getStr = str[i]
        counOb[getStr] ? counOb[getStr] +=1 : counOb[getStr]  = 1
    }
    return counOb

}
console.log(countAlpha(str))

const findMaxString = (str) => {
    let count = countAlpha(str)
    let number  = -Infinity
    let jey = ""
    for(val in count){
        let key = count[val]
        if(number < key) number = key; jey = val
        return `${jey} : ${number}`
    }   
}

//console.log(findMaxString(str))



//2)
let stri = "abcde" // cdeab
let startLength = 2

const mannuplate = (stri, startlength) => {
    let leng = stri.length
    let newString = ""
    for(let i = startlength; i < leng; i++){
        newString += stri[i]
    }

    for(let i = 0; i < startlength ; i++){
        newString+= stri[i]
    }
    return newString
}


//console.log(mannuplate(stri, startLength))
// [a, b, c, d, e]  startlength =2 // outPut cdeab
const DoingSameWithSingleForLoop = (stri, startlength) => {
    let leng = stri.length
    let startleng = startlength
    let newString = ""
    for(let i = startlength; i < leng; i++){
        if(i === leng){
            console.log(i === (leng-1))
            newString += stri[i]
            console.log(leng)
            i = 0
            i <= startleng
            console.log(i)
        }
        newString += stri[i]

    }
    return newString
}

console.log(DoingSameWithSingleForLoop(stri, startLength))

//Solve how much less consicutive numbers are there to meet greater then 51 [1, 4, 45, 6, 0, 19] = [4, 45, 6]
[1, 4, 45, 6, 0, 19]


function appender(array, beginIndex) {
    let toReturn = '';
    for (let i = beginIndex; i < array.length; i++) {
      toReturn = toReturn + array[i];
      if (i == array.length - 1) i = -1;
      if (i == beginIndex - 1) break;
    }
    return toReturn;
  }
  
  console.log(appender(['a', 'b', 'c', 'd', 'e'], 2));


