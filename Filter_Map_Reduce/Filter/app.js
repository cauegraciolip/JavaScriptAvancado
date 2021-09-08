function inserirAlunos(nome, idade) {
    return { nome, idade }
}

const alunos = [
    inserirAlunos('Caue', 24),
    inserirAlunos('Luana', 23),
    inserirAlunos('Cesar', 45),
    inserirAlunos('Lucia', 70)
]

function filtrarAlunosNovos(aluno) {

    return aluno.idade < 30

}

function filtrarAlunosVelhos(aluno) {

    return aluno.idade >= 30

}

console.log(alunos.filter(filtrarAlunosNovos))

console.log(alunos.filter(filtrarAlunosVelhos))