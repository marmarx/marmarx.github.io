const options = {root:null,rootMargin:'0px',threshold:0.5};
const callback = (entries) => {
 entries.forEach(entry => {
  if(entry.isIntersecting){
   entry.target.classList.add("ani-width"); //entry.isIntersecting
   //elements.splice(elements.indexOf(entry.target),1) //remove this row to repeat animation
  }
 });
};
let observer = new IntersectionObserver(callback,options);
document.querySelectorAll('.ani-scroll')
.forEach(el => {observer.observe(el)});