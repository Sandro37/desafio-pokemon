var main;
var pokemon;
var graus
var chovendo = 'Não está chovendo';

function pegarMain(parametro) {
    main = parametro;
}

function pegarPokemon(parametro) {
    pokemon = parametro
}

function pegarGrausCovertido(params) {
    graus = params;
}
function estaChovendo(paramns){
    chovendo = paramns;
}

function fun() {
    request(document.getElementById("cidade").value);

    if(main != undefined && main != null){
        tempo(main, graus)
        if(pokemon != undefined && pokemon != null){
            document.getElementById('grauCidade').innerHTML = "Graus: "+ graus;
            document.getElementById('estaChovendo').innerHTML = "Chovendo: "+ chovendo;
            document.getElementById('nomePokemon').innerHTML = "Nome do Pokemon: " + pokemon;
        }
    }
}






