var people =[{name:"高彤彤",pic:"001.jpg"},{name:"彤彤",pic:"002.jpg"}
,{name:"高彤",pic:"003.jpg"},{name:"高",pic:"004.jpg"},
{name:"彤",pic:"005.jpg"}
];
function turnpic(){
	var picc=document.getElementById("picone");
	var peoname=document.getElementById("username");
	var ransum=Math.floor((Math.random()*40+1)/10);
	picc.src="img/"+people[ransum].pic;
	peoname.innerText=people[ransum].name;	
}
var btn=document.getElementById("btn");
var flag=true;
var xiaoguo;
btn.onclick=function(){
	  if(flag){
	  	btn.value="停止";
	  	xiaoguo=setInterval("turnpic()",1);
	  	flag=false;
	  }
	  else{
		btn.value="开始";
		flag=true;
		clearInterval(xiaoguo);
	}
}
