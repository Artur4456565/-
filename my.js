var prNum,tempOut;
prNum=Math.floor((Math.random()*10)+1);

tempOut=document.getElementById('temp-out');
tempOut.innerHTML=prNum;

console.log(prNum);

function f1() {
	var num,out;
	num=document.getElementById("mynum").value;
	out=document.getElementById("out");
	if (num==prNum){
		out.innerHTML='Вы угадали';
	}
	else if(num>prNum){
		out.innerHTML='Вы ввели больше, чем нужно';
	}
	else{
		out.innerHTML='Вы ввели меньше, чем нужно';
	}
}