

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

let a = 'chrome dev tool'
let a = 'syntax error'