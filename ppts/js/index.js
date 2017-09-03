function run(obj,span){
	var result = '';
	var obj = document.getElementById(obj);
	eval(obj.innerText);
	document.getElementById(span).innerText = result;
}
