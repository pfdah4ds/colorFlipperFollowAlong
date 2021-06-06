//an app that generates random color and sets as background

const rand = (max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log()
const colour  = ()=>{
    return (`rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`);
}

const domEL = {
    button: document.querySelector('#clickButton'),
    body: document.querySelector('body'),
    color: document.querySelector('.color')
};
console.log(domEL);

domEL.button.addEventListener('click',()=>{
    const col = colour();
    console.log(col);
    domEL.body.style.backgroundColor = col;
    domEL.color.innerText = col;
});