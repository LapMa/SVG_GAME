function start() {
  var perc = document.getElementById("perc");
  var masodperc = document.getElementById("masodperc");
  perc.innerHTML = 0;
  masodperc.innerHTML = 59;

  function visszaszamlal() {
    masodperc.innerHTML--;

    if (masodperc.innerHTML == 0) {
      clearInterval(id);
      alert("Az idő lejárt!");
    }
  }

  let id = setInterval(visszaszamlal, 1000);
}
