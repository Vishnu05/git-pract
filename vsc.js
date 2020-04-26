

let obj = {
    git: 'version control system',
    hoisting: 'cloud or server',
    type: 'self managed'
}

for (let a in obj) {
    console.log(a)
}

function name(name) {
    return 'Hello! ' + name
}

console.log(name(name))

// let a = 'chrome dev tool'
// let a = 'syntax error'

function name(value) {
    /** call back function as per my understandin */
    return hello(value)
}

function hello(value) {

    return 'hello ' + value
}

console.log(name('world'))

//hoisting
today = 'Sunday'

var today
console.log(today)

let objj = [1, 2, 3, 4, {
    name: "string",
    id: 3
}, 6]

console.log(objj)



