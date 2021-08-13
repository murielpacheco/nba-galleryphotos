// fetch ("pagina1.html")
// .then(resposta => {
//     if(resposta.status !== 200) throw new Error("ERROR 777");
//     return resposta.text()
//     .then(html => console.log(html));
// }).catch(e => console.error(e));



document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el){
    const href = el.getAttribute("href");
    const response = await fetch(href);
    
    if(response.status !== 200) throw new Error("ERROR 777");
    
    const html = await response.text();
    carregaResultado(html);
}

function carregaResultado(response) {
    const resultadoKobe = document.querySelector(".resultado-kobe");
    resultadoKobe.innerHTML = response;
}