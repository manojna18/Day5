(function(){

const panels = Array.from(document.querySelectorAll('.panel'));

panels.map(panel => panel.addEventListener('click', function(){
  this.classList.toggle('open');
}));

panels.map(panel => panel.addEventListener('transitionend', function(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}));


})();