const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var a = document.querySelector("#elem-con");
var fixed = document.querySelector("#fixed-image");
a.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
});
a.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
});

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})