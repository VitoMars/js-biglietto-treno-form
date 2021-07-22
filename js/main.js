var btnGenera = document.getElementById("calcolaPrezzo");
console.log(btnGenera);

btnGenera.addEventListener("click", function () {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var fasciaEta = document.getElementById("fascia-eta").value;
  var prezzoBiglietto = km * 0.21;
  var prezzoFinale;

  if (fasciaEta == "minorenne") {
    prezzoFinale = prezzoBiglietto - prezzoBiglietto * (20 / 100); //Sconto del 20%
  } else if (fasciaEta == "over65") {
    prezzoFinale = prezzoBiglietto - prezzoBiglietto * (40 / 100); //Sconto del 40%
  } else {
    prezzoFinale = prezzoBiglietto; //Nessuno sconto
  }

  document.getElementById("nomeValue").innerHTML = nome;
  document.getElementById("offerta").innerHTML = "Sconto " + fasciaEta;
  document.getElementById("carrozza").innerHTML = Math.round(
    Math.random() * 100
  );
  document.getElementById("codiceCP").innerHTML = Math.round(
    Math.random() * 99999
  );
  document.getElementById("prezzoBiglietto").innerHTML =
    prezzoFinale.toFixed(2) + "€";

  var biglietto = document.getElementById("biglietto");
  biglietto.style.display = "block";
});

var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click", function () {
  var biglietto = document.getElementById("biglietto");
  biglietto.style.display = "none";

  // Svuoto gli input
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "";
});
