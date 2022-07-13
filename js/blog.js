var img = document.getElementById("img1");

img.addEventListener("mouseover",function(){
    this.src = "../pic/88.jpg"; 
    })
    
img.addEventListener("mouseout", function(){
    this.src = "../pic/77.jpg";
    })

var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");
//console.log(btn);
btn.addEventListener("click",function(){
    console.log(list.innerHTML);
    list.innerHTML = list.innerHTML + 
    `<div class="article">
    <h2>${title.value}</h2>
    <p>${content.value}</p>
    <hr>
    </div>`;
    title.value = "";
    content.value = "";
})

