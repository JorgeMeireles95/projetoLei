const inputPesquisa = document.querySelector("#inputPesquisa");
const destino = document.querySelector("#destino");
const btnPesquisa = document.querySelector("#btn-pesquisa");

const pesquisa = document.querySelector("#pesquisa")
btnPesquisa.addEventListener("click", () => {
   pesquisa.childNodes.forEach(el => {
      if (el.nodeType === 1 && !inputPesquisa.value.length) {
         el.style.display = '';
      } else {
         if (el.nodeType === 1 && el.getAttribute("id") == inputPesquisa.value) {
            el.style.display = '';
         } else if (el.nodeType === 1) {
            el.style.display = 'none';
         }
      }
   });
});


