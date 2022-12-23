console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function LogThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

LogThis()