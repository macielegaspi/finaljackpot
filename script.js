// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

var s1 = document.getElementById("slot1");
var s2 = document.getElementById("slot2");
var s3 = document.getElementById("slot3");
var mySound = document.getElementById('you-win');

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImg(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		s1.classList.remove("opaque");
		s2.classList.remove("opaque");
		s3.classList.remove("opaque");
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
		s1.classList.remove("opaque");
		s2.classList.remove("opaque");
		s3.classList.remove("opaque");
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		s1.classList.remove("opaque");
		s2.classList.remove("opaque");
		s3.classList.remove("opaque");
	} else {
		// do nothing
	}
}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}

function checkColors(){
	if (s1.src.match("images/cherry_slot.PNG") && s2.src.match("images/cherry_slot.PNG") && s3.src.match("images/cherry_slot.PNG")){
		mySound.play();
		s1.classList.add("opaque");
		s2.classList.add("opaque");
		s3.classList.add("opaque");
	} else if (s1.src.match("images/lemon_slot.PNG") && s2.src.match("images/lemon_slot.PNG") && s3.src.match("images/lemon_slot.PNG")){
		mySound.play();
		s1.classList.add("opaque");
		s2.classList.add("opaque");
		s3.classList.add("opaque");
	} else if (s1.src.match("images/orange_slot.PNG") && s2.src.match("images/orange_slot.PNG") && s3.src.match("images/orange_slot.PNG")){
		mySound.play();
		s1.classList.add("opaque");
		s2.classList.add("opaque");
		s3.classList.add("opaque");
	}
}
// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

