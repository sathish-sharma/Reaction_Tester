 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var start=new Date().getTime();
function Resize(){
const shape = document.getElementById("box");
const top = Math.random() * 300;
const left = Math.random() * 300;
const size = Math.random() * 100 + 100;
shape.style.top = top + "px";
shape.style.left = left + "px";
shape.style.width = size + "px";
shape.style.height = size + "px";
shape.style.display = "block";
shape.style.backgroundColor = getRandomColor();
start=new Date().getTime();
        }
        document.getElementById("box").onclick = function(){
            var end=new Date().getTime();
            var timeTaken = (end-start)/1000;
        document.getElementById("time").innerHTML=" Your reaction time is " + timeTaken + " seconds";
         document.getElementById("box").style.display="none";
        Resize();
        }
        Resize();