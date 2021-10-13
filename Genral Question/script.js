
const showAns=document.querySelectorAll('.question');
// const btns=document.querySelectorAll('.question-btn');
// btns.forEach(function(btn){
//  btn.addEventListener('click',function(e){
//      const ques=e.currentTarget.parentElement.parentElement;
//     ques.classList.toggle("show-text")
//  });
// });
showAns.forEach(function(question){
    const btns=question.querySelector('.question-btn');
    btns.addEventListener("click",function(){
        showAns.forEach(function(item){
            if(item!==question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    });
});