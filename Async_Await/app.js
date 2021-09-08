const ids = [1234, 1324, 1342, 1432]

function inserirId(numero) {

    let promise = new Promise( function(resolve, reject) {
        ids.push(numero)

        let erros = true

        if (erros) {
            resolve({msg: 'Deu tudo errado'})
        } else {
            reject({msg: 'Deu tudo errado'})
        }
    })
    return promise

}

function listarId() {
    console.log(ids)
}

async function executar() {
    await inserirId(1423)
    listarId()
}

executar()
