const resultEl = document.getElementById('result');

const UNInum =[48,57];
const UNIupper = [65,90];
const UNIlower = [97,122];
const UNIsym = [33,47];




document.getElementById("generate").addEventListener('click', ()=> {
    const length = document.getElementById("length").value;
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    
    const randSelector = [];
    const password = [];
    //String.fromCharCode();
    if(upper===true){
      for(let i=UNIupper[0]; i<= UNIupper[1]; i++){
        randSelector.push(i);
      }
    }
    if(numbers===true){
      for(let i=UNInum[0]; i<= UNInum[1]; i++){
        randSelector.push(i);
      }
    }
    if(symbols===true){
      for(let i=UNIsym[0]; i<= UNIsym[1]; i++){
        randSelector.push(i);
      }
    }
    if(lower===true){
      for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
        randSelector.push(i);
      }
    }

    for(let i = 0; i < length; i++){
        password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
    }

    console.log(password);
    resultEl.textContent = password.join("");
})   