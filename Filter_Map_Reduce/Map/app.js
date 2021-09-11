const novoAluno = (nome, idade) => {
    return {nome, idade}
}

const turma = [
    novoAluno('Caue', 23),
    novoAluno('Luana', 22),
    novoAluno('Julia', 19)
]

const mapaTurma = (aluno) => `${aluno.nome} tem ${aluno.idade} anos`

// Using Map Remake

const mapa = (callback) => {
    const arr = []
    turma.forEach((element) => {
        arr.push(callback(element))
    });
    return arr
}

turma.mapa = mapa
console.log(turma.mapa(mapaTurma))

// Using Map Function

console.log(turma.map(mapaTurma))




