let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loadet Pokémon', currentPokemon);

    renderPokemonInfo()
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonNumber').innerHTML = currentPokemon['id'];
    document.getElementById('pokemonType').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['home']['front_default'];
}