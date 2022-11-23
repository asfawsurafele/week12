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
function textToggle(){
    clickbutton.textContent = 'Click me';
};
function textchecker (){
if (clickbutton.textContent === 'Click me'){
    clickbutton.textContent = 'Clicked!'
}
else{
    clickbutton.textContent = 'Click me'
}
};
clickbutton.addEventListener('click', changeColor);
clickbutton.addEventListener('click', textchecker)

// //add another event listener to the button from the previous activity to find the img element with
// id=“shoppingCart” and update its src, alt, width, and height attribute. Save the image (https://cdn-icons-
// png.flaticon.com/512/263/263142.png ) in the following folder structure

const sc = document.querySelector('#shoppingCart')
function sourcechanger (){
    sc.src = "images/263142.png";
    sc.alt = "a image of a shopping cart";
    sc.width = "100";
    sc.height = "100"
};

clickbutton.addEventListener('click', sourcechanger)

const buttons = document.querySelector('.button-container');
function buttonchanger(e){

    e.target.classList.add('colorchange')
};
buttons.addEventListener('mouseover', buttonchanger)

function buttoncolorchanger(e){
    e.target.style.backgroundColor = (e.target.textContent)
}
buttons.addEventListener('click', buttoncolorchanger)

