const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 09]
//add all the number
const addAll = number.reduce((acc, cv) => {
    //
    return acc + cv
},  )
console.log(addAll)


let array = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

const newArry = array.reduce((acc, cv) => {
    console.log(acc)
    if(acc.indexOf(cv) === -1){
        acc.push(cv)
    }
    return acc
}, [])

console.log(newArry)