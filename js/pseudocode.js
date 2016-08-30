
//Welcome to the class - "Artificial General Intelligence"

alert("Welcome to the coure of Artificial general intelligence"); 

// Click the image and answer th questions

//Q1: What are the environmental, social, political, economic effects of Wall-E? 

function prepareEventHandlers() {	
	var myImage = document.getElementById("mainImage");
	myImage.onclick =  function() {
		alert("What are the environmental, social, political, economic effects of Wall-E");
		alert("Research the causes of Artifical general intelligence (who/what is responsible to protect Wall-E?)");
		alert("Make predictions (is Artifical general intelligence inevitable? if so, how can we prolong the survival of our species?");
		alert("Is Artifical general intelligence preventable? if so, how can we reverse and/or halt the effects of Artifical general intelligence?");
	}
}

window.onload = function() {
	// prep anything we need to
	prepareEventHandlers();
};

// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["agi/3.jpg","agi/7.jpg","agi/11.jpg",
				  "agi/12.jpg","agi/6.jpg",];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};

// Advertisement " Join AGI Class" exportaional experience

var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("join").style.position = "absolute";
	document.getElementById("join").style.right = "10px";
    document.getElementById("join").style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // set new position
    currentPos+=5;
    document.getElementById("join").style.right = currentPos + "px";
    // 
    if ( currentPos > 900) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.right = "";
        document.getElementById("join").style.top = "";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,5000);
};


