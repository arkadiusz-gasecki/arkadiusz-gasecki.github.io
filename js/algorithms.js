
function laduj(text,element){
	document.getElementById("frame").src = text;
	try{
	x = document.getElementsByClassName("nav-link-active");

	for (var i=0; i < x.length; i++){
		x[i].classList.remove("nav-link-active");
	}
	}
	catch(error){}
	element.classList.add("nav-link-active");
	dynamic_hide();
}

function dynamic_hide(){
	try{
	x = document.getElementsByClassName("nav-link-inner");

	for (var i=0; i < x.length; i++){
		x[i].style.display = "none";
	}
	}
	catch(error){}
}

function dynamic_show(){
	try{
	x = document.getElementsByClassName("nav-link-inner");

	for (var i=0; i < x.length; i++){
		x[i].style.display = "block";
	}
	}
	catch(error){}
}