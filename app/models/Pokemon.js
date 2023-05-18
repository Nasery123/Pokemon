
export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.hight = data.hight
        this.type = data.type
        this.url = data.url
    }





    get ActivePokemonTemplate() {
        return `
        <div class=" row">
        <div class="col-4">Seaking</div>
        <div>
          <p>Height:${this.hight} </p>
          <p>weight: ${this.weight}</p>
          <p>type: ${this.type}</p>
          <button class="btn btn-white">CATCH</button>

        </div>
      </div>
      <div class="col-4">


      </div>
      <button class="btn btn-primary">PREVIOUS</button>
      <button class="btn btn-primary">NEXT</button>
      </div>
      </div>

      </div>
        `
    }










}
