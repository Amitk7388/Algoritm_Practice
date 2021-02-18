let number = [1, 2, 4, 3, 4, 5, 6, 7, 8, 8, 8, 8,]
const unque = number.filter((ele, index, self) => {
    return self.indexOf(ele) === index && ele %2 === 0
})

//console.log(unque)


var heroes = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

let MArverl = heroes.filter(ele => {
    return ele.franchise == "Marvel"
})


//console.log(MArverl)


let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']


const findData = function(fruits, str){
  const QueryOnArry = fruits.filter((ele, index, self) => {
                    console.log(ele.indexOf(str), index)
          return  ele.toLowerCase().indexOf(str.toLowerCase()) === index
    })
    return QueryOnArry
}


//console.log(findData(fruits, "go"))


let name = ["amit@", "man!gor", "O$range"]

const FindDaya = name.filter(ele => {
   const element = ele.replace(/[^a-zA-Z0-9]/g, "")
    return element
})

//console.log(FindDaya)


const string = "My Name is Amit Kumar    Sahu" //reverse this string and 
const reverIt = (str) => {
    console.log(str.split(" "))
   return str.split(" ").filter(ele => ele !== "").reverse().join(" ")
}

//console.log(reverIt(string))

//find the closest number from an sorted array of a given number 
const findClosestOne = (arr, num) => {
    let numbr = 0
    console.log(num)
    arr.filter((ele, index, number)  => {
        if(ele < num) numbr = ele
    })
    return numbr
}

//console.log(findClosestOne([1, 2, 3, 5, 6, 9,89, 56], 10))