function createPokecard(nameCap, pokemon, i) {
    return /*HTML*/ `
    <div id="pokemon${i}" class="smallCard" onclick="openPokecard(${i})">
        <div class="cardHead">
            <h3>${nameCap}</h3>
            <div class="id">${i}</div>
        </div>
        <div class="pokemonImage">
        <img class="pokeImg" src='${pokemon['sprites']['other']['home']['front_default']}'>
        </div>
        <div id="typeContainer${i}" class="typeContainer"></div>
    </div>
    `;
}

function createShowCard(pokemon, nameCap, i) {
    return /*HTML*/  `
    <div class="pokemonBig" id="pokemonBig${i}">
        <div class="cardHeadBig">
            <h1>${nameCap}</h1>
            <div class="idBig">${currentPokemon}</div>
        </div>
        <div class="pokemonImageBig">
            <img class="pokemonImagebig" style='z-index=10' src='${pokemon['sprites']['other']['home']['front_default']}'>
        </div>
        <div id="typeContainerBig${currentPokemon}" class="typeContainer"></div>
    </div>
    <canvas id="myChart"></canvas>
    `;
}
