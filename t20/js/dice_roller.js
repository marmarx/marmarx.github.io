const keyels = ['d','!','rra','rrb','eh','el','kh','kl'];
const keyssp = /[+\-]*\d+|[+\-]|#|d|!|kh|kl|eh|el|rra|rrb/g;

function fix_str(str){
 let str2 = [];
 str = str.replaceAll(' ','').replaceAll('+','_+_').replaceAll('-','_-_').split('_');
 for(let i in str){
  if(str[i]=='+'||str[i]=='-'){str2[i] = {sign:str[i][0]}}
  else{
   str[i] = str[i].match(keyssp) || [];						//split string into array
   if(isNaN(str[i][0])){str[i].unshift(1)}					//add 1 if string starts with 'd'
   str2[i] = {num:JSON.parse(str[i][0])};					//start building associative object with array contents, position becomes unimportant
   for(let j=1;j<str[i].length;j+=2){
    if(isNaN(str[i][j])&&isNaN(str[i][j+1])){
     if(str[i][j]=='!'||str[i][j]=='rra'){str[i].splice(j+1,0,str[i][2])}	//verifies if ! and rra have defined values, otherwise make max
     else{str[i].splice(j+1,0,1)}						//verifies if rrb, kh, kl, eh, and el have defined values, otherwise make 1
    }
    str2[i][str[i][j]] = JSON.parse(str[i][j+1]);				//finishes building associative object
   }
  }
 }
 return [str2,str.join('').replaceAll(',','').replaceAll('+',' + ').replaceAll('-',' - ')]
}

function roll_dice(num,max,exp=max+1,rra=max+1,rrb=-1){
 rrb = (rrb<exp-1)?rrb:exp-2;
 let roll = [];
 let rolled = '';
 for(k=0;k<num;k++){
  rolled = Math.floor(Math.random()*max)+1;
  roll.push(rolled);
  while(rolled>=exp||rolled>=rra||rolled<=rrb){
   rolled = Math.floor(Math.random()*max)+1;
   roll.push(rolled);
  }
 }
 return roll;
}

var soma,roll;
function diceroll(str,crit=0,drucken=1){
 let repeat = 1;
 if(str.includes("#")){
  repeat = str.slice(0,str.indexOf('#'));
  str = str.slice(str.indexOf('#')+1);
 }

 [subarrays,str] = fix_str(str);

 let total_sum = 0;
 for(var reroll=0;reroll<repeat;reroll++){
  soma = 0;
  roll=[];
  let dices='', sum=[], alg='+', print=' ⟵',ctp = 0;
  for(i=0;i<subarrays.length;i++){
   if(subarrays[i].d){
    roll[i] = roll_dice(subarrays[i].num,subarrays[i].d,subarrays[i]['!'],subarrays[i].rra,subarrays[i].rrb);	//rolling dices

    dices = subarrays[i].num;
    for(let j in keyels){if(subarrays[i][keyels[j]]){dices+=keyels[j]+subarrays[i][keyels[j]]}};	//joining str for printout

    if(!crit){crit = subarrays[i]['!']?subarrays[i]['!']:subarrays[i].d}	//determining crit (max or !)
    roll[i] = roll[i].sort(function(a,b){return b-a});  //sorting rolls

    let start=0,end=roll[i].length;		//determining with dice removals start and end points
    if(subarrays[i].rra){roll[i].forEach(function(el){if(el>=subarrays[i].rra){start++}})}
    else if(subarrays[i].rrb){roll[i].forEach(function(el){if(el<=subarrays[i].rrb){end--}})}

    if(subarrays[i].eh){start+=subarrays[i].eh}		//changing start and end based on eh, el, kh, kl
    else if(subarrays[i].el){end-=subarrays[i].el}
    else if(subarrays[i].kh){end=start+subarrays[i].kh}
    else if(subarrays[i].kl){start=end-subarrays[i].kl}

    for(j=start;j<end;j++){	//summing roll values
     if(alg=='+'){sum.push(roll[i][j])}
     if(alg=='-'){sum.push(-roll[i][j])}
    }

    for(j=0;j<roll[i].length;j++){	//marking dice rolls crits and removals
     let classe = '';
     print += j?', ':' [';
     if(j<start||j>end-1){classe+=' strike'}
     if(roll[i][j]==1){classe+=' bold rot';if(!classe.includes('strike')){ctp=-1}}
     if(roll[i][j]>=crit){classe+=' bold grun';if(!classe.includes('strike')){ctp=1}}
     print += '<span class="'+classe+'">'+roll[i][j]+'</span>';
    }
    print += '] ' + dices;

   }else if(subarrays[i].sign){alg=subarrays[i].sign;print+=' '+alg+' '}	 //+ or -, no d
    else{	//contant number, no d
    if(alg=='+'){sum.push(subarrays[i].num)}
    if(alg=='-'){sum.push(-subarrays[i].num)}
    print+=' '+subarrays[i].num+' ';
   }

  }
  if((str.match(/d/g) || []).length==1&&str.match(/d20/g)&&ctp){ctp = ctp>0?' ⟵ Acerto crítico!':' ⟵ Falha crítica!'}
  else{ctp=''}

  for(j=0;j<sum.length;j++){soma+=sum[j]}
  print = '<span class="bold">'+soma+'</span>'+print+ctp;
  if(drucken){print_out(print)}
  total_sum += soma;
 }
 return total_sum;
}

function scroll_down(e){setTimeout(function(){e=document.getElementById(e);e.scroll({top:e.scrollHeight,behavior:"smooth"})},700)}
function print_out(print){
 var card = document.createElement('p');
 card.innerHTML = print;
 document.getElementById("results").appendChild(card);
 scroll_down('allrolls');
}

function startroll(e){
 value = document.getElementById(e).innerHTML;
 if(e.includes('hab')){
  e = habis[habs.indexOf(e.replace('hab_',''))];
  value = JSON.parse(value.replace('+','')) + data.cond[e+' (teste)'];
  value = value>-1?'+'+value:value;
  print_out('Teste de '+e);
 }
 if(e.includes('total')){print_out('Teste de '+e.slice(0,-6))}
 if(e.includes('dice')){print_out(value);diceroll(value)}
 else{diceroll('d20'+value);openroller(document.getElementById('drawer'))}
 print_out('');
}

print_out('d20+2');diceroll('d20+2');print_out('');
print_out('2d20-2');diceroll('2d20-2');print_out('');
print_out('2#d12+1');diceroll('2#d12+1');print_out('');
print_out('2d10+2d8-2');diceroll('2d10+2d8-2');print_out('');
print_out('3d8! (explosão)');diceroll('3d8!');print_out('');
print_out('3d8!5 (explosão em 5+)');diceroll('3d8!5');print_out('');
print_out('4d6kh3 (keep higher 3)');diceroll('4d6kh3');print_out('');
print_out('4d6el (eliminate lower)');diceroll('4d6el');print_out('');
print_out('5d4!kl2 (keep lower 2)');diceroll('5d4!kl2');print_out('');
print_out('5d4eh2!3 (eliminate higher 2)');diceroll('5d4eh2!3');print_out('');
print_out('5d4rra (reroll 4)');diceroll('5d4rra');print_out('');
print_out('6d6rrb2 (reroll 2-)');diceroll('6d6rrb2');print_out('');
print_out('4d8!rrb2 (explosão em 8, reroll 2-)');diceroll('4d8!rrb2');print_out('');
print_out('6d10!8rrb2el+3 (explosão 8+, reroll 2-, eliminar o menor)');diceroll('6d10!8rrb2el+3');print_out('');