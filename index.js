class dicionario_simbolos {
  constructor(simb, init, fim){
    this.simb = simb;
    this.init = init;
    this.fim = fim;
    this.control = false;
  }
}

const asterisco = new dicionario_simbolos("*", "<b>", "</b>");
const underscore = new dicionario_simbolos("_", "<i>", "</i>");

const lista_simbolos = [asterisco, underscore];

function newString() {
  let str= document.querySelector('textarea[name="string"]').value;
  let strsec="";
  let replace = false;
  for (let i=0; i<str.length; i++){
    for (const simbolo of lista_simbolos) {
      if (str[i]===simbolo.simb){ 
        if (simbolo.control === false){
          strsec+=simbolo.init;
          simbolo.control = true;
          replace = true;
          break;
        }
        else {
          strsec+=simbolo.fim;
          simbolo.control = false;
          replace = true;
          break;
        }
      } else {
        replace = false;
      }
    }
    if(!replace) {
      strsec += str[i];
    }
  }
  let html="";
  html+=` 
    <div class="magichappens">
      <p>${strsec}</p>
      <button id="restart" type="button" onclick=window.location.reload()>Outra vez!</button>
    </div>`;
  document.querySelector(".new-text").innerHTML=html;
  return
}

/* Revisão da Aula 17*/