//array holding the last selected character
var lastChar = ["Xiao", "Albedo", "Kazuha", "Qiqi"];

//function that handles user interaction with dropdown options
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
        //display all dropdown options for the previously selected character
        var lastCharacter = lastChar[panelNo-1];
        changeAllPanels(lastCharacter, "list-item");

        //display second traveler that was removed upon selection of first traveler
        if(lastCharacter == "Traveler(Anemo)") {
            changeAllPanels("Traveler(Geo)", "list-item");
        } else if( lastCharacter == "Traveler(Geo)") {
            changeAllPanels("Traveler(Anemo)", "list-item");
        }
}

// function that changes all 4 panels to display/not display option for a character
function changeAllPanels(charName, displayAttribute){
    document.getElementById(charName + 1).style.display = displayAttribute;
    document.getElementById(charName + 2).style.display = displayAttribute;
    document.getElementById(charName + 3).style.display = displayAttribute;
    document.getElementById(charName + 4).style.display = displayAttribute;
}

//change image and text upon selection of dropdown option
function changeImage(obj, panelNo){
        var characterText = $(obj).text();
        lastChar[panelNo-1]= characterText;
        document.getElementById("char" + panelNo).innerHTML = characterText;
        document.getElementById("img" + panelNo).style.backgroundImage = "url('media/Characters/Gacha-Splashes/" + characterText + ".png')";

        //remove dropdown options for selected character from all panels
        changeAllPanels(characterText, "none");

        //make sure only one traveler can be selected (remove dropdown options for other traveler from all panels)
        if(characterText == "Traveler(Anemo)"){
            changeAllPanels("Traveler(Geo)", "none");
        } else if (characterText == "Traveler(Geo)"){
            changeAllPanels("Traveler(Anemo)", "none");
        }
}

//algorithm that calculates a team rating
function calcscore() {
    var score = 0;


    // call function to change rating html
    calcRating(score);
}

//function to change interface (number stars) based on score
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
