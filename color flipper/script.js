const colors=["green","red","rgba(132,122,200)","#f1f5025","blue","yellow"]
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    const randomno=getRandom();
    document.body.style.backgroundColor=colors[randomno];
    color.textContent=colors[randomno];
});
function getRandom(){
    return Math.floor(Math.random()*colors.length);
}