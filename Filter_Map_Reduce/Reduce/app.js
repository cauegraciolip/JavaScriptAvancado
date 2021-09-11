const criarAluno = (nome, idade) => {
    return { nome, idade }
}

const turma = [
    criarAluno('Caue', 24),
    criarAluno('Luana', 23),
    criarAluno('Julia', 19),
    criarAluno('Joao', 45),
    criarAluno('Marcos', 97),
]

const somaIdade = (total, num) => {
    return total += num.idade
}

// Using Reduce Remake

const reduzir = (callback, somador) => {
    let getNumber;
    let sum;

    if (somador == String) {
        sum = ""
    } else {
        sum = 0
    }

    turma.forEach(element => {
        getNumber = callback(somador, element)
        sum += getNumber
    })
    return sum
}

turma.reduz = reduzir
console.log(turma.reduz(somaIdade, 0))

// Using Reduce Function

console.log(turma.reduce(somaIdade, 0))






