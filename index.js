function newString() {
  let str= document.querySelector('textarea[name="string"]').value;
  let strsec="";
  let controlb=0;
  let controli=0;
  for (let i=0; i<str.length; i++){
    if (str[i]==="*"){ /*vamos meter isto só num if!*/
      if (controlb===0){
        strsec+="<b>";
        controlb=1;
      }
      else {
        strsec+="</b>";
        controlb=0;
      }
    }
    else if (str[i]==="_"){
      if (controli===0){
        strsec+="<i>";
        controli=1;
      }
      else {
        strsec+="</i>";
        controli=0;
      }
    }
    else {
      strsec+=str[i];
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