let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/ability/66/';
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
    document.getElementById('baseStateHp').innerHTML = currentPokemon['stats']['0']['stat']['name'];
    document.getElementById('baseStateHpNumber').innerHTML = currentPokemon['stats']['0']['base_stat'];
    document.getElementById('baseStateAttack').innerHTML = currentPokemon['stats']['1']['stat']['name'];
    document.getElementById('baseStateAttackNumber').innerHTML = currentPokemon['stats']['1']['base_stat'];
    document.getElementById('baseStateDefense').innerHTML = currentPokemon['stats']['2']['stat']['name'];
    document.getElementById('baseStateDEfenseNumber').innerHTML = currentPokemon['stats']['2']['base_stat'];
    document.getElementById('baseStateSpAtk').innerHTML = currentPokemon['stats']['3']['stat']['name'];
    document.getElementById('baseStatespAtkNumber').innerHTML = currentPokemon['stats']['3']['base_stat'];
    document.getElementById('baseStateSpDef').innerHTML = currentPokemon['stats']['4']['stat']['name'];
    document.getElementById('baseStateSpDefNumber').innerHTML = currentPokemon['stats']['4']['base_stat'];
}

