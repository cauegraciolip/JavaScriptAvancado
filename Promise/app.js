const usuarios = ['Lucas', 'Fernanda', 'Neusa']

function inserir(nome) {

    let promise = new Promise( function(resolve, reject) {

        usuarios.push(nome)

        let error = false

        if (!error) {
            resolve()
        } else {
            reject({msg: 'Mensagem de erro'})
        }

    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

inserir('Jorge')
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error.msg)
    })


