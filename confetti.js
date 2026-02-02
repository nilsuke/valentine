for(let i=0;i<150;i++){
 const c=document.createElement("div");
 c.style.position="fixed";
 c.style.width="6px";
 c.style.height="6px";
 c.style.background=`hsl(${Math.random()*360},90%,70%)`;
 c.style.left=Math.random()*100+"vw";
 c.style.top="-10px";
 c.style.animation="fall 3s linear";
 document.body.appendChild(c);
 setTimeout(()=>c.remove(),3000);
}