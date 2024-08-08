 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getDatabase, set, ref, get, child} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyDBq87GBZd6hJ5c-RblvFMDKtVZDE0kHPw",
  authDomain: "beat-db665.firebaseapp.com",
  databaseURL: "https://beat-db665-default-rtdb.firebaseio.com",
  projectId: "beat-db665",
  storageBucket: "beat-db665.appspot.com",
  messagingSenderId: "242039199221",
  appId: "1:242039199221:web:457724ce73befdb0577cbc",
  measurementId: "G-EL59F3N0BX"
};
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db=getDatabase();
  const auth=getAuth(app);
  const dbref= ref(db);
  auth.language='en';
  const provider = new GoogleAuthProvider();
let left=document.getElementById("left");
left.addEventListener("click",()=>{
    history.back();
});
let color = JSON.parse(localStorage.getItem("color"))|| "black";
let google=document.getElementById("op");
document.body.style.backgroundColor=color;
let head=document.getElementById("head");
let inputs=document.getElementById("inputs");
let btn5=document.getElementById("btn5");
let opt=document.getElementById("opt");
let change=document.getElementById("change");
let fun=JSON.parse(localStorage.getItem("fun")) || "register";
let or=document.getElementById("or");
//set  theme
let open="./img/whiteeyeopen.webp";
let close="./img/whiteeyeclose.webp";
if(color=="white"){
    head.style.color="black";
    or.style.color="black";
    opt.style.color="black";
    open="./img/blackeyeopen.webp";
    close="./img/blackeyeclose.webp";
}
//change main contain for register or signin
call();
function stop() {
    document.getElementById("error").innerText="";
}
function call(){
if(fun=="register") { 
document.getElementById("logo3").style.marginBottom="-7rem";
head.innerText="Register";
inputs.innerHTML=`<input type="text" id="name" placeholder="Enter name" required autocomplte="on"><input type="email" id="email" placeholder="Enter email" required autocomplte="on"><div id="pass"><input type="password" id="password" placeholder="Enter password" required autocomplte="on"><img src="${close}" id="eye"></div>`;
btn5.innerText="Register";
opt.innerText="Do you have an account ? ";
change.innerText=" Sign In";
google.setAttribute("data-option","register");
ps();
}else if(fun=="signin"){
document.getElementById("logo3").style.marginBottom="17rem";
    head.innerText="Sign In";
inputs.innerHTML=`<input type="email" id="email" placeholder="Enter email" required autocomplte="on"><div id="pass"><input type="password" id="password" placeholder="Enter password" required autocomplte="on"><img src="${close}" id="eye"></div>`;
btn5.innerText="Sign In";
google.setAttribute("data-option","signin");
opt.innerText="Not A Member?";
change.innerText=" Register Now";
ps();
}
let email1=document.getElementById("email");
let password1=document.getElementById("password");
let name1=document.getElementById("name");
if(color=="white"){
    email1.style.color="black";
    password1.style.color="black";
    if(fun=="register"){
    name1.style.color="black";}
}}
//submittingresponse
btn5.addEventListener("click",(e)=>{
e.preventDefault();
    if(fun=="signin"){
    let password=document.getElementById("password").value;
     let email=document.getElementById("email").value;
     //firebase function for validate user
        signInWithEmailAndPassword(auth, email, password)
        .then((credentials)=>{
            get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
                if(snapshot.exists){
                //saving user data to use it in main. html
 localStorage.setItem("user-info",JSON.stringify(credentials.user.uid)); 
     //move to main page
                    window.location.assign("main.html");
                }
            })
        }).catch((error)=>{
        // display error
          let e=error.code;
          document.getElementById("error").innerText=e.slice(5);
           setTimeout(stop,2000);
        });
       
    }else if(fun=="register"){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let name=document.getElementById("name").value;
    let col={Favorite:[],};
    let collection=JSON.stringify(col);
        createUserWithEmailAndPassword(auth, email, password)
        .then((credentials)=>{
           //adding and validating user
            set(ref(db, 'UsersAuthList/' + credentials.user.uid),{
                name: name, 
                email:email, 
                collection: collection, 
                
            });
            localStorage.setItem("user-info",JSON.stringify( credentials.user.uid));
            window.location.assign("main.html");
        }).catch((error)=>{
           let e=error.code;
           document.getElementById("error").innerText= e.slice(5);
           setTimeout(stop,2000);
           
        })
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

google.addEventListener("click",()=>{
   
        signInWithPopup(auth, provider).then((result) => {
 const credential=GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
   
          get(child(dbref, "UsersAuthList/" + user.uid)).then((snapshot) => {
  if (snapshot.exists) {
    const user1=snapshot.val();
    localStorage.setItem("user-info",JSON.stringify(user.uid)); 
    signOut(auth);
    window.location.assign("main.html");
  } else {
   let col={Favorite:[],};
    let collection=JSON.stringify(col);
         set(ref(db, 'UsersAuthList/' + user.uid),{
                name: user.displayName, 
                email: user.email, 
                collection: collection, 
                                                
            });
         localStorage.setItem("user-info",JSON.stringify(user.uid)); 
     //move to main page
     signOut(auth);
                    window.location.assign("main.html");
  }
}).catch((error) => {
  alert(error);
});    
   
         
   
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email1 = error.customData.email;
    const credential =GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage);
    document.getElementById("error").innerText=errorCode.slice(5);
    setTimeout(stop,2000)
  });
  
 
});
function ps() {
let passshow=document.getElementById("password");
let eye=document.getElementById("eye");
eye.addEventListener("click",()=>{
    if(passshow.type=="password") {
        password.type="text";
        eye.src=open;
    }else{
        password.type="password";
        eye.src=close;
    }
});}
