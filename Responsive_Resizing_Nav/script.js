var nav = document.querySelector('nav');
function menuToggle(){
    if (nav.classList == "nav large" || nav.classList == "nav small"){
        nav.classList.add("responsive");
    } else {
        nav.classList.remove("responsive");
    }
};
function menuResizer(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        nav.classList.add("small");
        nav.classList.remove("large");
    } else {
        nav.classList.add("large");
        nav.classList.remove("small");
    }
};
function closeMenu(){
    var query = 800;
    if (window.innerWidth > query || window.clientWidth > query){
        if (nav.classList.contains("responsive")){
            nav.classList.remove("responsive");
        }
    }
}



window.addEventListener("scroll", menuResizer);
window.addEventListener("resize", closeMenu);