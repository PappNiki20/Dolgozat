class AutoUrlap{
    lista = {}
   constructor(szuloElem, lista){
     this.lista = lista
     
        this.szuloElem = szuloElem
        this.urlap()
        this.tevElem = this.szuloElem.children("form").children("#rendszam")
        this.hatElem = this.szuloElem.children("form").children("#tipus")
        this.submitElem = this.szuloElem.children("form").children("#sub")
        
       
        this.submitElem.on("click", (event)=>{
           event.preventDefault();
            this.adatGyujt()
            this.#esemenyTrigger("gyujt")
          
        })
    }
    urlap(){
        let txt = "";
        txt += `<form>
        <label for="rendszam">Rendszám: </label>
        <input type="text" id="rendszam" name="rendszam"><br><br>
        <label for="tipus">Típus: </label>
        <input type="text" id="tipus" name="tipus"><br><br>
        <input type="submit" value="Submit" id="sub">
      </form>`;

      this.szuloElem.append(txt);
    }
adatGyujt(){
    this.lista = {rendszam:this.tevElem.val(), tipus: this.hatElem.val()}
   

}
#esemenyTrigger(esemenynev){
    const gyujt = new CustomEvent(esemenynev, {detail: this.lista});
    window.dispatchEvent(gyujt)
}
}
export default AutoUrlap