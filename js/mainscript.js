let list1;
let playlist2;
let fav = "";
let favorite;
let Favorite;
let main;
let home;
let nav;
let songs = [
  {
    id: 1,
    path: "./img/Tere_Sang_Yaara.webp",
    songname: "Tere Sang Yaara",
    singer: "Atif Aslam",
    spath: "Tere Sang Yaara.mp3",
    time: "5:31",
    language: "hindi",
  },
  {
    id: 2,
    path: "./img/Faded.webp",
    songname: "Faded",
    singer: "Bill Eliesh",
    spath: "Faded.mp3",
    time: "5:32",
    language: "english",
  },
  {
    id: 3,
    path: "./img/Vithu_Mauli_Tu.webp",
    songname: "Vithu Mauli Tu",
    singer: "Atul Jadhav",
    spath: "Vithu Mauli Tu.mp3",
    time: "5:33",
    language: "marathi",
  },
  {
    id: 4,
    path: "./img/Tera_Ban_Jaunga.webp",
    songname: "Tera Ban Jaunga",
    singer: "Sujal Gatade",
    spath: "Tera Ban Jaunga.mp3",
    time: "5:34",
    language: "hindi",
  },
  {
    id: 5,
    path: "./img/Lonely.webp",
    songname: "Lonely",
    singer: "sanket mane",
    spath: "Lonely.mp3",
    time: "5:35",
    language: "english",
  },
  {
    id: 6,
    path: "./img/Run_Away.webp",
    songname: "Run away",
    singer: "Prayas Ambawade",
    spath: "Runaway.mp3",
    time: "5:36",
    language: "english",
  },
  {
    id: 7,
    path: "./img/Maan_Meri_Jaan.webp",
    songname: "Maan Meri Jaan",
    singer: "Prasad Mahind",
    spath: "Maan Meri Jaan.mp3",
    time: "5:36",
    language: "english",
  },
];
let list3 = [];
let newpa = [5, 3, 2,4];
const load1 = () => {
  return JSON.parse(localStorage.getItem("Favorite"));
};
let fav1 = load1() || [];
let collection = JSON.parse(localStorage.getItem("collection")) || [
    "Favorite",
  ];
  localStorage.setItem("collection", JSON.stringify(collection));
localStorage.setItem("Favorite", JSON.stringify(fav1));
function newalb1() {
  let main1 = document.getElementById("main1");
  main1.innerHTML = `<div id="content6"><div id="albtit"><h2 id="albname">Happier Than Ever</h2></div><div id="albimg"><img src="${
    songs[newpa[0] - 1].path
  }" id="albm"></div></div><img src="./img/play.webp" id="play30" data-spath="${songs[newpa[0]-1].spath}"><img src="./img/add.webp" id="addtoplay" data-play="${JSON.stringify(newpa)}"><div id="playlist50"></div>`;
  let playlist2 = document.getElementById("playlist50");
  for(let cur1 of newpa){
  for (let cur of songs) {
    if (cur1==cur.id) {
      if (fav1.includes(`${cur.id}`)) {
        fav = "liked.webp";
      } else {
        fav = "heart.webp";
      }
      const div = document.createElement("div");
      div.classList.add("list1");
      div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
      playlist2.append(div);
      list4.push(cur.spath);
    }
  }}
  document.getElementById("play30").addEventListener("click",(e)=>{
     player(e.target.getAttribute("data-spath"),list4);
  });
  document.getElementById("addtoplay").addEventListener("click",()=>{
      let text=document.getElementById("albname").innerText;
     collection.push(text);
     collection=[... new Set(collection)];
     let listcont=document.getElementById("addtoplay").getAttribute("data-play");
     console.log(listcont);
     localStorage.setItem(text,listcont);
  localStorage.setItem("collection", JSON.stringify(collection));
  });
  addfav("playlist50", list4);
  document.getElementById("albsty").innerHTML = `#content6 {
            display:flex;
            flex-direction:column;
            gap:5rem;
            height:70%;
            background:transparent;
        }
        #albm{
            height:60rem;
            width:60rem;
            border-radius:5rem;
        }
     #playlist50{
        margin-top:20rem;
     }
        .list1{
            width:80%;
        }
        `;
}
function newalb() {
  let list25 = [1, 5, 8];
  let main1 = document.getElementById("main1");
  main1.innerHTML = `<div id="content6"><div id="albtit"><h1 id="type">New Album</h1><h2 id="albname">Happier Than Ever</h2><h3 id="singer">Billie Eilish</h3></div><div id="albimg"><img src="${
    songs[newpa[0] - 1].path
  }" id="albm"></div></div>`;
  main1.addEventListener("click", () => {
    main.innerHTML = `<div id="main1"></div>`;
    newalb1();
  });
}
function load() {
  fav1 = load1() || [];
  nav = document.getElementById("nav");
  main = document.getElementById("main");
  nav.innerHTML = `<img src="./img/search.webp" alt="search" id="search"><img src="./img/logo.webp" alt="logo" id="logo4"><div id="menu"><img src="./img/circle.webp" alt="circle"><img src="./img/circle.webp" alt="circle"><img src="./img/circle.webp" alt="circle"></div>`;
  main.innerHTML = `<div id="main1"></div><div id="list"></div><div id="playlist"><h2 id="play1">Playlist</h2><h3 id="see">See More</h3></div><div id="playlist2"></div>`;
  newalb();
  list1 = document.getElementById("list");
  let list2 = [];
  playlist2 = document.getElementById("playlist2");
  for (let cur of songs) {
    const div = document.createElement("div");
    div.classList.add("child");
    div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
    list1.append(div);
    list2.push(cur.spath);
  }
  let list3 = [];
  for (let cur of songs) {
    if (fav1.includes(`${cur.id}`)) {
      fav = "liked.webp";
    } else {
      fav = "heart.webp";
    }
    const div = document.createElement("div");
    div.classList.add("list1");
    div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
    playlist2.append(div);
    list3.push(cur.spath);
  }
  addfav("playlist2", list2);
  addfav("list", list3);
}
load();
home = document.getElementById("home");
home.addEventListener("click", () => {
discover.src="./img/discover.webp";
home.src="./img/fhome.webp";
favorite.src="./img/playlist.webp";

  load();
  searchs();
  menu();
  document.getElementById("albsty").innerHTML = "";
});
let input;
let curlist;
function addfav(input, curlist) {
  playlist2 = document.getElementById(input);
  playlist2.addEventListener("click", (e) => {
    if (e.target.className == "heart1") {
      if (!fav1.includes(e.target.id)) {
        fav1.push(e.target.id);
        fav1 = [...new Set(fav1)];
        e.target.src = "./img/liked.webp";
        localStorage.setItem("Favorite", JSON.stringify(fav1));
      } else if (fav1.includes(e.target.id)) {
        fav1 = fav1.filter((cur) => {
          return cur != e.target.id;
        });
        e.target.src = "./img/heart.webp";
        fav1 = [...new Set(fav1)];
        localStorage.setItem("Favorite", JSON.stringify(fav1));
      }
    } else if (e.target.className == "playing") {
      player(e.target.getAttribute("data-spath"), curlist);
    } else if (e.target.id == "play8") {
      player(e.target.getAttribute("data-spath"), curlist);
    }
  });
}
let path;
let playingnows = document.getElementById("playingnows");
playingnows.innerText = JSON.parse(localStorage.getItem("current"));
for(let cur of songs){
    if(cur.spath==JSON.parse(localStorage.getItem("current"))){
       let play9=document.getElementById("play9"); play9.style.backgroundImage=`linear-gradient( to top, rgba(0,0,0,0.9),rgba(255,255,255,0.9)),url("${cur.path}")`;
       document.getElementById("playimg").src=cur.path;
       document.getElementById("playingsongs").innerText=cur.singer;
    }
}
let audio = new Audio(`./song/${JSON.parse(localStorage.getItem("current"))}`);
let curlist1;
function player(path, curlist1) {
  let path1 = JSON.parse(localStorage.getItem("current"));
  let count = JSON.parse(localStorage.getItem("count"));
  let play10 = document.getElementById("play10");
  if (path == path1) {
    if (count == 1) {
      audio.pause();
      count = 0;
      play10.src = "./img/play.webp";
      //clearInterval(inter);
    } else {
      audio.play();
      play10.src = "./img/pause.webp";
      count = 1;
      const inter = setInterval(() => {
        let range = document.getElementById("range");
        if (range.value > 99) {
          let playslist = JSON.parse(localStorage.getItem("curplay"));
          let playnows = document.getElementById("playingnows");
          if (
            playslist.length - 1 >
            playslist.indexOf(`${playnows.innerText}`)
          ) {
            next = playslist[playslist.indexOf(`${playnows.innerText}`) + 1];
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
    audio.currentTime = 20;
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
/*
favorite=document.getElementById("favorite");
favorite.addEventListener("click",()=>{
let list4=[];
main.innerHTML=`<div id="favoritetitle">Favorite</div><div id="playlist5"></div><div id="collection"></div>`;
playlist2=document.getElementById("playlist5");
    for (let cur of songs){
if(fav1.includes(`${cur.id}`)){
      fav="liked.webp";
    const div=document.createElement("div");
    div.classList.add("list1");
    div.innerHTML=`<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
    
    playlist2.append(div);
    list4.push(cur.spath);
    
}
    }addfav("playlist5",list4);searchs();menu();
});*/
let list5 = [];
let list6 = [];
let list7 = [];
let discover = document.getElementById("discover");
discover.addEventListener("click", () => {
discover.src="./img/fdiscover.webp";
home.src="./img/home.webp";
favorite.src="./img/playlist.webp";

  main.innerHTML = `<div id="dmtitle">Discover</div><div id="dtitle">Engilsh</div><div id="elist"></div><div id="dtitle">Hindi</div><div id="hlist"></div><div id="dtitle">Marathi</div><div id="mlist"></div>`;
  let elist = document.getElementById("elist");
  let hlist = document.getElementById("hlist");
  let mlist = document.getElementById("mlist");
  for (let cur of songs) {
    if (cur.language == "english") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
      elist.append(div);
      list5.push(cur.spath);
    }
  }
  for (let cur of songs) {
    if (cur.language == "hindi") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
      hlist.append(div);
      list6.push(cur.spath);
    }
  }
  for (let cur of songs) {
    if (cur.language == "marathi") {
      const div = document.createElement("div");
      div.classList.add("child");
      div.innerHTML = `<div id="imgsec"><img src=${cur.path} alt="${cur.path}" id="play8" class="playing img1" data-spath="${cur.spath}"><img src="./img/play.webp" alt="${cur.songname}" id="play8" class="playing play " data-spath="${cur.spath}"></div><h2>${cur.songname}</h2><h3>${cur.singer}</h3>`;
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
function searchs() {
  let list8 = [];

  let search = document.getElementById("search");
  //let nav=document.getElementById("nav");
  search.addEventListener("click", () => {
    //nav.innerHTML="";
    main.innerHTML = `<div id="stitle">Search</div><div id="searchcont"><input type="text" id="searchbox"><img src="./img/search.webp" alt="search" id="search1"></div><div id="searchresult"></div>`;
    let searchbox = document.getElementById("searchbox");
    const handle = (event) => {
      let searchresult = document.querySelector("#searchresult");
      searchresult.innerHTML = "";
      for (let cur of songs) {
        if (`${searchbox.value}` != "") {
          if (
            `${cur.songname.toLowerCase()}`.includes(
              `${searchbox.value.toLowerCase()}`
            )
          ) {
            if (fav1.includes(`${cur.id}`)) {
              fav = "liked.webp";
            } else {
              fav = "heart.webp";
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
hh.addEventListener("click", () => {
  let play9 = document.getElementById("play9");
  for (let cur of songs) {
    if (document.getElementById("playingnows").innerText == cur.spath) {
      play9.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.9),rgba(0,0,0,0.9)),url("${cur.path}")`;
    }
  }
  style.innerHTML = `#play9{
    position: fixed;
    color:white;
    bottom: 8%;
    width: 100%;
    height:100%;
    background-size:100% 100%;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: all 0.5s linear 0s;
}
#range{
    margin-top:10%;
    width:80%;
}

#playimg{
   width: 120rem;
   height:120rem;
   margin-top:12%;
   border-radius:10rem;
   object-fit:cover;
   object-position:top;
   margin-bottom:15%;
} 
 #tt{
 margin-top:15%;
        color: white;
        font-size:15rem;
    }
    #playingnows{
        font-size:10rem;
    }
    #playingsongs{
        font-size:8rem;
    }
    #buttons{
        display:flex;
        width:100%;
        align-items:center;
        gap:10%;
        justify-content:center;
        margin-top:10%;
        & img{
            height:25rem;
            width: 25rem;
            background:grey;
            border-radius: 50%;
        }
    }
#play10{
    padding:2%;
}
#back{
    height: 5%;
    margin-top: 12%;
    background: grey;
    transform:rotate(-90deg);
    left:2%;
    top:2%;
    border-radius: 50%;
    position:absolute;
}`;
});
let back = document.getElementById("back");
back.addEventListener("click", () => {
  let play9 = document.getElementById("play9");
  //play9.style.backgroundImage = `linear-gradient(#85ff40,#85ff40)`;
  style.innerHTML = `#play9{
        display:flex;
        position:fixed;
        bottom:8%;
        justify-content:space-between;
        height:10%;
        align-items:center;
        width:100%;
        padding-left:3%;
        background:#85ff40;
        transition: all 0.5s linear 0s;
    }
    #playimg{
        height:17rem;
        border-radius:50%;
        width:17rem;
        animation:rotate 4s linear infinite;
    }
    #back, #tt{
        display:none;
    }
    #hh{
        display:flex;
        align-items:center;
        gap:3%;
        width:60%;
    }
    @keyframes rotate{
        100%{
            rotate:-360deg;
        }
        
    }
    #timing,#range{
        display:none;
    }
    #playingnow{
        font-size:3rem;
        color:white;
    }
    #buttons{
        height:100%;
        display:flex; 
        width:40%;
        justify-content:space-evenly;
        align-items:center;
        padding-right:2%;
    }
    .btn1,.btn2,.btn3{
        height:15rem;
        width:15rem;
    }`;
});
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  let playingnows = document.getElementById("playingnows");
  player(playingnows.innerText);
});
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  let playslist = JSON.parse(localStorage.getItem("curplay"));

  let playnows = document.getElementById("playingnows");
  if (playslist.length - 1 > playslist.indexOf(`${playnows.innerText}`)) {
    next = playslist[playslist.indexOf(`${playnows.innerText}`) + 1];
  } else {
    next = playslist[0];
  }
  //next=playslist[playslist.indexOf(`${playnows.innerText}`)+1];
  player(next, playslist);
});
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

let play9 = document.getElementById("play9");
let colours = "123456789ABCDEF";
let code = 0;
let direction = "";
let colourCode = "";
let clr1, clr2;
let directions = [
  "top",
  "bottom",
  "right",
  "left",
  "top right",
  "top left",
  "bottom left",
  "bottom right",
];
function color() {
  colourCode = "#";
  for (let i = 0; i < 6; i++) {
    code = Math.round(Math.random() * 14);
    colourCode = colourCode + colours[code];
  }
  return colourCode;
}

audio.ontimeupdate = function () {
  let range = document.getElementById("range");
  range.value = (audio.currentTime / audio.duration) * 100;
  document.getElementById("timing").innerHTML = `${Math.round(
    audio.currentTime
  )}s/${(audio.duration / 60).toFixed(2)}s`;
};
function menu() {
  document.getElementById("menu").addEventListener("click", () => {
    main.innerHTML = `<div id="contact"><h1>Contact</h1><form><h2>Enter Name</h2><input type="text" id="name" required><h2>Enter Email</h2><input type="email" id="email" required> <h2>Enter Message</h2><textarea name="message" rows="4" cols="60" id="message" required></textarea><button id="send">Send</button></form></div>`;
  });
}
menu();
favorite = document.getElementById("favorite");
favorite.addEventListener("click", () => {
    favorite.src="./img/fplaylist.webp";
    discover.src="./img/discover.webp";
home.src="./img/home.webp";

  document.getElementById("albsty").innerHTML = "";
  let collection = JSON.parse(localStorage.getItem("collection")) || [
    "Favorite",
  ];
  localStorage.setItem("collection", JSON.stringify(collection));
  let main = document.getElementById("main");
  main.innerHTML = `<div id="favoritetitle">My Playlists</div><div id="playlist6"></div>`;
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
      div.innerHTML = `<div id="${cur}" class="liste" data-path="${path}"><img src="${path}" id="pp" data-path="${path}"><h1 data-path="${path}">${cur}</h1><h2 data-path="${path}">Total ${z.length} songs</h2><img src="./img/play.webp" id="colplay" data-path="${path}"></div>`;
      playlist2.append(div);
    }
    const div = document.createElement("div");
    div.classList.add("lastlist");
    div.innerHTML = `<h1>+</h2>`;
    playlist2.append(div);
    document.querySelector(".lastlist").addEventListener("click", () => {
      main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
      load4();
      load6();
    });
    playlistplay();
  }
  load4();

  function load5() {
    document.querySelector(".lastlist").addEventListener("click", () => {
      main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
      load4();
      load6();
    });
  }

  function load6() {
    playname = document.getElementById("playname");
    document.getElementById("btnsplay").addEventListener("click", (e) => {
      if (e.target.id == "cancel") {
        main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div>`;
        load4();
      } else if (e.target.id == "create") {
        if (!collection.includes(`${playname.value}`) && playname.value != "") {
          collection.push(playname.value);
          localStorage.setItem("collection", JSON.stringify(collection));
          let list10 = [];
          let zz = playname.value;

          localStorage.setItem(zz, JSON.stringify(list10));
          main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div>`;
          load4();
        } else {
          main.innerHTML = `<div id="favoritetitle">Favorite</div><div id="playlist6"></div><div id="popup"><h1>Enter Playlist Name</h1><input type="text" id="playname"><h1>Already Exist</h1><div id="btnsplay"><button id="cancel">Cancel</button><button id="create">Create</button></div></div>`;
          load4();
          load6();
        }
      }
    });
  }

  function playlistplay() {
    document.querySelector("#playlist6").addEventListener("click", (e) => {
      let mayplay = e.target.parentElement.id;

      if (
        mayplay != "playlist6" &&
        e.target.parentElement.className != "lastlist"
      ) {
        localStorage.setItem("imgpath", e.target.getAttribute("data-path"));
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
  function listshow(input, stid) {
    let listname = input;
    playlist2 = document.getElementById("playlist5");
    for (let cur1 of listname){
    for (let cur of songs) {
      if (cur1==cur.id) {
        if (fav1.includes(`${cur.id}`)) {
          fav = "liked.webp";
        } else {
          fav = "heart.webp";
        }
        if (count == 0) {
          playaudiopath = cur.spath;
          count = 1;
        }
        const div = document.createElement("div");
        div.classList.add("list1");
        div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="heart1"></div></div>`;
        playlist2.append(div);
        list4.push(cur.spath);
      }
    }}
    addfav("playlist5", list4);
    searchs();
    menu();
    if (stid == "colplay" && listname.length != 0) {
      player(playaudiopath, list4);
    }
    imgpath = localStorage.getItem("imgpath");
    if (listname.length == 0) {
      imgpath = "./img/logo.webp";
    }

    localStorage.setItem("imgpath", imgpath);
    document.getElementById(
      "intro"
    ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><img src="./img/add.webp" id="addthe"><img src="./img/play.webp" id="playthe" data-play="${playaudiopath}" data-list='${JSON.stringify(
      list4
    )}'><img src="./img/remove.webp" id="removethe"></div>`;
    addremove();
  }
});
let listcont;
let list4 = [];
function addremove() {
  let btn10 = document.getElementById("below");
  btn10.addEventListener("click", (e) => {
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
      let imgpath = localStorage.getItem("imgpath");
      playlist2 = document.getElementById("playlist10");
      for (let cur of songs) {
        if (listcont.includes(`${cur.id}`) || listcont.includes(cur.id)) {
        } else {
          fav = "add.webp";
          const div = document.createElement("div");
          div.classList.add("list1");
          div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;

          playlist2.append(div);
          list4.push(cur.spath);
        }
      }
      searchs();
      menu();
      document.getElementById(
        "intro"
      ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><div id="editsearch"><input type="text" id="edits"><img src="./img/search.webp" id="edb"></div></div>`;
      edit(listcont);
      editthe(list4);
    } else if (e.target.id == "removethe") {
      let zzzz = JSON.parse(localStorage.getItem("mayplay"));
      listcont = JSON.parse(localStorage.getItem(zzzz));
      main.innerHTML = `<div id="favoritetitle">${zzzz}</div><div id="intro"></div><div id="playlist10"></div>`;
      let imgpath = localStorage.getItem("imgpath");
      playlist2 = document.getElementById("playlist10");
      for (let cur of songs) {
        if (listcont.includes(`${cur.id}`) || listcont.includes(cur.id)) {
          fav = "remove.webp";
          const div = document.createElement("div");
          div.classList.add("list1");
          div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;

          playlist2.append(div);
          list4.push(cur.spath);
        }
      }
      searchs();
      menu();
      document.getElementById(
        "intro"
      ).innerHTML = `<img src="${imgpath}" id="introimg"><div id="below"><div id="editsearch"><input type="text" id="edits"><img src="./img/search.webp" id="edb"></div></div>`;
      edit1(listcont);
      editthe(list4);
    }
  });
}

let val;
function edit(val) {
  let listname = val;
  let search = document.getElementById("editsearch");
  search.addEventListener("click", () => {
    let searchbox = document.getElementById("edits");
    const handle1 = (event) => {
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
            if (!listname.includes(`${cur.id}`) && !listname.includes(cur.id)) {
              fav = "add.webp";
              const div = document.createElement("div");
              div.classList.add("list1");
              div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">{cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;
              searchresult.append(div);
              list4.push(cur.spath);
            }
          }
        } else {
          if (!listname.includes(`${cur.id}`) && !listname.includes(cur.id)) {
            fav = "add.webp";
            const div = document.createElement("div");
            div.classList.add("list1");
            div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="add"></div></div>`;
            searchresult.append(div);
            list4.push(cur.spath);
          }
        }
      }
    };
    searchbox.addEventListener("keyup", handle1);
  });
}
// let val;
function edit1(val) {
  let listname = val;
  let search = document.getElementById("editsearch");
  search.addEventListener("click", () => {
    let searchbox = document.getElementById("edits");
    const handle1 = (event) => {
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
            if (listname.includes(`${cur.id}`) || listname.includes(cur.id)) {
              fav = "remove.webp";
              const div = document.createElement("div");
              div.classList.add("list1");
              div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;
              searchresult.append(div);
              list4.push(cur.spath);
            }
          }
        } else {
          if (listname.includes(`${cur.id}`) || listname.includes(cur.id)) {
            fav = "remove.webp";
            const div = document.createElement("div");
            div.classList.add("list1");
            div.innerHTML = `<div id="cont"><div class="play2" id="${cur.id}"class="playing" data-spath="${cur.spath}"><img src="./img/play.webp" class="playing" id="${cur.id}" data-spath="${cur.spath}"></div><div id="sname"><h2>${cur.songname}</h2><h3>${cur.singer}</h3></div></div><div id="df"><div id="time">${cur.time}</div><div id="img8" ><img src="./img/${fav}" alt="${cur.alt}" id="${cur.id}" class="remove"></div></div>`;
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
function editthe(col) {
  let playlist10 = document.getElementById("playlist10");
  playlist10.addEventListener("click", (e) => {
    if (e.target.className == "play2" || e.target.className == "playing") {
      player(e.target.getAttribute("data-spath"), col);
    } else if (e.target.className == "add") {
      let listcol = document.getElementById("favoritetitle").innerText;
      let st = JSON.parse(localStorage.getItem(listcol));
      st.push(e.target.id);
      st = [...new Set(st)];
      e.target.src = "./img/fadd.webp";
      localStorage.setItem(listcol, JSON.stringify(st));
    } else if (e.target.className == "remove") {
      let listcol = document.getElementById("favoritetitle").innerText;
      let st = JSON.parse(localStorage.getItem(listcol));
      st = st.filter((cur) => {
        return cur != e.target.id;
      });
      st = [...new Set(st)];
      localStorage.setItem(listcol, JSON.stringify(st));
      e.target.src = "./img/fremove.webp";
      console.log(st.length);

      if (st.length == 0 && listcol != "Favorite") {
        let collection = JSON.parse(localStorage.getItem("collection"));

        collection = collection.filter((cur) => {
          return cur != listcol;
        });
        localStorage.removeItem(listcol);
        localStorage.setItem("collection", JSON.stringify(collection));
      }
    }
  });
}
