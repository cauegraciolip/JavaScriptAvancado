const valorMoeda = JSON.parse(localStorage.getItem('valorMoeda')) || []

const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

const btn = document.querySelector("input[name=btn]")

btn.addEventListener('click', () => {
    let input = document.getElementById('text')
    const inputValue = input.value
})

const getValue = () => {

    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        for ( i in data ) {
            valorMoeda.push(localStorage.setItem('valorMoeda', data[i].ask))
        }
    })
}

const converter = (valor, moeda) => {
    return valor * moeda
}



