function play(pad, index) {
  var aud = pad.querySelector("audio");
  aud.currentTime = 0;
  aud.play();
  //create a function that makes the bubbles pop
  createBubbles(index);
};

const visual = document.querySelector(".visual");
const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3"
];

function createBubbles(index) {
  const bubble = document.createElement('div');
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = "jump 1s ease";
  bubble.addEventListener("animationend", function() {
    visual.removeChild(this);
  });
};

document.addEventListener("keypress",function(e){
  var key = e.key;
  switch(key){
    case "s":
    document.getElementById("p1").play();
    document.getElementById("p1").currentTime = 0;
    createBubbles(0);
    break;
    case "d":
    document.getElementById("p2").play();
    document.getElementById("p2").currentTime = 0;
    createBubbles(1);
    break;
    case "f":
    document.getElementById("p3").play();
    document.getElementById("p3").currentTime = 0;
    createBubbles(3);
    break;
    case "g":
    document.getElementById("p4").play();
    document.getElementById("p4").currentTime = 0;
    createBubbles(4);
    break;
    case "h":
    document.getElementById("p5").play();
    document.getElementById("p5").currentTime = 0;
    createBubbles(5);
    break;
    case "j":
    document.getElementById("p6").play();
    document.getElementById("p6").currentTime = 0;
    createBubbles(6);
    break;
  }
});
