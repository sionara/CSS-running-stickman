window.onload = function(){
  const stickman = document.getElementById("stickman");
  const obstacle = document.getElementById("obstacle");
  let end = true;

  function jump() {
    end = false;
    stickman.style.animation = 'jump 0.7s linear';
    
    setTimeout(function (){
      stickman.style.animation = 'run 0.8s steps(8) infinite';
      end = true
    }, 700);
  }

  let isAlive = setInterval(function (){ 
    //current y position of stickman
    let stickmanTop = parseInt(window.getComputedStyle(stickman).getPropertyValue("top"));
    //console.log(stickmanTop);
    //current x position of obstacle
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    console.log(obstacleLeft);
    //check for collision
    if (obstacleLeft < 50 && obstacleLeft > 0 && stickmanTop >= 180){
      alert("game over!");
    }
  }, 10)

  document.addEventListener("keydown", function (event) {
    // checking if previous jump animation has ended.
    if (end){
      jump();
    }
  });

  //keep the game speed same for any framerate monitor
  let prevTime = null;
  function gameLoop(currentTime){
    if(prevTime == null){
      prevTime = currentTime;
      requestAnimationFrame(gameLoop);
      return;
    }
    const delta = currentTime-prevTime;
    prevTime = currentTime;
    requestAnimationFrame(gameLoop);
    
  }

  requestAnimationFrame(gameLoop);
}

