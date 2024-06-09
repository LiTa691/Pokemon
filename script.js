let currentPokemon;
let pokemonAmount = 22;
let stats = [];
let data = [];
let pokemonClickedOn = '';

async function loadPokemon() {
    for (let i = 1; i <= pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let pokemon = await response.json();
        data.push(pokemon);
        renderPokemonInfo(i, pokemon);
    };
    loaderOff();
}


function loaderOff() {
    document.getElementById('loadPoke').classList.add('d-none');
}

function loaderOn() {
    document.getElementById('loadPoke').classList.remove('d-none');
}


function showCard(pokemon, nameCap) {
    let pokemonBig = document.getElementById('pokemonbig');
    let showCardHTML = createShowCard(pokemon, nameCap);
    pokemonBig.innerHTML = showCardHTML;
}

async function loadMorePokemon() {
    loaderOn();
    let offsetnumber = pokemonAmount + 20;

    for (let i = pokemonAmount; i < offsetnumber; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let pokemon = await response.json();
        data.push(pokemon);
        renderPokemonInfo(i, pokemon);
    }
    loaderOff();
    pokemonAmount = offsetnumber;
}

async function renderPokemonInfo(i, pokemon) {
    let name = pokemon['name'];
    let nameCap = name.charAt(0).toUpperCase() + name.slice(1);
    let pokedex = document.getElementById('pokedex');
    let pokecardHTML = createPokecard(nameCap, pokemon, i);
    pokedex.innerHTML += pokecardHTML;
    checkTypes(i, pokemon);
}

function checkTypes(i, pokemon) {
    let type0 = pokemon['types'][0];
    let type1 = pokemon['types'][1];

    if (type0) {
        document.getElementById(`typeContainer${i}`).innerHTML += `
        <span class="type">${type0['type']['name']}</span>`;
        changeBgColor(i, pokemon);
    } if (type1) {
        document.getElementById(`typeContainer${i}`).innerHTML += `
        <span class="type">${type1['type']['name']}</span>`;
    }
}

function changeBgColor(i, pokemon) {
    let type = pokemon['types'][0]['type']['name'];
    let pokemonCard = document.getElementById(`pokemon${i}`);
    let className = typeToClass(type);

    if (className) {
        pokemonCard.classList.add(className)
    }
}

function checkTypesBig(pokemon) {
    let type0 = pokemon['types'][0];
    let type1 = pokemon['types'][1];

    if (type0) {
        document.getElementById(`typeContainerBig${currentPokemon}`).innerHTML += `
        <span class="typeBig">${type0['type']['name']}</span>`;
        changeBgColorBig(pokemon);
    }
    if (type1) {
        document.getElementById(`typeContainerBig${currentPokemon}`).innerHTML += `
        <span class="typeBig">${type1['type']['name']}</span>`;
    }
}

function changeBgColorBig(pokemon, i) {
    let type = pokemon['types'][0]['type']['name'];
    let pokemonCard = document.getElementById(`pokemonBig${i}`);
    let className = typeToClass(type);

    if (className) {
        pokemonCard.classList.add(className)
    }
}

function typeToClass(type) {
    const typeToClassMap = {
        'grass': 'bg-grass',
        'fire': 'bg-fire',
        'water': 'bg-water',
        'bug': 'bg-bug',
        'normal': 'bg-normal',
        'poison': 'bg-poison',
        'electric': 'bg-electric',
        'ground': 'bg-ground',
        'fairy': 'bg-fairy',
        'psychic': 'bg-psychic',
        'fighting': 'bg-fighting',
        'rock': 'bg-rock',
        'ghost': 'bg-ghost',
        'dark': 'bg-dark',
        'ice': 'bg-ice',
        'dragon': 'bg-dragon',
        'steel': 'bg-steel',
    };
    return typeToClassMap[type];
}

function search() {
    let search = document.getElementById('searchInput').value.toLowerCase();
    let pokemons = document.querySelectorAll('.smallCard');

    if (search.length >= 3) {
        showPokemonSearch(search, pokemons);
    } else {
        for (let i = 0; i < pokemons.length; i++) {
            pokemons[i].style.display = 'block';
        }
    }
}

function showPokemonSearch(search, pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let name = pokemon.querySelector('h3').textContent.toLowerCase();
        if (name.includes(search)) {
            pokemon.style.display = 'block';
        } else {
            pokemon.style.display = 'none';
        }
    }
}

function openPokecard(i) {
    let pokemon = data[i - 1];
    let name = pokemon['name'];
    let nameCap = name.charAt(0).toUpperCase() + name.slice(1)

    stats = [];
    let numbers = pokemon['stats'];
    for (let j = 0; j < numbers.length; j++) {
        let currentStats = numbers[j]['base_stat'];
        stats.push(currentStats);
    }

    let pokemonBig = document.getElementById('pokemonbig');
    pokemonBig.classList = 'cardbig';
    pokemonBig.innerHTML = '';
    document.body.style.overflow = "hidden";
    document.getElementById('overlay').classList.remove('d-none');

    currentPokemon = i;
    showCard(pokemon, nameCap);
    checkTypesBig(pokemon);
    renderChart();
}

function hideNavButton() {
    let btnContainer = document.getElementById('btnContainer');
    let btnBack = document.getElementById('btn-back');

    if (currentPokemon == 1) {
        btnContainer.classList.remove('d-none');
        btnBack.classList.add('d-none');
    } else {
        btnContainer.classList.add('d-none');
        btnBack.classList.remove('d-none');
    }
}

function closeCard() {
    let overlay = document.getElementById('overlay');
    let close = document.getElementById('btn-close');
    if (event.target === overlay || event.target === close) {
        overlay.classList.add('d-none');
    }
    document.body.style.overflow == "auto";
    stats = [];
}

function previousCard() {
    currentPokemon--;
    if (currentPokemon < 1) {
        currentPokemon = 1;
    }
    document.getElementById('cardbig').classList = 'cardbig';
    openPokecard(currentPokemon);
}

function nextCard() {
    currentPokemon++;
    document.getElementById('pokemonbig').classList = 'cardbig'

    if (currentPokemon > data.length - 1) {
        loadMorePokemon();
    }
    openPokecard(currentPokemon);
}


