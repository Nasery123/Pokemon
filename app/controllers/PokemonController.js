import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
    console.log('drawing pokemon');

    let template = ''
    AppState.pokedex.forEach(p => {
        template += `
    <div>
       <p class="fs-4 selectable" role="button" onclick="app.PokemonController.setActivePokemon('${p.url}')">${p.name}</p>
    </div>
      `
    })

    setHTML('pokemonTemplate', template)
}

function _drawActivePokeman() {
    //let pokemon = AppState.ActivePokemon

    //console.log('it is the active pokemon', AppState.ActivePokemon)

    setHTML('activepokemon', AppState.ActivePokemon.ActivePokemonTemplate)
    console.log('After setting the template')
}


export class PokemonController {
    constructor() {

        console.log('pokemon controller is connected')
        this.getPokemonFromApi()
        AppState.on('pokedex', _drawPokemon)
        _drawPokemon()
        AppState.on('ActivePokemon', _drawActivePokeman)
    }
    async getPokemonFromApi() {
        try {
            await pokemonService.getPokemon()


        } catch (error) {
            Pop.error(error)

        }
    }



    async setActivePokemon(url) {
        try {
            console.log('did it click?', url)
            await pokemonService.setActivePokemon(url)
            console.log('drawing active pokemon', AppState.ActivePokemon)

        } catch (error) {
            Pop.error(error)

        }
    }
}
