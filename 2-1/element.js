let target=document.getElementById("target");
console.log(target);

function myfunc(){
    $change= document.getElementById("target");
    $change.textContent = "こんにちは！";
}

let elems= document.getElementsByTagName("h1");
console.log(elems[0]);
console.log(elems[1]); //配列もどきで要素を取得できる！

let boxs= document.getElementsByName("box");
// console.log($boxs.length);→3 配列の長さ
for (let i=0; i < boxs.length; i++){
    console.log(boxs[i]);
}

//document.getElementsByClassNameもあるよ！

"use strict";
//やり方①
// function change(){
    // document.getElementById("square").style.background="red";
// }
//やり方②
//let square = document.getElementById("square1"); 
//square.onclick= function(){
    //square.style.backgroundColor="red";
//} 関数は１つしか入れられない
//やり方③
let square= document.getElementById("square1");
square.addEventListener("click", function(){
    square.style.backgroundColor="red";
}, false);
//関数を複数入れられる
