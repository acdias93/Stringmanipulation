function newString() {
  let str= document.querySelector('textarea[name="string"]').value;
  let strsec="";
  let control=0;
  for (let i=0; i<str.length; i++){
    if (str[i]==="*"){
      if (control===0){
        strsec+="<b>";
        control=1;
      }
      else {
        strsec+="</b>";
        control=0;
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