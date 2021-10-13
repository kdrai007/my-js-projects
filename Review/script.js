const review=[ 
    {
        id:1,
        name:"Kd rai",
        job:"fullstack dev",
        img:"./kdrai.jpg",
        text:"Hey there,this is kd Rai well want any help with your website don't forget to contact me"

    },
    {
        id:2,
        name:"sanjeet rai",
        job:"Waching Diffrent stuffs",
        img:"./monal.jpg",
        text:"Hey there want any suggestionon any movie or and other intresting stuff plese talk with me",
    },
    {
        id:3,
        name:"sujeet rai",
        job:"nothing specfic",
        img:"./sonal.jpg",
        text:"Well,whatever you want help with i can help but don't except too much"

    },
   
];
// About author
const job=document.getElementById('job');
const info=document.getElementById('info');
const author=document.getElementById('author');
const img=document.getElementById('person-img');
// buttons
const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const randomBtn=document.querySelector('.random-btn')
//setting current item
let currentItem=0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem)
});
function showPerson(p){
    const item=review[p];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
  
}
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>review.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=review.length-1;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener('click',function(){
    let randno=Math.floor(Math.random()*3)
    showPerson(randno)

});
    




