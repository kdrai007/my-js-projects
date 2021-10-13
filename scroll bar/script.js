// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollink=document.querySelectorAll('.scroll-link');
scrollink.forEach(function(Link){
  Link.addEventListener('click',function(e){
    e.preventDefault();
    const id=e.currentTarget.getAttribute("href").slice(1);
    const sectionS=document.getElementById(id);
    //calculate the height
    const navHeight=navbar.getBoundingClientRect().height;
    const conatainerHeight=linksContainer.getBoundingClientRect().height;
    const fixedNav=navbar.classList.contains('fixed-nav');
    let postion=sectionS.offsetTop-navHeight;

    if(!fixedNav){
      postion=postion-navHeight;
    }
    if(navHeight>82){
      postion=postion+conatainerHeight
    }


    
    window.scrollTo({
      left:0,
      top:postion,
    });
    linksContainer.style.height=0;

 
  })

})
// calculate heights