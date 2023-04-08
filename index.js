function newString() {
  let str= document.querySelector('textarea[name="string"]').value;
  let strsec="";
  let x=null;
  let y=null;
  for (let i=0; i<str.length; i++){
    if (str[i]==="*"){
      if (x===null) {
        x=i+1;
      }
      else {
        y=i;
      }
    }
    else {
      strsec+=str[i];
    }
  } 
  console.log (str.substring (x,y));
  console.log (strsec.substring (0,x-1));
  console.log (strsec.substring (y-1,strsec.length));
  let html="";
      html+=` 
        <div class="magichappens">
          <p>${strsec.substring (0,x-1)}<b>${str.substring (x,y)}</b>${strsec.substring (y-1,strsec.length)}</p>
          <button id="restart" type="button" onclick=window.location.reload()>Outra vez!</button>
        </div>`;
      document.querySelector(".new-text").innerHTML=html;
      return
}

/* Revisão da Aula 17

Ainda me falta perceber como fazer isto dar mais do que 1 vezz

*/