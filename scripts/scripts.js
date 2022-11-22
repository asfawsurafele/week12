const clickbutton = document.querySelector('.button1');
function alertFunc() {
    alert("Hello World!");     
    clickbutton.removeEventListener('click', alertFunc)      
  }

//clickbutton.addEventListener('click', alertFunc, {once:true} <---- works just if you only want it to execute once 
//clickbutton.removeEventListener('click, alertFunc)
function changeColor() {
    // document.body.style.backgroundColor = 'pink'
    document.body.classList.add('changecolorto')
};

function buttonText(){
    clickbutton.textContent = 'Clicked!';
};

function textToggle(){
    clickbutton.textContent = 'Click me';
};

clickbutton.addEventListener('click', changeColor);

if (clickbutton.textContent = 'Clicked!'){
    clickbutton.addEventListener('click', textToggle)
}
else{
    clickbutton.textContent('click', buttonText)
};

