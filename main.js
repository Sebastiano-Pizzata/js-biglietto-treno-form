const nameField = document.getElementById("name-field");
const nome = document.getElementById("name");
let biglietto = document.querySelector(".d-none")
const carrozza = document.getElementById("carrozza");
const code = document.getElementById("code");
const  cost = document.getElementById("cost");
const btn = document.getElementById("bottone");




btn.addEventListener("click", function(event){
    event.preventDefault()
    biglietto.classList.remove("d-none")
    const ageField = document.getElementById("eta").value;
    const kmField = parseInt(document.getElementById("km-field").value);
    const prezzoViaggioPerChilometri = 0.21
     let kilometri = parseInt(kmField)
     let prezzo = kilometri * prezzoViaggioPerChilometri
     const scontoMinori = prezzo * 0.8;
     const scontoOver65 = prezzo * 0.6;
     let nomeBiglietto;
     nome.innerHTML = nameField.value;
    
     
      if(ageField === "2" ){
          nomeBiglietto = "Sconto per minori"
          cost.innerHTML = `${scontoMinori.toFixed(2)}`
     } else if (ageField === "3"){
             nomeBiglietto = "Sconto per Over";
              cost.innerHTML = `${scontoOver65.toFixed(2)}`
      }  else{
          nomeBiglietto = "Biglietto Standard";
          cost.innerHTML = `${prezzo.toFixed(2)}`  
      }
     document.getElementById("offer").innerHTML = nomeBiglietto;
     code.innerHTML = Math.floor((Math.random() * 100000) + 1);
     carrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
})















