// CallBack serve para passar uma função como argumento de outra
// possibilitando que uma só seja executada quando a outra já
// tiver terminado

const usuarios = ['Caue', 'Luana', 'Julia']

let inserirUsuarios = function (nome, callback) {

    setTimeout(() => { usuarios.push(nome), callback() }, 1000 )
    
}

let listarUsuarios = function () {

    console.log(usuarios)

}

inserirUsuarios("Djenane", listarUsuarios)


const idadeUsuario = [24, 23, 19]

let inserirIdade = function (idade, callback) {

    setTimeout(() => { idadeUsuario.push(idade), callback() }, 1000)

}

let listarIdade = function() {

    console.log(idadeUsuario)

}

inserirIdade(37, listarIdade)
