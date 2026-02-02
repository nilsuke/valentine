const noBtn=document.getElementById("noBtn");
const zone=document.getElementById("zone");
const yesBtn=document.getElementById("yesBtn");

function runAway(){
 const z=zone.getBoundingClientRect();
 const b=noBtn.getBoundingClientRect();
 const x=Math.random()*(z.width-b.width);
 const y=Math.random()*(z.height-b.height);
 noBtn.style.left=x+"px";
 noBtn.style.top=y+"px";
}

noBtn.addEventListener("mouseenter",runAway);
noBtn.addEventListener("touchstart",runAway);

yesBtn.addEventListener("click",()=>{
 window.location.href="yes.html";
});