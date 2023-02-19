
function changeColors() {
    var colors = ["green", "blue", "white", "yellow", "brown"];
    var container = document.getElementsByClassName("container")[0];
    var button = document.getElementById("myButton");
  
    container.style.backgroundColor = colors[index];
    button.style.backgroundColor = "black";
    button.style.color = colors[index];
    button.innerHTML = colors[index];
    index++;
  
    if (index >= colors.length) {
      index = 0;
    }
  }
  
  var index = 0;
  var button = document.getElementById("myButton");
  button.addEventListener("click", changeColors);
  