var target = document.createElement("div");
    target.id = "hitTarget";
aimStart.addEventListener("click", function(){
    aimGame();
});
target.addEventListener("click", function(){
    hitTarget();
});
var targetsHit = 0;
function aimGame() {
    aimStart.style.display = "none";
    home.style.display = "none";
    aimTitle.style.display = "none";
    var x = Math.floor(Math.random() * (window.innerWidth - 50));
    var y = Math.floor(Math.random() * (window.innerHeight - 50));
    target.style.position = "absolute";
    target.style.left = x + "px";
    target.style.top = y + "px";
    document.body.appendChild(target);
    if (targetsHit >= 10) {
        alert("Congratulations! You hit 10 targets!");
        targetsHit = 0;
        aimStart.style.display = "inline";
        home.style.display = "block";
        aimTitle.style.display = "block";
        target.remove();
    }
    targetsHit = targetsHit + 1;
}
function hitTarget() {
    target.remove();
    aimGame();
}