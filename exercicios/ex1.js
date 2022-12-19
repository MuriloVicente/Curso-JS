function Texto(nome) {
    return `Olá, ${nome}!`
}

console.log(Texto('Murilo'))

function cumprimentar(nome) {
    const saudação = 'Olá'
    return [saudação, nome].join(', ').concat('!')
}

console.log(cumprimentar('Murilo'))