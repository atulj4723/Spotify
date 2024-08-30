/** @format */

let list1;
let inp = JSON.parse(localStorage.getItem("user-info")) || "";
if (inp == "") {
  //if no user logged in then go to sign in page
  window.location.assign("index.html");
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDBq87GBZd6hJ5c-RblvFMDKtVZDE0kHPw",
  authDomain: "beat-db665.firebaseapp.com",
  projectId: "beat-db665",
  storageBucket: "beat-db665.appspot.com",
  messagingSenderId: "242039199221",
  appId: "1:242039199221:web:457724ce73befdb0577cbc",
  measurementId: "G-EL59F3N0BX"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());
let user;
let name;
//localStorage.clear();
get(child(dbRef, "UsersAuthList/" + inp))
  .then(snapshot => {
    if (snapshot.exists) {
      user = snapshot.val();
      load_data(user);
      console.log(user.name);
    } else {
      console.log("No data available");
    }
  })
  .catch(error => {
    console.error(error);
  });

let user_c;
const update_data = () => {
  let col = JSON.parse(localStorage.getItem("collection"));
  let col1 = {};
  for (let cur of col) {
    col1[cur] = JSON.parse(localStorage.getItem(cur));
  }
  let obj2 = JSON.stringify(col1);
  const obj1 = {
    name: user.name,
    email: user.email,
    collection: obj2
  };
  set(ref(db, "UsersAuthList/" + inp), obj1);
};
let next;

const load_data = user_c => {
  let user_inf = JSON.parse(user_c.collection);
  let collection2 = Object.entries(user_inf);
  let collection1 = Object.keys(user_inf);
  localStorage.setItem("collection", JSON.stringify(collection1));
  for (let cur of collection2) {
    localStorage.setItem(cur[0], JSON.stringify(cur[1]));
  }
};

console.log(inp);
let userId = inp;

//choose color for theme
let color1 = JSON.parse(localStorage.getItem("color")) || "black";
let searchimg = "./img/search.webp";
let circleimg = "./img/circle.webp";
let addimg = "./img/add.webp";
let faddimg = "./img/fadd.webp";
let imgt = "add.webp";
let removeimg = "./img/remove.webp";
let fremove = "./img/fremove.webp";
let imgt2 = "remove.webp";
let heartimg = "heart.webp";
// do changes according to theme color
const theme1 = color2 => {
  if (color2 == "white") {
    //changes img color from white to black
    searchimg = "./img/bsearch.webp";
    addimg = "./img/badd.webp";
    imgt2 = "bremove.webp";
    heartimg = "bheart.webp";
    fremove = "./img/bfremove.webp";
    removeimg = "./img/bremove.webp";
    faddimg = "./img/bfadd.webp";
    imgt = "badd.webp";
    circleimg = "./img/bcircle.webp";
    let theme = document.getElementById("theme");
    //change text color
    theme.innerHTML = `#body{background:white;}
    #stitle,#message{
        color:black;
    }
    #sname{
        & h2,h3{
            color:black;
        }
    }
    #contact{
        color:black;
        & input{
        color:black;}
    }
    .child{
        & h2{
            color:black;
        }
        & h3{
            color:black;
        }
    }
    #see{
        color:transparent;
    }
    #play1,#dtitle,#dmtitle,#albname,#time{
        color:black;
    }
    #favoritetitle{
        color:black;
    }
    .liste{
        & h1{
            color:black;
        }
        & h2{
            color:black;
        }
    }
    .lastlist{
        & h1{
            color:black;
        }
    }
   #user_name,#user_email{
        color:black;
    }
    #developer{
        color:grey;
    }
    `;
  } else {
    searchimg = "./img/search.webp";
    addimg = "./img/add.webp";
    imgt2 = "remove.webp";
    heartimg = "heart.webp";
    fremove = "./img/fremove.webp";
    removeimg = "./img/remove.webp";
    faddimg = "./img/fadd.webp";
    imgt = "add.webp";
    circleimg = "./img/circle.webp";
    let theme = document.getElementById("theme");
    //change text color
    theme.innerHTML = "";
  }
};
theme1(color1);
//declare all required variables
let playlist2;
let fav = "";
let favorite;
let Favorite;
let main;
let home;
let nav;
//declare array of objects to for search easily
let songs = [
  {
    id: 1,
    path: "./img/Tere_Sang_Yaara.webp",
    songname: "Tere Sang Yaara",
    singer: "Atif Aslam",
    spath: "Tere Sang Yaara.mp3",
    time: "5:31",
    language: "hindi"
  },
  {
    id: 2,
    path: "./img/Faded.webp",
    songname: "Faded",
    singer: "Bill Eliesh",
    spath: "Faded.mp3",
    time: "5:32",
    language: "english"
  },
  {
    id: 3,
    path: "./img/Vithu_Mauli_Tu.webp",
    songname: "Vithu Mauli Tu",
    singer: "Atul Jadhav",
    spath: "Vithu Mauli Tu.mp3",
    time: "5:33",
    language: "marathi"
  },
  {
    id: 4,
    path: "./img/Tera_Ban_Jaunga.webp",
    songname: "Tera Ban Jaunga",
    singer: "Sujal Gatade",
    spath: "Tera Ban Jaunga.mp3",
    time: "5:34",
    language: "hindi"
  },
  {
    id: 5,
    path: "./img/Lonely.webp",
    songname: "Lonely",
    singer: "sanket mane",
    spath: "Lonely.mp3",
    time: "5:35",
    language: "english"
  },
  {
    id: 6,
    path: "./img/Run_Away.webp",
    songname: "Run away",
    singer: "Prayas Ambawade",
    spath: "Runaway.mp3",
    time: "5:36",
    language: "english"
  },
  {
    id: 7,
    path: "./img/Maan_Meri_Jaan.webp",
    songname: "Maan Meri Jaan",
    singer: "Prasad Mahind",
    spath: "Maan Meri Jaan.mp3",
    time: "5:36",
    language: "english"
  }
];

let list3 = [];
let newpa = [5, 3, 2, 4]; //list for new album
const load1 = () => {
  return JSON.parse(localStorage.getItem("Favorite"));
};
let fav1 = load1() || []; //loads favorite content from storage
let collection = JSON.parse(localStorage.getItem("collection")) || ["Favorite"]; //load collection content from storage
localStorage.setItem("collection", JSON.stringify(collection));
localStorage.setItem("Favorite", JSON.stringify(fav1));
//increase album view by clicking on albm title
function newalb1() {
  let main1 = document.getElementById("main1");
  main1.innerHTML = `<div id="content6"><div id="albtit"><h4 id="type">New Album</h4><h2 id="albname">Happier Than Ever</h2><h3 id="singer">Billie Eilish</h3></div><div id="albimg"><img src="${
    songs[newpa[0] - 1].path
  }" id="albm"></div></div><div id="imgbelow"><button><img src="./img/play.webp" id="play30" data-spath="${
    songs[newpa[0] - 1].spath
  }"></button><img src="${addimg}" id="addtoplay" data-play="${JSON.stringify(
    newpa
  )}"></div><div id="playlist50"></div>`;
  let playlist2 = document.getElementById("playlist50");
  //adding list songs to playlist 50
  for (let cur1 of newpa) {
    for (let cur of songs) {
      if (cur1 == cur.id) {
        //checking does song include in favorite list
        if (fav1.includes(`${cur.id}`)) {
          fav = "liked.webp";
        } else {
          fav = heartimg;
        }
        const div = document.createElement("div");
        div.classList.add("list1");
        //structure of song display
        div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
        playlist2.append(div);
        list4.push(cur.spath); //to play next or previous song
      }
    }
  }
  document.getElementById("play30").addEventListener("click", e => {
    //add current song play
    player(e.target.getAttribute("data-spath"), list4);
  });
  document.getElementById("addtoplay").addEventListener("click", () => {
    //addingalbm to collection
    let text = document.getElementById("albname").innerText;
    collection.push(text);
    addtoplay.src = `${faddimg}`;
    collection = [...new Set(collection)];
    let listcont = document
      .getElementById("addtoplay")
      .getAttribute("data-play");
    //storing alb name and contains
    localStorage.setItem(text, listcont);
    localStorage.setItem("collection", JSON.stringify(collection));
  });
  //function to add song in list to favorite list
  addfav("playlist50", list4);
  document.getElementById("albsty").innerHTML = ``;
}
//view of alb before clicking
function newalb() {
  let list25 = [1, 5, 8];
  let main1 = document.getElementById("main1");
  main1.innerHTML = `<div id="content6"><div id="albtit"><h4 id="type">New Album</h4><h2 id="albname">Happier Than Ever</h2><h3 id="singer">Billie Eilish</h3></div><div id="albimg"><img src="${
    songs[newpa[0] - 1].path
  }" id="albm"></div></div>`;
  main1.addEventListener("click", () => {
    main.innerHTML = `<div id="main1"></div>`;
    newalb1();
  });
}
//function to display content of home page
function load() {
  fav1 = load1() || [];
  nav = document.getElementById("nav");
  main = document.getElementById("main");
  nav.innerHTML = `<img src="${searchimg}" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"></div>`;
  main.innerHTML = `<div id="main1"></div><div id="list"></div><div id="playlist"><h2 id="play1">Playlist</h2></div><div id="playlist2"></div>`;
  newalb();
  list1 = document.getElementById("list");
  let list2 = [];
  playlist2 = document.getElementById("playlist2");
  for (let cur of songs) {
    const div = document.createElement("div");
    div.classList.add("child");
    div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><button id="play88"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></button></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
    list1.append(div);
    list2.push(cur.spath);
  }
  let list3 = []; //add current list song id for next previous
  for (let cur of songs) {
    if (fav1.includes(`${cur.id}`)) {
      fav = "liked.webp";
    } else {
      fav = heartimg;
    }
    const div = document.createElement("div");
    div.classList.add("list1");
    div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}" class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
    playlist2.append(div);
    list3.push(cur.spath);
  }
  addfav("playlist2", list2);
  addfav("list", list3);
}
load();
home = document.getElementById("home");
home.addEventListener("click", () => {
  //change icon color after clicking
  discover.src = "./img/discover.webp";
  home.src = "./img/fhome.webp";
  favorite.src = "./img/playlist.webp";
  profile.src = "./img/profile.webp";
  load();
  searchs();
  menu();
  document.getElementById("albsty").innerHTML = "";
});
let input;
let curlist;
//function to add or remove song to favorite or play song
function addfav(input, curlist) {
  playlist2 = document.getElementById(input);
  playlist2.addEventListener("click", e => {
    if (e.target.className == "heart1") {
      if (!fav1.includes(e.target.id)) {
        fav1.push(e.target.id);
        fav1 = [...new Set(fav1)];
        e.target.src = "./img/liked.webp";
        localStorage.setItem("Favorite", JSON.stringify(fav1));
      } else if (fav1.includes(e.target.id)) {
        fav1 = fav1.filter(cur => {
          return cur != e.target.id;
        });
        e.target.src = "./img/heart.webp";
        fav1 = [...new Set(fav1)];
        localStorage.setItem("Favorite", JSON.stringify(fav1));
      }
      update_data();
    } else if (e.target.className == "playing") {
      player(e.target.getAttribute("data-spath"), curlist);
    } else if (e.target.id == "play8") {
      player(e.target.getAttribute("data-spath"), curlist);
    }
  });
}
let path;
//set current playing song name to player
let ccc = JSON.parse(localStorage.getItem("current")) || " Tere Sang Yaara.mp3";
let playingnows = document.getElementById("playingnows");
playingnows.innerText = ccc;
for (let cur of songs) {
  if (cur.spath == ccc) {
    let play9 = document.getElementById("play9");
    play9.style.backgroundImage = `linear-gradient( to top, rgba(0,0,0,0.9),rgba(255,255,255,0.9)),url("${cur.path}")`;
    document.getElementById("playimg").src = cur.path;
    document.getElementById("playingsongs").innerText = cur.singer;
  }
}
let t = "Tere Sang Yaara.mp3";
let audio = new Audio(
  `./song/${JSON.parse(localStorage.getItem("current")) || t}`
);
let curlist1;
function player(path, curlist1) {
  let path1 = JSON.parse(localStorage.getItem("current")) || "";
  let count = JSON.parse(localStorage.getItem("count"));
  let play10 = document.getElementById("play10");
  if (path == path1) {
    //count used to pause or play song and change the page content accordingly
    let pc = document.getElementById("pc");
    if (count == 1) {
      audio.pause();
      count = 0;
      pc.src = "./img/play.webp";
    } else {
      audio.play();
      pc.src = "./img/pause.webp";
      count = 1;
      // check progress of song if it is greater than 99 then plays next song
      const inter = setInterval(() => {
        let range = document.getElementById("range");
        if (range.value > 99999) {
          let playslist =
            JSON.parse(localStorage.getItem("curplay")) || "";
          let playnows = document.getElementById("playingnows");
          if (
            playslist.length - 1 >
            playslist.indexOf(`${playnows.innerText}`)
          ) {
            next =
              playslist[
                playslist.indexOf(`${playnows.innerText}`) + 1
              ];
          } else {
            next = playslist[0];
          }

          player(next, playslist);
        }
      }, 1000);
    }
  } else {
    audio.src = `./song/${path}`;
    audio.play();
    play10.src = "./img/pause.webp";
    count = 1;
    localStorage.setItem("current", JSON.stringify(path));
    let playingnows = document.getElementById("playingnows");
    let playingsongs = document.getElementById("playingsongs");
    playingnows.innerText = path;

    localStorage.setItem("curplay", JSON.stringify(curlist1));
    for (let cur of songs) {
      if (cur.spath == path) {
        playingsongs.innerHTML = cur.singer;

        document.getElementById("playimg").src = cur.path;
      }
    }
  }
  localStorage.setItem("count", JSON.stringify(count));
  let play9 = document.getElementById("play9");
  for (let cur of songs) {
    if (document.getElementById("playingnows").innerText == cur.spath) {
      play9.style.backgroundImage = `linear-gradient(to top,rgba(0,0,0,0.9),rgba(255,255,255,0.9)),url("${cur.path}")`;
    }
  }
}
//lists to store discover categories song id to play next
let list5 = [];
let list6 = [];
let list7 = [];
let discover = document.getElementById("discover");
discover.addEventListener("click", () => {
  discover.src = "./img/fdiscover.webp";
  home.src = "./img/home.webp";
  favorite.src = "./img/playlist.webp";
  profile.src = "./img/profile.webp";
  nav.innerHTML = `<img src="${searchimg}" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"></div>`;
  searchs();
  menu();
  main.innerHTML = `<div id="dmtitle">Discover</div><div id="dtitle">Engilsh</div><div id="elist"></div><div id="dtitle">Hindi</div><div id="hlist"></div><div id="dtitle">Marathi</div><div id="mlist"></div>`;
  let elist = document.getElementById("elist");
  let hlist = document.getElementById("hlist");
  let mlist = document.getElementById("mlist");
  for (let cur of songs) {
    //only show English songs
    if (cur.language == "english") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><button id="play88"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></button></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
      elist.append(div);
      list5.push(cur.spath);
    }
  } //hindi
  for (let cur of songs) {
    if (cur.language == "hindi") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><button id="play88"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></button></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
      hlist.append(div);
      list6.push(cur.spath);
    }
  } //marathi
  for (let cur of songs) {
    if (cur.language == "marathi") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><button id="play88"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></button></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
      mlist.append(div);
      list7.push(cur.spath);
    }
  }
  addfav("elist", list5);
  addfav("hlist", list6);
  addfav("mlist", list7);
  searchs();
  menu();
});
//function to search songs
function searchs() {
  let list8 = [];
  let search = document.getElementById("search");
  search.addEventListener("click", () => {
    //change main content to search page
    main.innerHTML = `<div id="stitle">Search</div><div id="searchcont"><input type="text" id="searchbox"><img src="${searchimg}" alt="search" id="search1"></div><div id="searchresult"></div>`;
    let searchbox = document.getElementById("searchbox");
    const handle = event => {
      let searchresult = document.querySelector("#searchresult");
      searchresult.innerHTML = "";
      for (let cur of songs) {
        //check input value should not be null
        if (`${searchbox.value}` != "") {
          if (
            `${cur.songname.toLowerCase()}`.includes(
              `${searchbox.value.toLowerCase()}`
            ) //check the song array contains searched letters
          ) {
            //show only search content
            if (fav1.includes(`${cur.id}`)) {
              fav = "liked.webp";
            } else {
              fav = heartimg;
            }
            const div = document.createElement("div");
            div.classList.add("list1");
            div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
            searchresult.append(div);
            list8.push(cur.spath);
          }
        }
      }
    };
    searchbox.addEventListener("keyup", handle);
    addfav("searchresult", list8);
    document.getElementById("albsty").innerHTML = "";
  });
}
searchs();
menu();
let style = document.getElementById("style");
let hh = document.getElementById("hh");
//increaseplayer size
hh.addEventListener("click", () => {
  let play9 = document.getElementById("play9");
  for (let cur of songs) {
    if (document.getElementById("playingnows").innerText == cur.spath) {
      play9.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.9),rgba(0,0,0,0.9)),url("${cur.path}")`;
    }
  }
  document.getElementById("range").addEventListener("change", e => {
    //change audio according to range
    audio.currentTime = (range.value * audio.duration) / 100000;
  });
  style.innerHTML = `
  #play9{
  height:90%;
  width:100%;
  background-repeat:no-repeat;
  background-size:100% 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:0;
  }
#back,#range,#tt,.btn1,#timing{
  display: block;
}
#tt{
   color:black;
   text-align:center;
   padding-top:5%;
   font-size:3rem;
}
  #back{
  position:absolute;
  left:5%;
  top:5%;
  height:3rem;
  width:3rem;
  border-radius:50%;
  background:#1f1f1f;
  border:0;
  & img{
   height:90%;
   width:90%;
   transform:rotate(-90deg)
  }}
  #hh{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:0;
  padding-right:1rem;
  & img{
  height:90%;
  width:90%;
  animation:none;
  border-radius:2rem;
  }}

  input[type="range"]{
  accent-color:#86ff6a;
    width:80%;
    margin-left:-8%;
  }
  #timing{
  display:flex;
  justify-content:space-between;
  width:80%;
  margin-left:-7%;
  margin-top:0%;
  }
  #buttons{
  display:flex;
    width:60%;
    justify-content:space-evenly;
  }
  @media (width>580px) {
  #play9{
  }
  #hh img{
  height:25vmax;
  width:25vmax;}}
`;
});
//reduce size of player
let back = document.getElementById("back");
back.addEventListener("click", () => {
  let play9 = document.getElementById("play9");
  //play9.style.backgroundImage = `linear-gradient(#85ff40,#85ff40)`;
  style.innerHTML = "";
});
let btn2 = document.querySelector(".btn2");
//pause btn
btn2.addEventListener("click", () => {
  let playingnows = document.getElementById("playingnows");
  player(playingnows.innerText);
});
//next btn
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  let playslist = JSON.parse(localStorage.getItem("curplay")) || "";
  let playnows = document.getElementById("playingnows");
  console.log(playnows.innerText);
  console.log(playslist);
  if (playslist.length - 1 > playslist.indexOf(`${playnows.innerText}`)) {
    next = playslist[playslist.indexOf(`${playnows.innerText}`) + 1];
  } else {
    next = playslist[0];
  }

  player(next, playslist);
});
//previous btn
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  let playslist = JSON.parse(localStorage.getItem("curplay"));

  let playnows = document.getElementById("playingnows");
  if (0 < playslist.indexOf(`${playnows.innerText}`)) {
    next = playslist[playslist.indexOf(`${playnows.innerText}`) - 1];
  } else {
    next = playslist[playslist.length - 1];
  }
  //next=playslist[playslist.indexOf(`${playnows.innerText}`)+1];
  player(next, playslist);
});
//change range value according to audio current time
audio.ontimeupdate = function () {
  let range = document.getElementById("range");
  range.value = (audio.currentTime / audio.duration) * 100000;
  let cursec = Math.floor(audio.currentTime % 60);
  let curmin = Math.floor(audio.currentTime / 60);
  let dursec = Math.floor(audio.duration % 60);
  let durmin = Math.floor(audio.duration / 60);
  document.getElementById("currentTime").innerHTML = `${String(
    curmin
  ).padStart(2, "0")}:${String(cursec).padStart(2, "0")}`;
  document.getElementById("durationTime").innerHTML = `${String(
    durmin
  ).padStart(2, "0")}:${String(dursec).padStart(2, "0")}`;
};
//contact form
function menu() {
  document.getElementById("menu").addEventListener("click", () => {
    main.innerHTML = `<div id="contact"><h1>Contact</h1><form action="https://formspree.io/f/xgvwoage"
  method="POST"><h2>Enter Name</h2><input type="text" id="name" placeholder="Enter Name" required name="name" ><h2>Enter Email</h2><input type="email" id="email" placeholder="Enter Email" required name="email"> <h2>Enter Message</h2><textarea name="message" rows="4" cols="40" id="message" required placeholder="Enter The Message" name="message"></textarea><button id="send">Send</button></form></div>`;
  });
}
menu();
//collection show
favorite = document.getElementById("favorite");
favorite.addEventListener("click", () => {
  nav.innerHTML = `<img src="${searchimg}" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"></div>`;
  searchs();
  menu();
  favorite.src = "./img/fplaylist.webp";
  discover.src = "./img/discover.webp";
  home.src = "./img/home.webp";
  profile.src = "./img/profile.webp";
  document.getElementById("albsty").innerHTML = "";
  let collection = JSON.parse(localStorage.getItem("collection")) || [
    "Favorite"
  ];
  //load collection contains all user made playlist and default favorite
  localStorage.setItem("collection", JSON.stringify(collection));
  let main = document.getElementById("main");
  main.innerHTML = `<div id="favoritetitle">My Playlists</div><div id="playlist6"></div>`;
  //show all list front song img with play btn
  function load4() {
    playlist2 = document.getElementById("playlist6");
    let path;
    for (let cur of collection) {
      let z = JSON.parse(localStorage.getItem(cur));
      if (z.length != 0) {
        path = songs[z[0] - 1].path;
      } else {
        path = "./img/logo.webp";
      }
      localStorage.setItem("imgpath", path);
      const div = document.createElement("div");
      div.classList.add("list2");
      div.innerHTML = `<div id="${cur}" class="liste" data-path="${path}"><img src="${path}" id="pp" data-path="${path}"><h1 data-path="${path}">${cur}</h1><h2 data-path="${path}">Total ${z.length} songs</h2><button id="colplay" data-path="${path}"><img src="./img/play.webp" id="colplay" data-path="${path}"></button></div>`;
      playlist2.append(div);
    }
    const div = document.createElement("div");
    div.classList.add("lastlist");
    div.innerHTML = `<h1>+</h1>`;
    playlist2.append(div);
    document.querySelector(".lastlist").addEventListener("click", () => {
      main.innerHTML = `<div id="favoritetitle">Playlist</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
      load4();
      load6();
    });
    playlistplay();
  }
  load4();
  //function to take new playlist name
  function load5() {
    document.querySelector(".lastlist").addEventListener("click", () => {
      main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
      load4();
      load6();
    });
  }
  //savingname to collection
  function load6() {
    let playname = document.getElementById("playname");
    document.getElementById("btnsplay").addEventListener("click", e => {
      if (e.target.id == "cancel") {
        main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div>`;
        load4();
      } else if (e.target.id == "create") {
        if (
          !collection.includes(`${playname.value}`) &&
          playname.value != ""
        ) {
          collection.push(playname.value);
          localStorage.setItem(
            "collection",
            JSON.stringify(collection)
          );
          let list10 = [];
          let zz = playname.value;

          localStorage.setItem(zz, JSON.stringify(list10));
          main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div>`;
          update_data();
          load4();
        } else {
          main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><h1>Already Exist</h1><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
          load4();
          load6();
        }
      }
    });
  }
  //to select playlist user clicked
  function playlistplay() {
    document.querySelector("#playlist6").addEventListener("click", e => {
      let mayplay = e.target.parentElement.id;

      if (
        mayplay != "playlist6" &&
        e.target.parentElement.className != "lastlist"
      ) {
        localStorage.setItem(
          "imgpath",
          e.target.getAttribute("data-path")
        );
        localStorage.setItem("mayplay", JSON.stringify(mayplay));
        let zzzz = JSON.parse(localStorage.getItem("mayplay"));
        let sd = JSON.parse(localStorage.getItem(zzzz));
        main.innerHTML = `<div id="favoritetitle">${zzzz}</div><div id="intro"></div><div id="playlist5"></div>`;

        listshow(sd, e.target.id);
      }
    });
  }
  let list4 = [];
  let input;
  let stid;
  let count = 0;
  let playaudiopath = "";
  let imgpath = "";
  //show list songs sequencingly
  function listshow(input, stid) {
    let listname = input;
    playlist2 = document.getElementById("playlist5");
    for (let cur1 of listname) {
      for (let cur of songs) {
        if (cur1 == cur.id) {
          if (fav1.includes(`${cur.id}`)) {
            fav = "liked.webp";
          } else {
            fav = heartimg;
          }
          if (count == 0) {
            playaudiopath = cur.spath;
            count = 1;
          }
          const div = document.createElement("div");
          div.classList.add("list1");
          div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
          playlist2.append(div);
          list4.push(cur.spath);
        }
      }
    }
    addfav("playlist5", list4);
    searchs();
    menu();
    if (stid == "colplay" && listname.length != 0) {
      player(playaudiopath, list4);
    }
    imgpath = localStorage.getItem("imgpath") || "./img/logo.webp";
    if (listname.length == 0) {
      imgpath = "./img/logo.webp";
    }

    localStorage.setItem("imgpath", imgpath);
    document.getElementById(
      "intro"
    ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><img src="${addimg}" id="addthe"><button id="playthe" data-play="${playaudiopath}" data-list='${JSON.stringify(
      list4
    )}'><img src="./img/play.webp"></button><img src="${removeimg}" id="removethe"></div>`;
    addremove();
  }
});
let listcont;
let list4 = [];

function addremove() {
  let btn10 = document.getElementById("below");
  btn10.addEventListener("click", e => {
    if (e.target.id == "playthe") {
      if (e.target.getAttribute("data-play") != "") {
        player(
          e.target.getAttribute("data-play"),
          JSON.parse(e.target.getAttribute("data-list"))
        );
      }
    } else if (e.target.id == "addthe") {
      let zzzz = JSON.parse(localStorage.getItem("mayplay"));
      listcont = JSON.parse(localStorage.getItem(zzzz));
      main.innerHTML = `<div id="favoritetitle">${zzzz}</div><div id="intro"></div><div id="playlist10"></div>`;
      let imgpath = localStorage.getItem("imgpath") || "./img/logo.webp";
      playlist2 = document.getElementById("playlist10");
      for (let cur of songs) {
        if (
          listcont.includes(`${cur.id}`) ||
          listcont.includes(cur.id)
        ) {
        } else {
          fav = imgt;
          const div = document.createElement("div");
          div.classList.add("list1");
          div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;

          playlist2.append(div);
          list4.push(cur.spath);
        }
      }
      searchs();
      menu();
      document.getElementById(
        "intro"
      ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><div id="editsearch"><input type="text" id="edits"><img src="${searchimg}" id="edb"></div></div>`;
      edit(listcont);
      editthe(list4);
    } else if (e.target.id == "removethe") {
      let zzzz = JSON.parse(localStorage.getItem("mayplay"));
      listcont = JSON.parse(localStorage.getItem(zzzz));
      main.innerHTML = `<div id="favoritetitle">${zzzz}</div><div id="intro"></div><div id="playlist10"></div>`;
      let imgpath = localStorage.getItem("imgpath") || "./img/logo.webp";
      playlist2 = document.getElementById("playlist10");
      for (let cur of songs) {
        if (
          listcont.includes(`${cur.id}`) ||
          listcont.includes(cur.id)
        ) {
          fav = imgt2;
          const div = document.createElement("div");
          div.classList.add("list1");
          div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" id="${cur.id}" ></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;

          playlist2.append(div);
          list4.push(cur.spath);
        }
      }
      searchs();
      menu();
      document.getElementById(
        "intro"
      ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><div id="editsearch"><input type="text" id="edits"><img src="${searchimg}" id="edb"></div></div>`;
      edit1(listcont);
      editthe(list4);
    }
  });
}

let val;
//function to show song not in playlist to add playlist
function edit(val) {
  let listname = val;
  let search = document.getElementById("editsearch");
  search.addEventListener("click", () => {
    let searchbox = document.getElementById("edits");
    const handle1 = event => {
      let searchresult = document.querySelector("#playlist10");
      searchresult.innerHTML = "";
      list4 = [];
      for (let cur of songs) {
        if (`${searchbox.value}` != "") {
          if (
            `${cur.songname.toLowerCase()}`.includes(
              `${searchbox.value.toLowerCase()}`
            )
          ) {
            if (
              !listname.includes(`${cur.id}`) &&
              !listname.includes(cur.id)
            ) {
              fav = imgt;
              const div = document.createElement("div");
              div.classList.add("list1");
              div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;
              searchresult.append(div);
              list4.push(cur.spath);
            }
          }
        } else {
          if (
            !listname.includes(`${cur.id}`) &&
            !listname.includes(cur.id)
          ) {
            fav = imgt;
            const div = document.createElement("div");
            div.classList.add("list1");
            div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;
            searchresult.append(div);
            list4.push(cur.spath);
          }
        }
      }
    };
    searchbox.addEventListener("keyup", handle1);
  });
}
// list to show song present in list to remove
function edit1(val) {
  let listname = val;
  let search = document.getElementById("editsearch");
  search.addEventListener("click", () => {
    let searchbox = document.getElementById("edits");
    const handle1 = event => {
      let searchresult = document.querySelector("#playlist10");
      searchresult.innerHTML = "";
      list4 = [];
      for (let cur of songs) {
        if (`${searchbox.value}` != "") {
          if (
            `${cur.songname.toLowerCase()}`.includes(
              `${searchbox.value.toLowerCase()}`
            )
          ) {
            if (
              listname.includes(`${cur.id}`) ||
              listname.includes(cur.id)
            ) {
              fav = imgt2;
              const div = document.createElement("div");
              div.classList.add("list1");
              div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;
              searchresult.append(div);
              list4.push(cur.spath);
            }
          }
        } else {
          if (
            listname.includes(`${cur.id}`) ||
            listname.includes(cur.id)
          ) {
            fav = imgt2;
            const div = document.createElement("div");
            div.classList.add("list1");
            div.innerHTML = `<div id="cont"><button class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></button><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;
            searchresult.append(div);
            list4.push(cur.spath);
          }
        }
      }
    };
    searchbox.addEventListener("keyup", handle1);
  });
}
let col;
//function to add or remove song
function editthe(col) {
  let playlist10 = document.getElementById("playlist10");
  playlist10.addEventListener("click", e => {
    if (e.target.className == "play2" || e.target.className == "playing") {
      player(e.target.getAttribute("data-spath"), col);
    } else if (e.target.className == "add") {
      let listcol = document.getElementById("favoritetitle").innerText;
      let st = JSON.parse(localStorage.getItem(listcol)) || [];
      st.push(e.target.id);
      st = [...new Set(st)];
      console.log("eer");
      console.log(faddimg);
      e.target.src = faddimg;
      localStorage.setItem(listcol, JSON.stringify(st));
      update_data();
    } else if (e.target.className == "remove") {
      let listcol = document.getElementById("favoritetitle").innerText;
      let st = JSON.parse(localStorage.getItem(listcol)) || [];
      st = st.filter(cur => {
        return cur != e.target.id;
      });
      st = [...new Set(st)];
      localStorage.setItem(listcol, JSON.stringify(st));
      e.target.src = fremove;
      console.log(st.length);

      if (st.length == 0 && listcol != "Favorite") {
        let collection =
          JSON.parse(localStorage.getItem("collection")) || [];

        collection = collection.filter(cur => {
          return cur != listcol;
        });
        localStorage.removeItem(listcol);
        localStorage.setItem("collection", JSON.stringify(collection));
      }
    }
    update_data();
  });
}
//function for profile
let profile = document.getElementById("profile");
profile.addEventListener("click", () => {
  //console.log(JSON.parse(user.collection).favorite[2]);
  profile.src = "./img/fprofile.webp";
  discover.src = "./img/discover.webp";
  home.src = "./img/home.webp";
  favorite.src = "./img/playlist.webp";
  nav.innerHTML = `<img src="${searchimg}" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"></div>`;
  searchs();
  menu();
  main.innerHTML = `<div id="profile_content"><img src="./img/profile.webp" alt="profile" id="profile_picture"><h2 id="user_email">${user.email}</h2><h1 id="user_name">${user.name}</h1><button id="theme1"><img src="./img/sun.webp" id="change"></button><img src="./img/show.webp" id="show"><button id="Signout">SignOut</button></div><div id="developer">Developed By @Atul</div>`;

  document.getElementById("Signout").addEventListener("click", () => {
    signout();
  });
  document.getElementById("change").addEventListener("click", () => {
    if (color1 == "black") {
      theme1("white");
      document.getElementById("change").src = "./img/moon.webp";
      color1 = "white";
    } else {
      theme1("black");
      document.getElementById("change").src = "./img/sun.webp";
      color1 = "black";
    }
    nav.innerHTML = `<img src="${searchimg}" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"><img src="${circleimg}" alt="circle"></div>`;
    searchs();
    menu();
  });
});
const signout = () => {
  localStorage.setItem("user-info", JSON.stringify(""));
  window.location.assign("index.html");
}