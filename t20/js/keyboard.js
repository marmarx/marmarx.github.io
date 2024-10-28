const spkeys = /\d+|d\d+|!|kh|kl|eh|el|rra|rrb|\+|\-/g;
const keys = [[7,8,9,4,5,6,1,2,3,'AC',0,'dx'],['d12','d20','d100','d6','d8','d10','d2','d3','d4','AC','d','123']];
const xkeys = ['rra','kh','eh','rrb','kl','el','+','#','!','-','backspace','enter'];
const keyboard = document.getElementById('keyboard');

function pvt(ev){ev.preventDefault()}

var skeys,zkeys,keysend;
function set_keyboard(){
 keyboard.setAttribute('onmousedown','pvt(event)');
 e = keyboard.children[0];

 var div = document.createElement('div');
 div.setAttribute('class','keybar');
 var content = '';
 for (var i=0;i<keys[0].length;i++){
  if(keys[0][i]=='dx'){content += '<div id="shiftkey" class="key skey dkey" onclick="keyshift(this)">dx</div>'}
  else if(keys[0][i]=='AC'){content += '<div id="keyac" class="key skey" onclick="keyac(this)">AC</div>'}
  else{content += '<div class="key skey" onclick="keyprint(this)">'+keys[0][i]+'</div>'}
 }
 div.innerHTML = content;
 e.appendChild(div);

 var div = document.createElement('div');
 div.setAttribute('class','keybar');
 var content = '';
 for (var i=0;i<xkeys.length;i++){
  if(xkeys[i]=='backspace'){content += '<div class="key xkey" onclick="keydel()"><div class="backspace"></div></div>'}
  else if(xkeys[i]=='enter'){content += '<div class="key xkey" onclick="key_send()"><div id="keysend" class="enter keyhide"></div></div>'}
  else if(xkeys[i]=='+'||xkeys[i]=='-'){content += '<div class="key xkey" onclick="keyprint(this)">'+xkeys[i]+'</div>'}
  else{content += '<div class="key xkey hkey" onclick="keyprint(this)">'+xkeys[i]+'</div>'}
 }
 div.innerHTML = content;
 e.appendChild(div);

 skeys = document.getElementsByClassName('skey');
 zkeys = document.getElementsByClassName('xkey');
 keysend = document.getElementById('keysend');
}

function bars(){
 document.querySelector(':root').style.setProperty('--pvw',100*JSON.parse(document.getElementById('hp').innerHTML)/JSON.parse(document.getElementById('hpmax').innerHTML)+'%');
 document.querySelector(':root').style.setProperty('--pmw',100*JSON.parse(document.getElementById('mp').innerHTML)/JSON.parse(document.getElementById('mpmax').innerHTML)+'%');
}

function keyshift(e){
 e.classList.toggle('nkey');
 for (var i=0;i<skeys.length;i++){skeys[i].innerHTML = keys[Number(e.classList.contains('nkey'))][i]}
}

function max_hp(e){
 data[e.id] = data[e.id+'max'];
 var k = data[e.id] + (e.id.includes('hp')?data.cond['Pontos de Vida']:data.cond['Pontos de Mana']);
 e.innerHTML = k;
 printed_keys=[k];
 bars()
}

var printed_keys = [];
function keyac(e){
 if(e.innerHTML=='/'){keyprint(e)}
 else{document.activeElement.innerHTML = '';printed_keys = [];keysend.classList.add('keyhide')}
}

function keydel(){
 e = document.activeElement;
 if(e.innerHTML&&!printed_keys.length){printed_keys = e.innerHTML.match(spkeys) || []}
 if(printed_keys.length>0){
  let size = printed_keys[printed_keys.length-1].length;
  let text = e.innerHTML;
  text = text.slice(0,text.length-size);
  e.innerHTML = text;
  printed_keys.splice(printed_keys.length-1,1);
  keysend.classList.remove('keyhide')
 }
 if(!printed_keys.length){keysend.classList.add('keyhide')}
}

function keyprint(e){
 var k = e.innerHTML;
 e = document.activeElement;
 if(e.innerHTML=='0'&&k!='+'&&k!='-'){e.innerHTML='';printed_keys=[]} //user is replacing a zero with a number
 e.innerHTML += k;
 printed_keys.push(k);
 keysend.classList.remove('keyhide');
}

function calc_hp(e){
 let str = e.innerHTML;
 if(e.innerHTML.includes('d')){
  let a = e.id.includes('hp')?'vida':'mana';
  let b = e.id.includes('max')?' máximos':'';
  print_out('Rolagem para pontos de '+a+b);
  str=diceroll(str);
 }else{
  if(isNaN(str[0])){str=data[e.id]+str}
  let total = 0;
  str = str.match(/[+\-]*\d+/g) || [];
  while(str.length){total += parseFloat(str.shift())}
  str=total;
 }
 let a = 'Pontos de ' + (e.id.includes('hp')?'Vida':'Mana');
 if(e.id.includes('max')){
  data[e.id] = str;
  data[e.id.replace('max','')] = (str>data[e.id]+data.cond[a])?data[e.id]+data.cond[a]:data[e.id.replace('max','')];
  e.parentNode.children[0].innerHTML = data[e.id.replace('max','')]
 }else{
  data[e.id] = (str>data[e.id+'max']+data.cond[a])?data[e.id+'max']+data.cond[a]:str;
 }
 e.innerHTML=data[e.id];
 printed_keys=[data[e.id]];
 bars();
 save_data();
}

function key_send(){
 let e = document.activeElement;
 if(e.innerHTML){
  if(e.id.search(/hp|mp/g)+1){calc_hp(e)}
  if(e.id=='dice-input'){startroll(e.id);keyac(e)}
  if(e.id==''){e.value=e.innerHTML;attack_data(e,e.getAttribute('tabindex'))}
 }
 if(keysend.classList.contains('keyhide')){document.activeElement.blur()}

 //if(keysend.classList.contains('keyhide')){open_key();keysend.classList.remove('keyhide');}
 //set_focus(document.activeElement);
 keysend.classList.add('keyhide');
}

function open_key(){
 keyboard.classList.toggle('boardshow');
 document.getElementById('diceholder').classList.toggle('diceholder');
 document.querySelector(':root').style.setProperty('--drh',data.c_dice?'var(--drb)':'90%');
 document.querySelector(':root').style.setProperty('--hph',(data.c_dice&&keyboard.classList.contains('boardshow'))?'256px':'120px');
 scroll_down('allrolls');
}

function openroller(e){
 e.parentNode.classList.toggle('drew');
 keyboard.classList.remove('boardshow');
 document.querySelector(':root').style.setProperty('--hph','120px');
 document.getElementById('diceholder').classList.remove('diceholder');
}

function fakeblur(e,i){
 open_key();
 if(e.id.search(/hp|mp/g)+1){calc_hp(e)}
 if(e.id==''){e.value=e.innerHTML;attack_data(e,i)}
}

function fakefocus(){
 open_key();
 let e = document.activeElement;
 printed_keys=[];
 if(e.innerHTML){
  keysend.classList.remove('keyhide');
  printed_keys = e.innerHTML.match(spkeys) || [];
 }else{keysend.classList.add('keyhide')}

 document.getElementById('shiftkey').classList.remove('nkey');
 for (var i=0;i<skeys.length;i++){skeys[i].innerHTML = keys[0][i]}

 document.getElementById('keyac').innerHTML = (e.id==''&&e.getAttribute('tabindex')==1)?'/':'AC';
}