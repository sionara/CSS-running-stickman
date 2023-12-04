window.onload = function(){
  const stickman = document.getElementById("stickman");

  function jump() {
    stickman.classList.add("jump");
    
    setTimeout(function (){
      stickman.classList.remove("jump");
    }, 700);
  }

  document.addEventListener("keydown", function (event) {
    jump();
  });
}