(function() {
    
    //makes getting elements by ID into shorthand
    //returns an element by ID
    function $(id) { return document.getElementById(id); }
    
    
    //loads the homepage when opening
    window.onload = function() {
        loadHomeLoad();
    };
    
    function loadHomeLoad() {
        $("homepage").classList.remove("hidden");
        $("teampage").classList.add("hidden");
        $("aboutpage").classList.remove("hidden");
        $("home").onclick = loadHomeLoad;
        $("team").onclick = teamPageLoad;
        $("menubutton").onclick = openNav;
        $("closebtn").onclick = closeNav;
        closeNav();
    }
    
    function teamPageLoad() {
        $("homepage").classList.add("hidden");
        $("teampage").classList.remove("hidden");
        $("aboutpage").classList.add("hidden");
        closeNav();
        

    }
    
    function menudrop() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "150px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
  

    
    
    
})();