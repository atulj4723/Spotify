
let body=document.getElementById("body");
let btn1=document.getElementById("btn1");
var color="black";
setTimeout(()=>{
    body.innerHTML=`<img src="logo.png" alt="logo" id="logo1"><div id="h1f"><pre>Enjoy Listening To Music</pre></div><h2 id="h2f">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam est numquam qui sint expedita labore perspiciatis, commodi sunt</h2><button id ="btn1">Get Started</btn1>`;
 body.style.backgroundImage="url(Bg1.png)";
},2000);

body.addEventListener("click",(e)=>{
   if(e.target.id=="btn1"){
    body.innerHTML=`<img src="logo.png" alt="logo" id="logo1"><div id="h1c"><h2>Choose Mode</h2></div><div id="option"><li><img src="moon.png" id="moon"><pre>Dark Mode</pre></li><li><img src="sun.png" id="sun"><pre>Light Mode</pre></li></div><button id ="btn2" ><a href="h.html">Continue</a></button>`;
 document.getElementById("btn2").addEventListener("click",()=>{
 localStorage.setItem("color",JSON.stringify(color));
     window.location.assign("h.html")
 });}
   let theme=document.getElementById("option");
theme.addEventListener("click",(e)=>{
    if(e.target.id=="moon"){
        body.style.backgroundColor="black";
        color="black";
    }else if(e.target.id=="sun"){
        body.style.backgroundColor="white";
        color="white";
    }

});

 body.style.backgroundImage="url(Bg2.png)";
});
