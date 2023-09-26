import AutoUrlap from "./AutoUrlap.js"

$(function () {

    let tarolo = $(".ujadat")
    new AutoUrlap(tarolo, {rendszam: "", leiras: ""})
    const list=[]

    $(window).on("gyujt", (event) =>{
        //console.log(event.detail)
        
       
       
        list.push(event.detail)
        console.log(list)
       
    })
})
