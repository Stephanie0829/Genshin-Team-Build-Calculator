var lastChar = ["Xiao", "Albedo", "Kazuha", "Qiqi"];

$(document).ready(function(){
	$("#panel1 .dropdown button").click(function(){
        resetOptions(1);
		 changeImage(this, 1);
	});
	$("#panel2 .dropdown button").click(function(){
         resetOptions(2);
		 changeImage(this, 2);
	});
	$("#panel3 .dropdown button").click(function(){
         resetOptions(3);
		 changeImage(this, 3);
	});
	$("#panel4 .dropdown button").click(function(){
         resetOptions(4);
		 changeImage(this, 4);
	});
});

function resetOptions(panelNo){
        var lastCharacter = lastChar[panelNo-1];
        document.getElementById(lastCharacter + 1).style.display = "list-item";
        document.getElementById(lastCharacter + 2).style.display = "list-item";
        document.getElementById(lastCharacter + 3).style.display = "list-item";
        document.getElementById(lastCharacter + 4).style.display = "list-item";
}

function changeImage(obj, panelNo){
        var characterText = $(obj).text();
        lastChar[panelNo-1]= characterText;
        document.getElementById("char" + panelNo).innerHTML = characterText;
        document.getElementById("img" + panelNo).style.backgroundImage = "url('media/Characters/Gacha-Splashes/" + characterText + ".png')";

        //set other dropdown options to none if a character is selected
        for(var i = 1; i<=4; i++){
            if(panelNo!=i){
                document.getElementById(characterText + i).style.display = "none";
            }
        }
}
function calcscore() {
    var score = 0;


    // call function to change rating html
    calcRating(score);
}


function calcRating(score){
    var starimg = document.getElementById("rating-img");
    starimg.style.display = "block";
    // divide score into 5 sections (consider a score out of 100 points)
    if(score >=0 && score <= 19){ //1 star
        starimg.src = "media/Utilities/1star.png";
    } else if(score >=20 && score <=39) {//2 star
        starimg.src = "media/Utilities/2stars.png";
    } else if(score >=40 && score <=59) {//3 star
        starimg.src = "media/Utilities/3stars.png";
    } else if(score >=60 && score <=79) {//4 star
        starimg.src = "media/Utilities/4stars.png";
    } else {//5 star
        starimg.src = "media/Utilities/5stars.png";
    }
}
