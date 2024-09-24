let num = Math.floor(151 * Math.random()+1)


    fetch("https://pokeapi.co/api/v2/pokemon/" + num)
    .then(res => res.json())
    .then(res => {
        console.log(res);
            console.log(res.name, res.types[0].type.name)
            showPokemon(res.name, res.types[0].type.name, res.cries.legacy)
        })

        let cont = document.querySelector('.cont')
        let audio = document.querySelector('audio')

        function showPokemon(name, type, cry) {
            let colors = {
                normal: '#D6D5B9',
                fire: '#F7BE8E',
                water: '#B1CAF7',
                electric: '#FBE898',
                grass: '#B9E3A0',
                ice: '#CEEEED',
                fighting: '#E08E8A',
                poison: '#CE93CE',
                ground: '#F1D9AE',
                flying: '#D4C8F9',
                psychic: '#FCA7C3',
                bug: '#D1DE86',
                rock: '#DAD093',
                ghost: '#B5A3C9',
                dragon: '#B698FE',
                dark: '#B4A49A',
                steel: '#DEDEE9',
                fairy: '#ECBAD4',
            }
            name = name.charAt(0).toUpperCase() + name.slice(1)

            cont.innerHTML += ` <a href="#" onclick="audio.play();" class = "pokemon" style="background-color: ${colors[type]}">${name}</a>` 

            audio.src = cry
            }
