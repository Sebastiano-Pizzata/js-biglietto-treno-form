const nameField = document.getElementById("name-field");
const kmField = parseInt(document.getElementById("km-field"));
const ageField = document.getElementById("age-field");
const btn = document.getElementById("bottone");



const nome = document.getElementById("name");
const offer = document.getElementById("offer");
const carrozza = document.getElementById("carrozza");
const code = document.getElementById("code");
const  cost = document.getElementById("cost");


const prezzoViaggioPerChilometri = 0.21
let prezzo = (kmField * prezzoViaggioPerChilometri)
let prezzoCompleto;
let offerta;



if(ageField == "Minorenne" ){
     prezzoCompleto = (prezzo) * 0.80;
     offerta = "Sconto per minori"  
} else if (ageField == "Over 65"){
     prezzoCompleto = (prezzo) * 0.60;
     offerta = "Sconto per Over";

} else{
     prezzoCompleto = prezzo;
     offerta = "Biglietto Standard";  
}



btn.addEventListener("click", function(event){
    event.preventDefault()
     nome.innerHTML = nameField.value;
     offer.innerHTML = offerta.value;
     code.innerHTML = Math.floor((Math.random() * 100000) + 1);
     carrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
     cost.innerHTML = prezzoCompleto.value;
     
})















