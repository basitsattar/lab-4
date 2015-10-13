   var enemyNumber=1;
   var score=0;
   var health =100;
    function leftArrowPressed() {
        var element = document.getElementById("plane");
        if(parseInt(element.style.left)>100){
            element.style.left = parseInt(element.style.left) - 50 + 'px';
        }
    }

    function rightArrowPressed() {
        var element = document.getElementById("plane");
        if(parseInt(element.style.left)<1300){
            element.style.left = parseInt(element.style.left) + 50 + 'px';
        }

    }

    function upArrowPressed() {
        var element = document.getElementById("plane");
        if(parseInt(element.style.top)>0){
            element.style.top = parseInt(element.style.top) - 50 + 'px';
        }
    }

    function downArrowPressed() {
        var element = document.getElementById("plane");
        if(parseInt(element.style.top)<550){
            element.style.top = parseInt(element.style.top) + 50 + 'px';
        }
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };

function docReady()
{ 
  window.addEventListener('keydown', moveSelection);
  document.getElementById('score').innerHTML = score;
  document.getElementById('health').innerHTML = health;
  checkDetection();
}
function checkDetection(){
     var enemies = document.getElementsByClassName("enemy");
    var plane= document.getElementById("plane");
    for (i = 0; i < enemies.length; i++) {
         element=enemies[i];
        
        if(isCollide(element,plane)){
            
            if(health>25){
                element.style.display = "none";
                health-=25;
                document.getElementById('health').innerHTML = health;
            }else{
                 for (i = 0; i < enemies.length; i++) {
                    element=enemies[i];
                    element.style.display="none";
                    plane.style.top="0px";
                    plane.style.left="0px";
                 }
                if(!alert('Game Over.\nGame will restart.')){window.location.reload();}
            }
        }
     }
    setTimeout('addScore()',100);
    setTimeout('checkDetection()',100);
    
}
function addScore(){
    var enemies = document.getElementsByClassName("enemy");
    for (i = 0; i < enemies.length; i++) {
         element=enemies[i];
        if(element.offsetLeft < 0 ){
            score++;
            document.getElementById('score').innerHTML = Math.floor(score/10);
            element.style.left="1900px";
        }
     }
}
function isCollide(a, b) {
    return !(
        ((a.offsetTop + a.clientHeight) < (b.offsetTop)) ||
        (a.offsetTop > (b.offsetTop + b.clientHeight)) ||
        ((a.offsetLeft + a.clientWidth) < b.offsetLeft) ||
        (a.offsetLeft > (b.offsetLeft + b.clientWidth))
    );
}
