
var close_btn = document.getElementById("close")
var top_add = document.getElementById("top_add")

close_btn.addEventListener("click", function () {
    console.log(close_btn)
    top_add.style.display = "none"
})


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide")

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var show = x[slideIndex - 1]
    show.style.display = "block";
}

var burger_menu = document.getElementById("burger_menu")
var side_nav = document.getElementById("side_navbar")

burger_menu.addEventListener("click",function(){
    side_nav.style.right="0px"
    
})

var close = document.getElementById("side_navbar__close")
close.addEventListener("click",function(){
    side_nav.style.right="-50%"

})



