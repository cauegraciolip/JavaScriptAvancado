// app para tirar nomes de alunos 
// que nao pagaram a matricula

const alunosOk = JSON.parse(localStorage.getItem('alunos')) || []

const naoAlunos = JSON.parse(localStorage.getItem('naoAlunos')) || []

const inserirNomes = () => {

    let texto = document.querySelector('#nomes').value

    let matriculas = {
        nome: texto,
        id: Math.random() * 100,
        validade: true,
    }

    alunosOk.push(matriculas)
    localStorage.setItem('alunos', JSON.stringify(alunosOk))
    location.reload()
}

const selectAlunosValidos = (aluno) => {

    return aluno.validade == true

}

const selectAlunosNaoValidos = (aluno) => {

    return aluno.validade == false

}

const listaAlunosNaoMatriculados = () => {

    let nomes = alunosOk.filter(selectAlunos)

    for ( let i = 0; i < nomes.length; i++) {
        if ( nomes[i].validade == true ) {
            naoAlunos.push(nomes[i])
            console.log(naoAlunos)
        } else {
            alunosOk.push(nomes)
        }
    }
}

listaAlunosNaoMatriculados()










