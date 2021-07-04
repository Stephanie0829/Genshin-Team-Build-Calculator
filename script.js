//array holding the last selected character
var lastChar = ["Xiao", "Albedo", "Kazuha", "Qiqi"];
//function that handles user interaction with dropdown options
let characters = new Map();
characters.set("Keqing", {Element: "Electro", mdps: "S", sdps : "NA", support: "NA"});
characters.set("Klee", {Element: "Pyro", mdps: "S", sdps : "S", support: "B"});
characters.set("Lisa", {Element: "Electro", mdps: "NA", sdps : "C", support: "C"});
characters.set("Mona", {Element: "Hydro", mdps: "B", sdps : "S", support: "S"});
characters.set("Ningguang", {Element: "Geo", mdps: "A", sdps : "NA", support: "C"});
characters.set("Noelle", {Element: "Geo", mdps: "A", sdps : "NA", support: "B"});
characters.set("Qiqi", {Element: "Cryo", mdps: "NA", sdps : "NA", support: "A"});
characters.set("Razor", {Element: "Electro", mdps: "A", sdps : "NA", support: "NA"});
characters.set("Rosaria", {Element: "Cryo", mdps: "C", sdps : "A", support: "B"});
characters.set("Sucrose", {Element: "Anemo", mdps: "NA", sdps : "A", support: "SS"});
characters.set("Tartaglia", {Element: "Hydro", mdps: "S", sdps : "S", support: "A"});
characters.set("Traveler(Anemo)", {Element: "Anemo", mdps: "NA", sdps : "C", support: "NA"});
characters.set("Traveler(Geo)", {Element: "Geo", mdps: "NA", sdps : "C", support: "B"});
characters.set("Venti", {Element: "Anemo", mdps: "NA", sdps : "SS", support: "SS"});
characters.set("Xiangling", {Element: "Pyro", mdps: "NA", sdps : "A", support: "NA"});
characters.set("Xiao", {Element: "Anemo", mdps: "SS", sdps : "NA", support: "NA"});
characters.set("Xingqiu", {Element: "Hydro", mdps: "NA", sdps : "SS", support: "A"});
characters.set("Xinyan", {Element: "Pyro", mdps: "B", sdps : "NA", support: "A"});
characters.set("Yanfei", {Element: "Pyro", mdps: "A", sdps : "NA", support: "NA"});
characters.set("Zhongli", {Element: "Geo", mdps: "NA", sdps : "S", support: "SS"});

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

// function that changes 3/4 panels to display/not display option for a character
//panelNo by default is 5 for applying change to all 4 panels
function changeAllPanels(charName, displayAttribute, panelNo=5){
    for(var i = 1; i<=4; i++){
        if(i!=panelNo){
            document.getElementById(charName + i).style.display = displayAttribute;
        }
    }
}

//change image and text upon selection of dropdown option
function changeImage(obj, panelNo){
        var characterText = $(obj).text();
        lastChar[panelNo-1]= characterText;
        document.getElementById("char" + panelNo).innerHTML = characterText;
        document.getElementById("img" + panelNo).style.backgroundImage = "url('media/Characters/Gacha-Splashes/" + characterText + ".png')";

        //remove dropdown options for selected character from all panels
        changeAllPanels(characterText, "none");

        //make sure only one traveler can be selected (remove dropdown options for other traveler from all panels not itself)
        if(characterText == "Traveler(Anemo)"){
            changeAllPanels("Traveler(Geo)", "none", panelNo);
        } else if (characterText == "Traveler(Geo)"){
            changeAllPanels("Traveler(Anemo)", "none", panelNo);
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
