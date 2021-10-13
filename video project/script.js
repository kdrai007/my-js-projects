const video=document.querySelector('.video-container');
const switchbtn=document.querySelector('.switch-btn')

switchbtn.addEventListener('click',function(){
    if(!switchbtn.classList.contains("slide")){
        switchbtn.classList.add("slide");
        video.pause();
        
    }
    else{
        switchbtn.classList.remove("slide");
        video.play();
    }
    
})
const preloader=document.querySelector('.preloader')
window.addEventListener('load',function(){
 preloader.classList.add('hide-preloader')
})