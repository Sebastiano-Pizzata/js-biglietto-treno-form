let nameField = document.getElementById("name-field");
let kmField = document.getElementById("km-field");
let ageField = document.getElementById("age-field");
const btn = document.getElementById("bottone");



const nome = document.getElementById("name");
const offer = document.getElementById("offer");
const carrozza = document.getElementById("carrozza");
const code = document.getElementById("code");
const  cost = document.getElementById("cost");


const prezzoViaggioPerChilometri = 0.21
let discount;
let offerta;
let prezzo = (kmField * prezzoViaggioPerChilometri)

if(ageField === "2" ){
     discount = 0.20;
     offerta = "Sconto per minori"  
} else if (ageField === "3"){
     discount = 0.40;
     offerta = "Sconto per Over";

} else{
     discount = 0;
     offerta = "Biglietto Standard";
    
}


let prezzoCompleto = prezzo - (prezzo * discount);

console.log( `il prezzo del biglietto è: ${prezzoCompleto.toFixed(2)}`, offerta )

btn.addEventListener("click", function(event){
    event.preventDefault()
     nome.innerHTML = nameField.value;
     offer.innerHTML = offerta.value;
     code.innerHTML = Math.floor((Math.random() * 100000) + 1);
     carrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
     cost.innerHTML = prezzoCompleto.value;
})















