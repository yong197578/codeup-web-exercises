const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
//key has value colors
const main_types = Object.keys(colors)
console.log(main_types)
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    //take pokemon.name set first letter to uppercase + slice to get name from 2nd letter
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    //conver id to string and use padStart method 3 spaces pad with 0 - 001 - 002 .....so on
    const id = pokemon.id.toString().padStart(3, '0')
    //look at type array to name value
    const poke_types = pokemon.types.map(type => type.type.name)
    console.log(poke_types)
    //see main_type(obj) find type indexOf and greater than -1
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
   //background will depends on type
    const color = colors[type]
    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()
