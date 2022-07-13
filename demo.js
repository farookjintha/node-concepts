let values = [
    {
        name: 'Arun',
        age: '20',
        balance: 1000,
        city: 'Chennai'
    },
    {
        name: 'Arvind',
        age: '10',
        balance: 2000,
        city: 'Trichy'
    },
    {
        name: 'Bala',
        age: '30',
        balance: 4000,
        city: 'Coimbatore'
    },
    {
        name: 'Rajesh',
        age: '40',
        balance: 5000,
        city: 'Madurai'
    }
]

//map, filter, reduce

//forEach -> iterates each element, and doesnt return an array or anything
// map -> iterates each Element, and return an array
//filter -> iterates each element, and return an element only based on the condition.
//reduce -> iterates each element and aggregate the result



let output1 = values.map((value, index) =>{
    let response = {
        student: value.name,
        hometown: value.city
    }
    return response
})

let output2 = values.forEach((value, index) =>{
    let response = {
        student: value.name,
        hometown: value.city
    }
    return response
})

console.log("Output 1: ", output1)
console.log("Output 2: ", output2)


// values.forEach((value, index) =>{
//     console.log(value)
// })

let output3 = values.filter((value) => {
    if(value.name === "Arun"){
        return value.name
    }
}) 
console.log("Output 3: ", output3)

let output4 = values.map((value) => value.name)
console.log("Output 4: ", output4)

let numbers = [1 ,2 ,3 ,4 ,5]
let output5 = numbers.reduce((aggrateValue, currentValue) => aggrateValue + currentValue, 5)

console.log("output 5: ", output5)

let output6 = values.reduce((aggregateValue, currentValue) => aggregateValue  + currentValue.balance, 10000)
console.log("balance: ", output6)


let playersData = [
    {
        player: 'Virat',
        totalRuns: 400,
        matchesPlayed: 10
    },
    {
        player: 'MSD',
        totalRuns: 430,
        matchesPlayed: 10
    },
    {
        player: 'Rohit',
        totalRuns: 410,
        matchesPlayed: 11
    }
]

let playerResponse = playersData.reduce((highest, currentPlayer) => currentPlayer.totalRuns > highest.totalRuns ? currentPlayer : highest)
console.log('highest run getter: ', playerResponse)