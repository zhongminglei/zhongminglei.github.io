function showPic(whichpic){
if(!document.getElementById("placeholder")) return false;
var source=whichpic.getAttribute("href");
var placeholder=document.getElementById("placeholder");
if(placeholder.nodeName != "IMG") return false;
placeholder.setAttribute("src",source);
if(document.getElementById("description")){
var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
var description=document.getElementById("description");
if(description.firstChild.nodeType==3){
description.firstChild.nodeValue=text;
}
}
return true;
}


function prepareGallery(){
if(!document.getElementsByTagName) return false;
var links=document.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
links[i].onclick = function(){
showPic(this);
return false;
}
}
}
function addLoadEvent(){
var oldonload = window.onload;
if(typeof oldonload == 'function'){
oldonload();
prepareGallery();
}
else{
window.onload=prepareGallery;
}
}
addLoadEvent();