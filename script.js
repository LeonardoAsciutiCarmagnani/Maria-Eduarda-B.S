window.onscroll = function() {scrollar()};

function scrollar() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    document.getElementById("voltar-ao-topo").classList.remove("esconder");
  } else {
    document.getElementById("voltar-ao-topo").classList.add("esconder");
  }
}

function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   }
   