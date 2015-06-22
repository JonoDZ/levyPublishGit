

window.onload=function setImgSize(){

var list = document.getElementById("banner_area");


	var elementChildren = list.children;
	for (var i = 0; i < list.children.length; i++) {
	    
	var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	var windowHeightString = windowHeight.toString() + "px";

	var imgNaturalHeight = list.children[i].naturalHeight;
	var imgNaturalWidth = list.children[i].naturalWidth;
	var imgRatio = imgNaturalHeight/imgNaturalWidth;

	if (windowWidth)


	/*  list.style.height = windowHeight;
	    list.style.width = imgNaturalWidth * imgRatio; */
	    list.children[i].style.height = windowHeightString;
	    list.children[i].style.width = imgNaturalWidth;

	};
};
