
function pok(tipo){
    try{
        fetch('https://pokeapi.co/api/v2/type/' + tipo).then(response => response.json()).then((json) =>{
                const data =  json;
                const pokemon = data.pokemon;
                const name = pokemon[Math.floor(Math.random() * pokemon.length )].pokemon.name;
                pegarPokemon(name);
        })
    }catch (e){
        alert(e)
    }
}