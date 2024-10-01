function worker_spells(arr,spell_pm_cost,spell_action){
 let viz = [];
 let div = '';
 for (let i=0;i<arr.length;i++){
  div += '<div class="spells w10" onclick="spell_info(this)" index="'+i+'">';
  div += '<div class="spell_details"><div class="w10 dif"><div class="w9"><p class="item_title">'+arr[i][0]+'</p><p class="item_subtitle">'+spell_pm_cost[arr[i][2]-1]+' PM • '+arr[i][1]+' • '+arr[i][3]+' '+arr[i][2]+'</p></div><div class="item_action w1 ma">';
  if(spell_action.includes(arr[i][4])){div += '<div class="ac_'+arr[i][4]+'"></div>'}
  div += '</div></div><div class="item_subtitle w10 ms"></div></div>';
  div += '</div>';
  viz.push([1,1,1,1]);
 }
 return [div,viz];
}

onmessage = function(ev){postMessage(worker_spells(ev.data[0],ev.data[1],ev.data[2]))}


