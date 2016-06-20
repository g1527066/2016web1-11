//答えを用意
while(1){
var number =Math.floor(Math.random()*3);
var answer =parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));
var flag=false;

var message;
if(answer===number){
  message='あたり！';
flag=true;
}else if(answer<number){
  message='残念！もっと大きいです';
}else if(answer>number){
    message='残念！もっと小さいです';
}else{
  message='0~3の数字を入力してください';
}


//結果を表示
document.getElementById('choice').textContent=message;
if(flag){
break;
}
}

document.write('<img src="./img/51bfac164e73a8ede3755945ce8b9e7f.jpg" width="200" height="130" />');
