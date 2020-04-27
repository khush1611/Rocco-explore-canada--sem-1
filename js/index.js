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



//``````````  Progress bar ``````````// 

const $doc = document
const $progressBar = $doc.getElementById(`progress-bar`)


//``````````  Infinite Content ``````````// 
var infinitecontent = $doc.querySelector('.infinite'); // section to add the content
var gallerycontent = $doc.querySelector('.gallery-content'); //take the data from gallery-content class


//`````````` Scroll Event Handler ``````````//
window.addEventListener(`scroll`, () => {  

// To Implement Progress Bar    
    const progressPercentage = ( window.scrollY/($doc.documentElement.scrollHeight - $doc.documentElement.clientHeight) ) * 100 
     $progressBar.style.width = `${progressPercentage}%` // Change the width property of progress bar as per the calculated percentage
    // $progressBar.innerText = 'Your progress: '+ Math.floor(progressPercentage)+'%';

// To implement infinte content 
    //  ref: http://jsfiddle.net/8PkQN/1/

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //alert("you're at the bottom of the page");
        infinitecontent.innerHTML += gallerycontent.innerHTML; // 
    }
});
