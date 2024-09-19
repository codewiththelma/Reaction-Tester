let start = new Date().getTime();

function getRandomColor() {
    const letters = '0123456789ABCDEF'; 
    let color = '#';
    for (let i = 0; i < 6; i++) {    
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
function makeShape(){
    let top = Math.floor(Math.random()*300+10)
    let left = Math.floor(Math.random()*450+10)
    let width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";


    /* let color = Math.floor(Math.random()*4 + 1)
    if (color==2){
        document.getElementById("shape").style.backgroundColor = "purple";
    
    }
    else if (color==3){
        document.getElementById("shape").style.backgroundColor = "yellow";

    }
    else if (color==4){
        document.getElementById("shape").style.backgroundColor = "green";
    }
    else{
        document.getElementById("shape").style.backgroundColor = "black";
    }*/
    document.getElementById("shape").style.top = top +"px";
    document.getElementById("shape").style.left = left +"px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}
function shapeDelay(){
    setTimeout(makeShape,(Math.random()+2000));
}
shapeDelay();
var bestTime;
document.getElementById("shape").onclick = function(){
    let end = new Date().getTime();
    let timeTaken = (end-start)/1000;

    if (bestTime == null){
        bestTime = timeTaken
    }else if(bestTime > timeTaken){
        bestTime = timeTaken
    }
    else{
        bestTime = bestTime
    }
    document.getElementById("toappend2").innerHTML = bestTime + "s"

    document.getElementById("toappend").innerHTML=timeTaken + "s"
    document.getElementById("shape").style.display = "none";
    shapeDelay();

}
        