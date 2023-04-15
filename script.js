window.onscroll = function () { scrollar() };

function scrollar() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    document.getElementById("voltar-ao-topo").classList.remove("esconder");
    document.getElementById("voltar-ao-topo").classList.add("my-0.1");
  } else {
    document.getElementById("voltar-ao-topo").classList.add("esconder");
    document.getElementById("voltar-ao-topo").classList.remove("my-0.1");

  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
