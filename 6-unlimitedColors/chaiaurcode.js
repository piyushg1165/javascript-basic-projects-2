const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() *16)] ;
  }
  return color;
};

let colorChanger;
const colorChangeStart = function(){
  
   const func = function(){
    let body = document.body.style.backgroundColor = randomColor();
  }
  if(!colorChanger){
    colorChanger = setInterval(func , 700);
  }
};
const colorChangeStop = function(){
  clearInterval(colorChanger);
  colorChanger = null;
}

const colorStart = document.querySelector('#start').addEventListener('click', colorChangeStart);
const colorStop = document.querySelector('#stop').addEventListener('click', colorChangeStop);