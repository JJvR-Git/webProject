//header scroll code

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && screen.width > 760) {
    document.getElementById("banner-container").style.top = "-70px";
    document.getElementById("topbox").style.display = "none";
    document.getElementById("scrollsearch").style.display = "flex";
    document.getElementById("icons").style.marginTop = "1%";
  } else {
    document.getElementById("banner-container").style.top = "0px";
    document.getElementById("topbox").style.display = "flex";
    document.getElementById("scrollsearch").style.display = "none";
  }
}

// call to action reveille/ hide code

function callReveille(){
  document.getElementById("calltext").style.display = "block";
}

function callHide(){
  document.getElementById("calltext").style.display = "none";
}

function subReveille(){
  document.getElementById("hidesub").style.display = "flex";
  document.getElementById("subscribehere").style.marginBottom = "20px";
}

// Articles objects
let articles;

articles = [
           {
            "artname": "Meet the boys",
            "artID": 0,
            "img1" : "media/friends.PNG",
            "img2" : "media/hans.PNG",
            "img3" : "media/tann.PNG",
            "descript" : "here's your chance to meet the boys and get to know them",
            "descript1" : "a cool shot of blank in action",
            "descript2" : "This man is having a chill time",
            "descript3" : "can you feel him flexing on you?",
            "date" : "10/10/2019",
            "body" : "It seemed to be a day like any other day untill... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
           },
           {
            "artname": "Everyone deserves a second chance",
            "artID": 1,
            "img1" : "media/speed.PNG",
            "img2" : "media/lean.PNG",
            "img3" : "media/slide.PNG",
            "descript" : "The triale of a young man, who rose up and proved himself",
            "descript1" : "Using his hands to their full ability",
            "descript2" : "You'd think he's on holliday",
            "descript3" : "Not many can lean like this",
            "date" : "07/05/2023",
            "body" : "It seemed to be a day like any other day untill... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
           },
           {
            "artname": "How we got started",
            "artID": 2,
            "img1" : "media/graphic.png",
            "img2" : "media/tann.PNG",
            "img3" : "media/logofull.png",
            "descript" : "A short insight on how we got started and where we've been",
            "descript1" : "One of the first graphics we used",
            "descript2" : "Our infamous Founders",
            "descript3" : "The simplistic but meaningful desighn of our logo",
            "date" : "25/12/1999",
            "body" : "It seemed to be a day like any other day untill... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
           },
           {
            "artname": "The ideal setup? Perhaps...",
            "artID": 3,
            "img1" : "media/night.PNG",
            "img2" : "media/josh.PNG",
            "img3" : "media/car.PNG",
            "descript" : "Here's how we do our skate seshes",
            "descript1" : "First lines of the day",
            "descript2" : "To meet one's brother is to know ones place in the world",
            "descript3" : "Some have the need for speed, others... not so much",
            "date" : "15/07/2022",
            "body" : "It seemed to be a day like any other day untill... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
           }
]

// Articles code and functions
let artDisplay = parseInt(localStorage.getItem("pagenum"));

function curArticle(i){
  localStorage.setItem("pagenum", i);
}

function genArticle(){
  document.getElementById("img1").src = articles[artDisplay].img1;
  document.getElementById("img2").src = articles[artDisplay].img2;
  document.getElementById("img3").src = articles[artDisplay].img3;
  document.getElementById("desc1").innerHTML = articles[artDisplay].descript1;
  document.getElementById("desc2").innerHTML = articles[artDisplay].descript2;
  document.getElementById("desc3").innerHTML = articles[artDisplay].descript3;
  document.getElementById("arthead").innerHTML = articles[artDisplay].artname;
  document.getElementById("date").innerHTML = articles[artDisplay].date;
  document.getElementById("artbody").innerHTML = articles[artDisplay].body;
}

// Next and previous functions

function nextArt(){
  if (artDisplay == articles.length - 1){
    artDisplay = 0;
  }
  else{
    artDisplay += 1;
  }
  localStorage.setItem("pagenum", artDisplay);
  genArticle();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevArt(){
  if (artDisplay == 0){
    artDisplay = articles.length - 1;
  }
  else{
    artDisplay -= 1;
  }
  localStorage.setItem("pagenum", artDisplay);
  genArticle();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search code
let sboxes = document.getElementsByClassName("search");

for(let i = 0; i < sboxes.length; i++){
  sboxes[i].addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      // document.getElementsById("bigsubmit").click();
      event.preventDefault();
      genResults()
      console.log("bigSubmit");
    }
  })
}

function setSearch(){

  let sItems = document.getElementsByClassName("search");

  for(let i = 0; i < sItems.length; i++){
    if(sItems[i].value){
      localStorage.setItem("sItem", sItems[i].value);
    }
  }
   console.log(localStorage.getItem("sItem"));

}

function genResults(){
  clearRes();

  console.log("clicked");

  document.getElementById("searchItem").value = localStorage.getItem("sItem");

  let resArr = [];

  for(let i = 0; i < articles.length; i++ ){
    if(articles[i].artname.indexOf(localStorage.getItem("sItem") > -1)){
      
      resArr.push(i); 
      
      let result = document.createElement("div");

      result.className = "result";

      document.getElementById("results").appendChild(result);
    }
  }

  let results = document.getElementsByClassName("result");

  for(let i = 0; i < resArr.length; i++){

    let img = document.createElement("img");

    img.src = articles[i].img1;

    let reswords = document.createElement("div")

    reswords.className = "reswords";

    reswords.innerHTML = "<h3>" + articles[i].artname + "</h3>" + "<p>" + articles[i].descript + "</p>";

    results[i].appendChild(img);
    results[i].appendChild(reswords);
  }
}

function clearRes(){
  let parrent = document.getElementById("results");

  while(parrent.firstChild){
    parrent.removeChild(parrent.firstChild);
  }
}


