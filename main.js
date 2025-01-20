const prezzoViaggioPerChilometri = 0.21
let bigliettoMinorenni = 0.80;
let bigliettoOver = 0.60;
let prezzo;

let nameField = document.getElementById("name-field");
let kmField = document.getElementById("km-field");
let ageField = document.getElementById("age-field");
const btn = document.getElementById("bottone");



const nome = document.getElementById("name");
const offer = document.getElementById("offer");
const carrozza = document.getElementById("carrozza");
const code = document.getElementById("code");
const  cost = document.getElementById("cost");


if(ageField === "minorenne" ){
     prezzo = ( prezzoViaggioPerChilometri * kmField ) * bigliettoMinorenni;  
} else if (ageField === "olre la maggiore età" ){
     prezzo = ( prezzoViaggioPerChilometri * kmField) * bigliettoOver ;

} else{
     prezzo = (prezzoViaggioPerChilometri * kmField );
    
}

console.log( `il prezzo del biglietto è: ${prezzo.toFixed(2)}` )

btn.addEventListener("click", function(){
     nome.innerHTML = nameField.value
     code.innerHTML = Math.floor((Math.random() * 100000) + 1);
     carrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
     cost.innerHTML = prezzo.value;
})















