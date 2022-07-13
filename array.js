let arr = [1, 2, 4, 5, 6]

arr.map((i) => { //callback
    return i
})

let values = arr.map((i) => i);

let forEachValues = arr.forEach((i) => i);

console.log(values, ": Values")
console.log(forEachValues, ": For Each Values")

let result = arr.reduce((acc, i) => acc + i, 1000)

console.log(result, ": Result")

let divBy2 = arr.filter(i => i%2 == 0)

console.log("Div by 2: ", divBy2)