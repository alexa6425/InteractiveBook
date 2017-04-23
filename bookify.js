/*
	Steps to bookify:
	
	1. give your title the id "title" so that
	<h1>My fable name!</h1>
		becomes
	<h1 id="title">My Fable name!</h1>
	
	2.Add a div element with the id "nav" at the bottom so that
	<h1 id="title">Hello, world!</h1>
	<p>Lorum ipsum</p>
	<p>Today is a great day!</p>
	:
		becomes
	<h1 id="title">Hello, world!</h1>
	<p>Lorum ipsum</p>
	<p>Today is a great day!</p>
	:
	<div id="nav"></div>
	
	3.Link to the sheets, add
		<script type="text/javascript" src="bookify.js"></script>
		<link rel="stylesheet" href="./fable_style.css">
	somewhere in your html file after the <html> and before </html>

	Your links may not work initally, they need to be added to bookify.js and linked to the other fables.
*/

function makenav(){
	var navdiv = document.getElementById("nav");
	var whereami = window.location;
	var fable_order = [
		"http://aesopht.ml/",
		"http://www.pitt.edu/~nds35/forward.html",
		"http://aesopht.ml/contents.html",
		
		"http://www.pitt.edu/~acs162/CDM/InteractiveBook/fox.html",
		"http://www.pitt.edu/~acs162/CDM/InteractiveBook/donkey.html",
		"http://www.pitt.edu/~ejc58/fable2.html",
		"http://www.pitt.edu/~ejc58/index.html",
		"http://www.pitt.edu/~brp76/fable1.html",
		"http://www.pitt.edu/~brp76/fable2.html",
		"http://www.pitt.edu/~aay11/queen.html",
		"http://www.pitt.edu/~kjb103/shirts.html",
		"http://www.pitt.edu/~kjb103/FreshmanDonkey.html",
		"http://www.pitt.edu/~cmp114/ClassClown.html",
		"http://www.pitt.edu/~cmp114/SpellingBee.html",
		"http://www.pitt.edu/~aay11/peacock.html",
		"http://www.pitt.edu/~jpr47/web%20fables/FINAL/pianist.html",
		"http://www.pitt.edu/~jpr47/web%20fables/FINAL/crowgale.html",
		"http://cogarr.net/files/alex/02/template.html",
		"http://cogarr.net/files/alex/01/template.html",
		"http://www.pitt.edu/~lmm192/rabbit&uniform.html",
		"http://pitt.edu/~jsk60/Fable1.html",
		"http://www.pitt.edu/~lmm192/duck&elephant.html",
		"http://pitt.edu/~jsk60/Fable2.html",
		"http://www.pitt.edu/~chs187/hippo.html",
		"http://www.pitt.edu/~chs187/sheep2.html",
		"http://www.pitt.edu/~acs162/CDM/InteractiveBook/mouse.html",
		"http://www.pitt.edu/~erg52/fable2.html",
		"http://www.pitt.edu/~acs162/CDM/InteractiveBook/Horse.html",
		"http://www.pitt.edu/~nds35/pb.html",
		"http://www.pitt.edu/~rml50/Crow%20Final.html",
		"http://pitt.edu/~mrp82/athleteFable.html",
		"http://www.pitt.edu/~rml50/elephant%20final.html",
		"http://pitt.edu/~mrp82/cheetahFable.html",
		"http://www.pitt.edu/~erg52/fable1.html",
		"http://www.pitt.edu/~lcm38/catfox.html",
		"http://www.pitt.edu/~lcm38/Mouse.html",
		"http://www.pitt.edu/~mas559/CDM/MovingStory/Cat_And_Dogs.html",
		"http://www.pitt.edu/~mas559/CDM/MovingStory/Possum_and_Piano.html",
		
		"http://www.pitt.edu/~nds35/Afterword.html",
	];
	var wheretonext,wherewasi;
	for(var i = 0; i < fable_order.length; i++){
		if(fable_order[i] == whereami){
			wheretonext = fable_order[i+1];
			wherewasi = fable_order[i-1];
			break;
		}
	}
	var build = `<ul class="nav" sytle="margins:auto;">`;
	if(wherewasi != null){
		build += `<li id="backButton"><a href="` + wherewasi + `" target="_self">&lsaquo; BACK</a></li>`;
	}else{
		build += `<li id="backButton">&lsaquo; BACK</li>`;
	}
	if(wheretonext != null){
		build += `<li id="nextButton"><a href="` + wheretonext + `" target="_self">NEXT &rsaquo;</a></li>`;
	}else{
		build += `<li id="nextButton">NEXT &rsaquo;</li>`;
	}

	build += `<li id="tableOfContents"> <a href="http://aesopht.ml/contents.
html">TABLE OF CONTENTS</a></li></ul>`;
	   navdiv.innerHTML = build;
}
window.onload = makenav;
