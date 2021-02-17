let array = [1, 2, 3, 4, 5, 6, 6, 7, 7, 87, 8 , 5, 6,]
//return distinct even numbers
const newarry = array.map((ele) => {
    return ele * ele
})

//console.log(newarry)

const multiplyArry = array.map(ele => {
  return ele % 2 === 0 ? ele * 2 : ele
})
console.log(multiplyArry)


let name = ["amit@", "man!gor", "O$range"]

const DoSomethingWithArrayEle = name.map(ele => {
    return ele.replace(/[^a-zA-Z0-9]/g, "")
})

console.log(DoSomethingWithArrayEle)