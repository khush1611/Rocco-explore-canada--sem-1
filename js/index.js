//``````````  SEARCH BAR ``````````// 
    // storing the element into variable for searchbar
    let $searchBar = window.document.querySelector(".header-searchbar");

    //creating a fucntion to make the searchbar stickey
    function stickeyNavigation(){
        if(window.scrollY > 100){
            $searchBar.classList.add("header-searchbar-sticked");
        }
        else {
            $searchBar.classList.remove("header-searchbar-sticked");
        }
    }

    // calling the fucntion stickeynavigation
    window.addEventListener('scroll', stickeyNavigation)



//``````````  HAMBURGER ``````````// 

    // storing element into variable
    let $hamburger = window.document.querySelector('#hamburger');
    let $sidebar =  window.document.querySelector('#sidebar');
    let $sidebarAllElements = window.document.querySelector('.header-sidebar__col');


    //creating a fucntion to make the searchbar stickey
    function hamburgerClick(){
        $hamburger.classList.toggle('hamburger__icon-click')
         $sidebar.classList.toggle('onClick-sidebar');
         $sidebarAllElements.classList.toggle('visibilty-hidden');
    }
    $hamburger.addEventListener('click', hamburgerClick)
