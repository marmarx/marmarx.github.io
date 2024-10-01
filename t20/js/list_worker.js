function worker_list(arr,min,max){
 let list = [];
 let func = ['equip','armor','weap','feat','spell'];
 for(let j=0;j<arr.length;j++){
  let div = '';
  for(var i=min[j];i<max[j];i++){div += '<a onclick="'+func[j]+'_choose(this,'+i+')" tabindex="0">'+arr[j][i][0]+'</a>'}
  list[j] = div;
 }
 return list;
}
onmessage = function(ev){postMessage(worker_list(ev.data[0],ev.data[1],ev.data[2]))}