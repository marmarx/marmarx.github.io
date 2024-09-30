function worker_list(j,arr,min,max){
 let func = ['equip','armor','weap','feat'];
 let div = '';
 for(var i=min;i<max;i++){div += '<a onclick="'+func[j]+'_choose(this,'+i+')" tabindex="0">'+arr[i][0]+'</a>'}
 return div;
}
onmessage = function(ev){postMessage(worker_list(ev.data[0],ev.data[1],ev.data[2],ev.data[3]))}