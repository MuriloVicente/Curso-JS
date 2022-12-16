Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const soma = (soma, atual) => soma + atual
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))