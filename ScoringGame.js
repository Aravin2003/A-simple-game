const drop=document.querySelector("#win");
const score1=document.querySelector(".score1");
const player1=document.querySelector("#p1");
const cond=1;
const classWin=function(a)
{
    a.classList.add("won");
}
const classLost=function(a)
{
    a.classList.add("lost");
}
const classreset=function(a,b)
{
   a.classList.add("reset");
   b.classList.add("reset");
}
player1.addEventListener("click",function()
{
    if(score1.innerText===drop.value||score2.innerText===drop.value)
 {
  cond=0;
 }
   if(score1.innerText<drop.value&&cond===1)
   score1.innerText++;
   if(score1.innerText===drop.value)
   {
    classWin(score1);
   classLost(score2);
   alert("Player1 Won!!");
   }
})
const score2=document.querySelector(".score2");
const player2=document.querySelector("#p2");
player2.addEventListener("click",function()
{
    if(score1.innerText===drop.value||score2.innerText===drop.value)
 {
  cond=0;
 }
    if(score2.innerText<drop.value&&cond===1)
    score2.innerText++;
    if(score2.innerText===drop.value)
    {
    classWin(score2);
    classLost(score1);
    alert("Player2 Won!!");
    }
})
const reset=document.querySelector("#set");
reset.addEventListener("click",function()
{
    score1.innerText=0;
    score2.innerText=0;
    classreset(score1,score2);
    drop.value=10;
})
if(score1.innerText===drop.value||score2.innerText===drop.value)
{
  cond=0;
}
