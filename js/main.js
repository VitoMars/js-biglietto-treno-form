var btnGenera = document.getElementById("calcolaPrezzo");
console.log(btnGenera);

btnGenera.addEventListener("click", function () {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var fasciaEta = document.getElementById("fascia-eta").value;

  document.getElementById("nomeValue").innerHTML = "ciao";

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
