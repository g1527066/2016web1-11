//答えを用意
while(1){
var number =Math.floor(Math.random()*3);
var answer =parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));
var flag=0;

var message;
if(answer===number){
  message='あたり！';
flag=1;
}else if(answer<number){
  message='残念！もっと大きいですよえｗｗｗ';
flag=2;
  
  
}else if(answer>number){
    message='残念！もっと小さいです';
flag=3;
}else{
  message='0~3の数字を入力してください';
}


//結果を表示
document.getElementById('choice').textContent=message;
if(flag==1){
  document.write('<img src="./img/51bfac164e73a8ede3755945ce8b9e7f.jpg" width="400" height="260" />');
break;
}
else if(flag==2)
{
    document.write('<img src="./img/51bfac164e73a8ede3755945ce8b9e7f.jpg" width="400" height="260" />');
}

}

