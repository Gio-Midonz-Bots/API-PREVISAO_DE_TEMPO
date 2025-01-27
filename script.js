const KEY = "2e65027a41c11e25d8ad70760b163644";


function cliqueiNoBotao(){
    const CIDADE = document.querySelector('.input-city').value;
    buscarCidade(CIDADE);
}

async function buscarCidade(cidade){
    const DADOS = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${KEY}&lang=pt_br&units=metric`).then(response => response.json());    
    console.log(DADOS)
    colocarDadosNaTela(DADOS)
}

function colocarDadosNaTela(DADOS){
    document.querySelector('.city').innerHTML ='Tempo em '+ DADOS.name;
    document.querySelector('.temp').innerHTML = Math.floor(DADOS.main.temp) + 'ºC';
    document.querySelector(".humidity").innerHTML = DADOS.main.humidity + "%";
    //documento.querySelector('.title-forecast').innerHTML = DADOS.weather[0].description;
}