function worker_powers(arr,power_typ,magic,action,spell_action){
 let viz = [];
 let div = '';
 for (let i=0;i<arr.length;i++){
  let p = [];
  p.push(power_typ[arr[i][1]]);
  if(arr[i][2]){p.push(arr[i][2])}
  if(arr[i][4]){p.push(arr[i][4])}

  div += '<div class="powers w10" index="'+i+'">';
  div += '<div class="spell_details" onclick="power_info(this,\'powers\',powers)"><div class="w10 dif"><div class="w9">';
  div += '<p class="item_title">'+arr[i][0]+'</p><div class="magic">'+(arr[i][5]?magic:'')+'</div>';
  div += '<p class="item_subtitle">'+p.join(' • ')+'</p>';
  div += arr[i][8]?'<p class="item_subtitle"><b>Pré-requisito:</b> '+arr[i][8]+'</p>':'';
  div += '</div>';
  let ac = arr[i][3]?action[arr[i][3]].replace('Ação ','').replace('de ','').toLowerCase():'';
  div += '<div class="item_action w1 ma">'+(spell_action.includes(ac)?'<div class="ac_'+ac+'"></div>':'')+'</div>';
  div += '</div><div class="item_subtitle w10 pr ms"></div></div>';
  div += '</div>';
  viz.push([1,1,1]);
 }
 return [div,viz];
}

onmessage = function(ev){postMessage(worker_powers(ev.data[0],ev.data[1],ev.data[2],ev.data[3],ev.data[4]))}


