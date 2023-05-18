import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { dndApi } from "./AxiosService.js";

class PokemonService {
    async getPokemon() {
        const res = await dndApi.get('api/v2/pokemon')
        // console.log('res is done', res.data.results)
        AppState.pokedex = res.data.results
        console.log('pokes in the appState', AppState.pokedex);
    }
    async setActivePokemon(url) {
        const res = await dndApi.get(url)
        //console.log('setting Active the pokemon', res)

        AppState.ActivePokemon = new Pokemon(res.data)
    }

}
export const pokemonService = new PokemonService()
