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
		<link rel="stylesheet" href="./bookify.css">
	somewhere in your html file after the <html> and before </html>

	Your links may not work initally, they need to be added to bookify.js and linked to the other fables.
*/

function makenav(){
	var navdiv = document.getElementById("nav");
	var whereami = document.getElementById("title");
	var wheretonext = {}
	wheretonext["Hello, world!"] = "http://www.github.com";
	var wherewasi = {}
	wherewasi["Hello, world!"] = "http://www.google.com";
	navdiv.innerHTML = `
<ul class="nav" sytle="margins:auto;">
<li id="backButton"><a href="` + wheretonext[whereami.innerText] + `" target="_self">&lsaquo; BACK</a></li>
<li id="nextButton"><a href="` + wherewasi[whereami.innerText] + `" target="_self">NEXT &rsaquo;</a></li>
<li id="tableOfContents"> <a href="fable2.html">TABLE OF CONTENTS</a></li>
</ul>
`;
}
window.onload = makenav;
