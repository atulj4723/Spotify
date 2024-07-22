let left=
document.getElementById("left");
left.addEventListener("click",()=>{
    history.back();
});
let color = JSON.parse(localStorage.getItem("color"));

document.body.style.backgroundColor=color;
let head=document.getElementById("head");
let inputs=document.getElementById("inputs");
let btn5=document.getElementById("btn5");
let opt=document.getElementById("opt");
let change=document.getElementById("change");
let fun=JSON.parse(localStorage.getItem("fun"));
call();
function call(){
if(fun=="register") { 
document.getElementById("logo3").style.marginBottom="-7rem";
head.innerText="Register";
inputs.innerHTML=`<input type="text" id="name" placeholder="Enter name" required autocomplte="on"><input type="email" id="email" placeholder="Enter email" required autocomplte="on"><input type="password" id="password" placeholder="Enter password" required autocomplte="on">`;
btn5.innerText="Register";
opt.innerText="Do you have an account ? ";
change.innerText=" Sign In";
}else if(fun=="signin"){
document.getElementById("logo3").style.marginBottom="17rem";
    head.innerText="Sign In";
inputs.innerHTML=`<input type="email" id="email" placeholder="Enter email" required autocomplte="on"><input type="password" id="password" placeholder="Enter password" required autocomplte="on">`;
btn5.innerText="Sign In";
opt.innerText="Not A Member?";
change.innerText=" Register Now";
}}

btn5.addEventListener("click",(e)=>{
e.preventDefault();
let email=document.getElementById("email").value.toLowerCase();
let password=document.getElementById("password").value;
    if(fun=="signin"){
        if(email=="atulj9537@gmail.com"&& password=="Atulj9537"){
            document.getElementById("error").innerText="";
            window.location.assign("main.html")
        }
        else if(email==""|| password==""){
            document.getElementById("error").innerText="Please Enter Email And Password";
        }
        else{
            document.getElementById("error").innerText="Wrong Credentials!";
        }
    }else if(fun=="register"){
        let name=document.getElementById("name").value;
    }
});
change.addEventListener("click",()=>{
    if(change.innerText=="Register Now"){
       fun="register";
       call();
    }else{
        fun="signin";
       call();
    }
});