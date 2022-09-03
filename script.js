//header scroll code

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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