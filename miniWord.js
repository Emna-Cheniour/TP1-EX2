var parag = document.querySelector('.main');

//font Size
const textSize = document.querySelector('#text__size');
textSize.addEventListener('input', function(e){
  parag.style.fontSize = this.value+'px';
});

//color
const textColor = document.querySelector('#text__color');
textColor.addEventListener('input',function(e){
  parag.style.color=this.value;
});

//font family
const options=document.querySelector('#options');
options.addEventListener('input',function(e){
  
  parag.style.fontFamily= this.value;
})
