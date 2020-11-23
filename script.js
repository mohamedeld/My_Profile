const navbar = document.querySelector(".navbar");
const navbarOffsetTop =navbar.offsetTop;
const sections = document.querySelectorAll("section");

const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercent = [97,89,85,70,60,80,76];
window.addEventListener('scroll',()=>{
   MainFn();
});
const MainFn = ()=>{
    if(window.pageYOffset >=  navbarOffsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

    sections.forEach((section,i) =>{
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove("change")
            })
            navbarLinks[i].classList.add("change")
        }   
    });

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i) => {
            el.style.width=`${progressBarPercent[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = 
            progressBarPercent[i];
        })
    }
}
MainFn();

window.addEventListener('resize',()=>{
    window.location.reload();
})