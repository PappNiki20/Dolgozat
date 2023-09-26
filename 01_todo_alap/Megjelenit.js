class Megjelenit{
#lista
#tarolo
constructor(lista, tarolo) {
    this.#lista = lista
    this.#tarolo = tarolo
    $(tarolo).html(` <table class="table">`)
    this.tablazat = $(tarolo).children("table ")

    this.megjelenites()

}

megjelenites() {
   
    this.#lista.forEach((element, index) => {
     
    });

    
}
}
export default Megjelenit
