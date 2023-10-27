let btn=document.querySelector("button");
console.log(btn);
btn.addEventListener("click",function(){
    let div=document.querySelector("div");
    let rdm=rdmcolor();
    div.style.backgroundColor=rdm;
    console.log("done");
});
function rdmcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    console.log(color);
    return color;
}

