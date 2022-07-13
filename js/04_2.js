
var img = document.getElementById("img");

img.addEventListener("mouseover",function(){
this.src = "../pic/house2.jpg"; 
})

img.addEventListener("mouseout", function(){
    this.src = "../pic/house1.jpg";
})