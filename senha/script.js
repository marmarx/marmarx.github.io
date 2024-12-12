function createPassword(size,max,repeat,lang){
  repeat = max>=size?repeat:1;                                      //set repeat to 1 if the number of digits (size of password) is greater than the number of options (from 1 to max)
  const fact = (num) => (num===0||num==1)?1:num*fact(num-1);        //factorial formula
  const possibilities = repeat?max**size:fact(max)/fact(max-size);  //arrangement with repetition : simple arrangment

  const random = (num) => Math.floor((Math.random()*num));        //random number from 0 to num-1
  const remove = (pos,arr) => arr.splice(pos,1);                  //remove an used number at position i from array (useful when repeat = 0)
  const password = (function(){                                   //annonymous function
    let ini = 1;
    let digits = [...Array(max)].map(e=>ini++);
    //console.log('starting available digits:',digits);

    const pass = [...Array(size)].map(e=>{
      let i = random(digits.length);
      let num = digits[i];
      if(!repeat){remove(i,digits)}
      //console.log('added digit',num,'- remaining available digits',digits);
      return num;
    });
    return pass;
  })();                                                           //run the function once immediately after declaration
  console.log(`Created a password with ${size} digits from 1 to ${max}, there are a total of ${possibilities} possibilit${possibilities>1?'ies':'y'}`);
  console.log('password:',password);

  //createInput
  (function(){
    let container = document.getElementById('pass');
    container.innerHTML = '';
    let content = '<option value="" disabled selected></option>';
    for(let i=0;i<max;i++){content += `<option value="${i+1}">${i+1}</option>`}
    for(let i=0;i<size;i++){container.innerHTML += `<select class="pass" onchange="select(this.value,${i})">${content}</select>`}
  })();

  const checkPassword = (password,attempt) => {
    let correctPosition = 0,correctNumber = 0,result=[];
    let pass = structuredClone(password);
    pass.forEach((e,i)=>{if(attempt[i]===e){
      correctPosition++;
      result.push('black');
      pass[i]=0;
      attempt[i]=-1;
    }});
    pass.forEach((e,i)=>{if(attempt.includes(e)){
      correctNumber++;
      result.push('gray');
      pass[i]=0;
      attempt[attempt.indexOf(e)]=-1;
    }});
    return [correctPosition,correctNumber,result]
  }

  const results = document.getElementById('results');
  function printResults(attempt,result){
    while(result.length<size){result.push('')}
    let content = `<div class="flex-item"><div class="flex-center">${attempt.join(' ')}`;
    for(let i=0;i<size;i++){content+=`<div class="circle ${result[i]}"></div>`}
    results.innerHTML+=content+'</div>';
  }

  let hasBeenDiscovered=0,tries=0;  
  const showResults = (attempt) => {
    tries++;

    const languag = {
      eng:{        
        done:`You've already discovered it!`,
        congrats:`Congratulations! You discovered the password in ${tries} tr${tries>1?'ies':'y'}, it was ${password.join(', ')}`
      },
      por:{
        done:`Você já descobriu a senha!`,
        congrats:`Parabéns! Você descobriu a senha em ${tries} tentativa${tries>1?'s':''}, era ${password.join(', ')}`
      },
      esp:{
        done:`Ya descubriste la seña!`,
        congrats:`¡Felicidades! Descubriste la seña en ${tries} intento${tries>1?'s':''}, era ${password.join(', ')}`
      }
    }
    if(hasBeenDiscovered){hasBeenDiscovered++;return languag[lang].done}
    if(attempt.toString()===password.toString()){hasBeenDiscovered++;return languag[lang].congrats}

    [correctPosition,correctNumber,result] = checkPassword(password,structuredClone(attempt));
    printResults(attempt,result);
    const language = {
      eng:[
        [
          ['Arg','It\'s something','Nice try','Nicely done','Great'],
          ['Nice try','Nice try','Nicely done','Great',],
          ['Nicely done','Great','Amazing',,],
          ['Great','Amazing',,,]
        ][Math.round(correctPosition*4,0)/size][Math.round(correctNumber*4/size)]+'!',
        ' You got ',
        `${correctPosition?`${correctPosition} correct number${correctPosition>1?'s':''} in the correct position`:''}`,
        `${correctPosition&&correctNumber?' and ':''}`,
        `${correctNumber?`${correctNumber} correct number${correctNumber>1?'s':''} in the wrong position`:''}`,
        `${correctPosition===0&&correctNumber===0?'nothing correct this time, sorry':''}`,
        '. '+['Go again','Try again','One more time','Your turn','Good luck'][random(5)]+'!'
      ],
      por:[
        [
          ['Aaaaa...','Um ponto inicial','Boa tentativa','Muito bem','Ótimo'],
          ['Boa tentativa','Boa tentativa','Muito bem','Ótimo',],
          ['Muito bem','Ótimo','Incrível',,],
          ['Ótimo','Incrível',,,]
        ][Math.round(correctPosition*4,0)/size][Math.round(correctNumber*4/size)]+'!',
        ' Você conseguiu ',
        `${correctPosition?`${correctPosition} número${correctPosition>1?'s':''} certo${correctPosition>1?'s':''} na posição correta`:''}`,
        `${correctPosition&&correctNumber?' e ':''}`,
        `${correctNumber?`${correctNumber} número${correctNumber>1?'s':''} certo${correctNumber>1?'s':''} na posição incorreta`:''}`,
        `${correctPosition===0&&correctNumber===0?'nenhum número dessa vez, que pena':''}`,
        '. '+['Vá de novo','Tente de novo','Mais uma vez','Sua vez','Boa sorte'][random(5)]+'!'
      ],
      esp:[
        '¡'+[
          ['Ach...','Un punto de partida','Buen intento','Muy bien','Genial'],
          ['Buen intento','Buen intento','Muy bien','Genial',],
          ['Muy bien','Genial','Increíble',,],
          ['Genial', 'Increíble',,,]
        ][Math.round(correctPosition*4,0)/size][Math.round(correctNumber*4/size)]+'!',
        ' Lo hiciste ',
        `${correctPosition?`${correctPosition} número${correctPosition>1?'s':''} correcto${correctPosition>1?'s':''} en la posición correcta`:''}`,
        `${correctPosition&&correctNumber?' e ':''}`,
        `${correctNumber?`${correctNumber} número${correctNumber>1?'s':''} correcto${correctNumber>1?'s':''} en posición incorrecta`:''}`,
        `${correctPosition===0&&correctNumber===0?'ninguno esta vez, que pena':''}`,
        '. '+['Vuelve de nuevo','Inténtalo de nuevo','Una vez más','Tu turno','Buena suerte'][random(5)]+'!'
      ]
    }
    console.log(language);
    return language[lang].join('');
  }
  return (attempt) => {document.getElementById('message').innerHTML = showResults(attempt)}
}

function start(){
  let config = localStorage.getItem('passwordGameRecord')?JSON.parse(localStorage.getItem('passwordGameRecord')):[4,5,1,'por'];

  const language = {
    eng:{title:`What's the password?`,subtitle:'- Can you guess it? -',message:'Give it a try!',help:'Your tries:'},
    por:{title:'Qual é a senha?',subtitle:'- Consegue adivinhar? -',message:'Faça uma tentativa!',help:'Suas tentativas'},
    esp:{title:'¿Cuál es la seña?',subtitle:'¿Puedes adivinarlo?',message:'¡Haz tu intento!',help:'Tus intentos'}
  }

  const lang = ['title','subtitle','message','help'];
  lang.forEach(e=>document.getElementById(e).innerHTML = language[config[3]][e]);

  const language2 = {
    eng:['Password size','Max number','Repeat?','Language'],
    por:['Tamanho senha','Número max','Repetir?','Idioma'],
    esp:['Longitud seña','Número max','¿Repetir?','Idioma']
  }

  const lang2 = document.getElementById('footer').getElementsByTagName('span');
  console.log(lang2)
  for(let i in lang2){lang2[i].innerHTML = language2[config[3]][i]}

  const sets = document.getElementById('footer').getElementsByTagName('select');
  for(let i in sets){sets[i].value=config[i]}

  let attempt = [...Array(config[0])].map(e=>0);
  function settings(value,index){
    config[index]=isNaN(value)?value:JSON.parse(value);
    localStorage.setItem('passwordGameRecord',JSON.stringify(config));
    location.reload();
  }
  const verifyPassword = createPassword(...config);

  const selects = document.getElementById('pass').getElementsByTagName('select');
  function select(value,index){
    attempt[index]=JSON.parse(value);
    if(!attempt.includes(0)){
      verifyPassword(attempt);
      attempt=[...Array(config[0])].map(e=>0);
      for(let i in selects){selects[i].value=0}
    }
  }
  return [select,settings]
}
const [select,config] = start();
