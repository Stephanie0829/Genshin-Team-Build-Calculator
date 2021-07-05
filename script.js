//array holding the last selected character
var lastChar = ["Xiao", "Albedo", "Kazuha", "Qiqi"];
var score = 0;
var select1 = false;
var select2 = false;
var select3 = false;
var select4 = false;
//function that handles user interaction with dropdown options
let characters = new Map();
characters.set("Albedo",{Element: "Geo", mdps: "N/A", sdps: "SS", support: "SS"}); 
characters.set("Amber",{Element: "Pyro", mdps:"C",sdps:"C",support:"N/A"});
characters.set("Barbara",{Element: "Hydro", mdps: "N/A", sdps: "N/A", support: "A"});  
characters.set("Beidou",{Element: "Electro", mdps: "B", sdps: "B", support: "N/A"});
characters.set("Bennett",{Element: "Pyro", mdps: "N/A", sdps: "N/A", support: "SS"});  
characters.set("Chongyun",{Element: "Cryo", mdps: "C", sdps: "A", support: "B"}); 
characters.set("Diluc",{Element: "Pyro", mdps: "S", sdps: "N/A", support: "N/A"});
characters.set("Diona",{Element: "Cryo", mdps: "N/A", sdps: "N/A", support: "SS"});
characters.set("Eula",{Element: "Cryo", mdps: "SS", sdps: "N/A", support: "N/A"}); 
characters.set("Fischl",{Element: "Electro", mdps: "B", sdps: "S", support: "N/A"});
characters.set("Ganyu",{Element: "Cryo", mdps: "SS", sdps: "SS", support: "N/A"});
characters.set("Hu Tao",{Element: "Pyro", mdps: "SS", sdps: "N/A", support: "N/A"});
characters.set("Jean",{Element: "Anemo", mdps: "C", sdps: "N/A", support: "S"});
characters.set("Kaeya",{Element: "Cryo", mdps: "N/A", sdps: "A", support: "N/A"});    
characters.set("Kazuha",{Element: "Anemo", mdps: "N/A", sdps: "SS", support: "SS"}); 
characters.set("Keqing", {Element: "Electro", mdps: "S", sdps : "N/A", support: "NA"});
characters.set("Klee", {Element: "Pyro", mdps: "S", sdps : "S", support: "B"});
characters.set("Lisa", {Element: "Electro", mdps: "N/A", sdps : "C", support: "C"});
characters.set("Mona", {Element: "Hydro", mdps: "B", sdps : "S", support: "S"});
characters.set("Ningguang", {Element: "Geo", mdps: "A", sdps : "N/A", support: "C"});
characters.set("Noelle", {Element: "Geo", mdps: "A", sdps : "N/A", support: "B"});
characters.set("Qiqi", {Element: "Cryo", mdps: "N/A", sdps : "N/A", support: "A"});
characters.set("Razor", {Element: "Electro", mdps: "A", sdps : "N/A", support: "N/A"});
characters.set("Rosaria", {Element: "Cryo", mdps: "C", sdps : "A", support: "B"});
characters.set("Sucrose", {Element: "Anemo", mdps: "N/A", sdps : "A", support: "SS"});
characters.set("Tartaglia", {Element: "Hydro", mdps: "S", sdps : "S", support: "A"});
characters.set("Traveler(Anemo)", {Element: "Anemo", mdps: "N/A", sdps : "C", support: "N/A"});
characters.set("Traveler(Geo)", {Element: "Geo", mdps: "N/A", sdps : "C", support: "B"});
characters.set("Venti", {Element: "Anemo", mdps: "N/A", sdps : "SS", support: "SS"});
characters.set("Xiangling", {Element: "Pyro", mdps: "N/A", sdps : "A", support: "N/A"});
characters.set("Xiao", {Element: "Anemo", mdps: "SS", sdps : "N/A", support: "N/A"});
characters.set("Xingqiu", {Element: "Hydro", mdps: "N/A", sdps : "SS", support: "A"});
characters.set("Xinyan", {Element: "Pyro", mdps: "B", sdps : "N/A", support: "A"});
characters.set("Yanfei", {Element: "Pyro", mdps: "A", sdps : "N/A", support: "N/A"});
characters.set("Zhongli", {Element: "Geo", mdps: "N/A", sdps : "S", support: "SS"});

$(document).ready(function(){
	$("#panel1 .dropdown button").click(function(){
        resetOptions(1);
         changeImage(this, 1);
         select1 = true;
	});
	$("#panel2 .dropdown button").click(function(){
         resetOptions(2);
         changeImage(this, 2);
         select2 = true;
	});
	$("#panel3 .dropdown button").click(function(){
         resetOptions(3);
         changeImage(this, 3);
         select3 = true;
	});
	$("#panel4 .dropdown button").click(function(){
         resetOptions(4);
         changeImage(this, 4);
         select4 = true;
	});
});

function resetOptions(panelNo){
        score = 0;
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
    if(select1 && select2 && select3 && select4){ 
        score = 0;
        //elemental resonance
        //find number of same elements in team composition
        var numAnemo,  numElectro, numGeo, numHydro, numCryo, numPyro = 0;
        var charElement = "";
        for(var i = 0; i<=3; i++){
            charElement = characters.get(lastChar[i]).Element;
            if(charElement == "Anemo"){
                numAnemo++;
            } else if(charElement == "Electro") {
                numElectro++;
            } else if(charElement == "Geo") {
                numGeo++;
            } else if(charElement == "Hydro") {
                numHydro++;
            } else if(charElement == "Cryo") {
                numCryo++;
            } else { //element is Pyro
                numPyro++;
            }
        }

        //add points for elemental resonance
        EResonanceWeights(numAnemo);
        EResonanceWeights(numElectro);
        EResonanceWeights(numGeo);
        EResonanceWeights(numHydro);
        EResonanceWeights(numCryo);
        EResonanceWeights(numPyro);

        //if 4 different element characters
        if(numAnemo < 2 && numElectro < 2 && numGeo < 2 && numHydro < 2 && numCryo < 2 && numPyro < 2 ){
            score+=10;
        }


        //Calculate effectiveness of character in the specific rolw
        PositionWeights(characters.get(lastChar[0]).mdps);
        PositionWeights(characters.get(lastChar[1]).sdps);
        PositionWeights(characters.get(lastChar[2]).support);
        PositionWeights(characters.get(lastChar[3]).support);

        // call function to change rating html
        calcRating(score);
    }
}

//function to change interface (number stars) based on score
function calcRating(score){
    var starimg = document.getElementById("rating-img");
    starimg.style.display = "block";
    // divide score into 5 sections (consider a score out of 100 points)
    if(score >=0 && score <= 99){ //1 star
        starimg.src = "media/Utilities/1star.png";
    } else if(score >=100 && score <=199) {//2 star
        starimg.src = "media/Utilities/2stars.png";
    } else if(score >=200 && score <=299) {//3 star       
        starimg.src = "media/Utilities/3stars.png";
    } else if(score >=300 && score <=399) {//4 star
        starimg.src = "media/Utilities/4stars.png";
    } else {//5 star
        starimg.src = "media/Utilities/5stars.png";
    }
    console.log(score);
}

function PositionWeights(tier){
    switch(tier){
        case "SS":
            score += 55;
            break;
        case "S":
            score += 45;
            break;
        case "A":
            score += 30;
            break;
        case "B":
            score += 20;
            break;
        case "C":
            score += 5;
            break;
    }
}

function EResonanceWeights(numelement){
    if(numelement>=2){
        score+=10;
    }
}