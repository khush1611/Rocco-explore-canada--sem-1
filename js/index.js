// storing the element into variable
let $searchBar = window.document.querySelector(".header-searchbar");

function stickyNavigation(){
    if(window.scrollY > 100){
        $searchBar.classList.add("header-searchbar-sticked");
    }
    else {
        $searchBar.classList.remove("header-searchbar-sticked");
    }
}

window.addEventListener('scroll', stickyNavigation)
