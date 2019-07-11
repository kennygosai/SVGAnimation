var btns = document.querySelectorAll(".buttons button");
var bee = document.getElementsByClassName("beesvg")[0];
for (i = 0; i < btns.length; i++){
	btns[i].addEventListener("click", manageBeeClasses);
}

function manageBeeClasses(){
	if(this.getAttribute("data-add")){
		bee.classList.add(this.getAttribute("data-add"));
	}

	if(this.getAttribute("data-remove")){
		bee.classList.remove(this.getAttribute("data-remove"));
	}
}