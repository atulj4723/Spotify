let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let color = JSON.parse(localStorage.getItem("color"))|| "black";
let body2=document.getElementById("lg");
body2.style.backgroundColor=color;
if(color=="white"){
btn3.style.color="black";
btn4.style.color="black";
document.getElementById("hs1").style.color="black";}
//give signin or login options
function call(){
btn3.addEventListener("click",()=>{
    window.location.assign("sign.html")
    btn3.style.backgroundColor="green";
    btn3.style.color="white";
    localStorage.setItem("fun",JSON.stringify("register"));
     btn4.style.backgroundColor= "transparent";
});
btn4.addEventListener("click",()=>{
window.location.assign("sign.html")
    btn4.style.backgroundColor="green";
   btn4.style.color="white";
   localStorage.setItem("fun",JSON.stringify("signin"));
    btn3.style.backgroundColor= "transparent";
});}
setInterval(call, 1000);
let left=document.getElementById("left");
left.addEventListener("click",()=>{
    history.back();
});
