function testWorker(){
 try{
  let url = '/js/worker_tester.js';
  let worker = new Worker(url);
  worker.terminate();
  URL.revokeObjectURL(url);
  return true;
 }
 catch(e){return false}
}

function populate(sup){
 if(sup&&window.Worker&&typeof(Worker)!=="undefined"){
  console.log('Web worker: populating all powers and spells');
  let powwok = new Worker("./js/worker_power.js");
  powwok.postMessage([powers,power_typ,magic,action,spell_action]);
  powwok.addEventListener('message',(ev) => {
   document.getElementById('all_powers').innerHTML = ev.data[0];
   powers_viz = ev.data[1];
  });
  let spewok = new Worker("./js/worker_spell.js");
  spewok.postMessage([spells,spell_pm_cost,spell_action]);
  spewok.addEventListener('message',(ev) => {
   document.getElementById('all_spells').innerHTML = ev.data[0];
   spell_viz = ev.data[1];
  });
 }else{
  console.log('Main thread: populating all powers and spells');
  for (var i=0;i<powers.length;i++){list_powers('all_powers',i,powers)}
  for (var i=0;i<spells.length;i++){list_spells('all_spells',i)}
 }
}

var list = [];
function create_lists(sup){
 if(sup&&window.Worker&&typeof(Worker)!=="undefined"){
  console.log("Web worker: creating lists");
  let worker = new Worker("./js/worker_list.js");
  worker.postMessage([[equip,equip,equip,powers,spells,equip],[0,armor_start,weap_start,0,0,shield_start],[equip.length,armor_end,weap_end,powers.length,spells.length,shield_end]]);
  worker.addEventListener('message',(ev) => {
   for(let j=0;j<ev.data.length;j++){
    list[j] = document.createElement('div');
    list[j].setAttribute('class','dropequip');
    list[j].innerHTML = ev.data[j];
   }
  });
 }else{
  console.log("Main thread: creating lists");
  list = worker_list([equip,equip,equip,powers,spells],[0,armor_start,weap_start,0,0],[equip.length,armor_end,weap_end,powers.length,spells.length]);
  for(let j=0;j<list.length;j++){
   let div = document.createElement('div');
   div.setAttribute('class','dropequip');
   div.innerHTML = list[j];
   list[j] = div;
  }
 }
}