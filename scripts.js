

const key =  '1e4c0767ca3a6131239c4dc163361aae'

function colocarNomeTela(dados) {
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temperature-max').innerHTML = 'Max '+ Math.floor( dados.main.temp_max) + '°C'
    document.querySelector('.temperature-min').innerHTML = 'Min '+ Math.floor(dados.main.temp_min) + '°C'
    document.querySelector('.previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML='Umidade:' + dados.main.humidity + '%'
    document.querySelector('.img-previsao').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())

    colocarNomeTela(dados)
}

function clickButton() {

    const cidade = document.querySelector(".input-cidade").value


    buscarCidade(cidade)
}


