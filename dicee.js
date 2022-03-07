// var play1=prompt("歡迎來到骰子大PK, 請輸入對戰者1的名字");
// var play2=prompt("歡迎來到骰子大PK, 請輸入對戰者2的名字");



// diceleft
var randomnumber1 = Math.floor((Math.random()) * 6) + 1;
var randomsrc1="images/dice"+randomnumber1+".png"
document.querySelector("img.img1").setAttribute("src",randomsrc1);
// diceright
var randomnumber2 = Math.floor((Math.random()) * 6) + 1;
var randomsrc2="images/dice"+randomnumber2+".png";
document.querySelector("img.img2").setAttribute("src",randomsrc2);
//who win
if (randomnumber1===randomnumber2){
   document.querySelector("h1").innerHTML="😀平局😀";
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="💪玩家1獲勝";
    document.querySelectorAll(".dice p")[0].innerHTML="💪玩家 1";
}
else{
    document.querySelector("h1").innerHTML="玩家2獲勝💪";
    document.querySelectorAll(".dice p")[1].innerHTML="玩家 2💪";
}
