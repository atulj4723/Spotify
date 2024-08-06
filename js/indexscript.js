let inp=JSON.parse(localStorage.getItem( "user-info" )) || "";
//if user is logged in go to main page
if(inp!=="" ){
   window.location.assign("main.html");
}
let body=document.getElementById("body");
let btn1=document.getElementById("btn1");
var color="black";
//displaylogo for 2s
setTimeout(()=>{
    body.innerHTML=`<img src="./img/logo.webp" alt="logo" id="logo1"><div id="h1f"><pre>Enjoy Listening To Music</pre></div><h2 id="h2f">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam est numquam qui sint expedita labore perspiciatis, commodi sunt</h2><button id ="btn1">Get Started</btn1>`;
 body.style.backgroundImage="url(./img/Bg1.webp)";
},2000);
//set theme
body.addEventListener("click",(e)=>{
   if(e.target.id=="btn1"){
    body.innerHTML=`<img src="./img/logo.webp" alt="logo" id="logo1"><div id="h1c"><h2>Choose Mode</h2></div><div id="option"><li><img src="./img/moon.webp" id="moon"><pre>Dark Mode</pre></li><li><img src="./img/sun.webp" id="sun"><pre>Light Mode</pre></li></div><button id ="btn2" ><a href="option.html">Continue</a></button>`;
 document.getElementById("btn2").addEventListener("click",()=>{
 localStorage.setItem("color",JSON.stringify(color));
 //continue to next page
     window.location.assign("option.html")
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

 body.style.backgroundImage="url(./img/Bg2.webp)";
});
