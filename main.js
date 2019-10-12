/*************************
 *  @description 
 *  This program is to add img into Main 
 *  
 *  @author 
 *  Full name: Jian(Inja Kim)
 *  Algonquin username: kim00383@algonquinlive.com
 *
 *  @version 
 *  2019.10.12
 ***********************/


document.addEventListener("click", function(){
    let min=100; 
    let max=500;  
    let random = Math.floor(Math.random() * (max - min + 1) + min);
 
   var main = document.getElementById("main");
   var img = document.createElement("img");

img.src="https://picsum.photos/id/"+random+"/200/300";
img.id="img"+random;
img.alt="imgAlt"+random;
img.addEventListener("load", imageLoadCallBack);
img.addEventListener("error", imageErrorCallBack);

});

function imageLoadCallBack(e){
    let mainTag=document.querySelector("main");
    mainTag.appendChild(e.target);
}

function imageErrorCallBack(e){
    alert("No image could be loaded. Please click again.");
}