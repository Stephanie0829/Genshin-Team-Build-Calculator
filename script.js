//array holding the last selected character
var lastChar = ["Xiao", "Zhongli", "Kazuha", "Qiqi"];
//global score variable used for calculating stars
var score = 0;
//booleans to determine if all characters selected
var select1 = false;
var select2 = false;
var select3 = false;
var select4 = false;
//create total output string
var outputstr = "insert feedback text";
//map holding the characteristics of certain characters
let characters = new Map();
characters.set("Albedo",{Element: "Geo", mdps: "N/A", sdps: "SS", support: "SS"}); 
characters.set("Amber",{Element: "Pyro", mdps:"C",sdps:"C",support:"N/A"});
characters.set("Ayaka",{Element: "Cryo", mdps: "SS", sdps: "S", support: "N/A"});  
characters.set("Barbara",{Element: "Hydro", mdps: "SS", sdps: "S", support: "A"});  
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
characters.set("Sayu", {Element: "Anemo", mdps: "B", sdps : "A", support: "A"});
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
characters.set("Yoimiya",{Element: "Pyro", mdps: "SS", sdps: "N/A", support: "N/A"});  
characters.set("Zhongli", {Element: "Geo", mdps: "N/A", sdps : "S", support: "SS"});

//function taking care of button onclick for options in dropdown menu
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

//function that redisplays options that can be displayed
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
        changeAllPanels(characterText, "none", panelNo);

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

        //create header
        outputstr = "<h1>Team Analysis of "  + "<span id = 'firstchar'>" + lastChar[0] + "</span>" + " "
        + "<span id = 'secondchar'>" + lastChar[1] + "</span>" + " "
        + "<span id = 'thirdchar'>" + lastChar[2] + "</span>" + " "
        + "<span id = 'fourthchar'>" + lastChar[3] + "</span>"
        + "</h1>";

        //calculate weights for positions chosen
        calculatePosition();

        //calculate resonance weights
        calculateResonance();

        //calculate elemental reactions
        calculateElementalReaction();

        // call function to change rating html
        calcRating(score);
    }
}

//function to change interface (number stars) based on score
function calcRating(score){
    var starimg = document.getElementById("rating-img");
    starimg.style.display = "block";
    // divide score into 5 sections (consider a score out of 100 points)
    if(score <= 86){ //1 star
        starimg.src = "media/Utilities/1star.png";
    } else if(score <=173) {//2 star
        starimg.src = "media/Utilities/2stars.png";
    } else if(score <=260) {//3 star       
        starimg.src = "media/Utilities/3stars.png";
    } else if(score <=299) {//4 star
        starimg.src = "media/Utilities/4stars.png";
    } else {//5 star
        starimg.src = "media/Utilities/5stars.png";
    }
    outputstr += "</br></br>";
    document.getElementById("item-feedback").innerHTML = outputstr;
}

//HELPER FUNCTIONS
function PositionWeights(tier){
    switch(tier){
        case "SS":
            score += 55;
            return "SS";
        case "S":
            score += 45;
            return "S";
        case "A":
            score += 30;
            return "A";
        case "B":
            score += 20;
            return "B";
        case "C":
            score += 5;
            return "C";
        default:
            return "Unranked";
    }
}

//adds 10 for each duplicate element
function EResonanceWeights(numelement, element){
    if(numelement>=2){
        score+=5;
        switch(element){
            case "pyro":
                outputstr += "Fervent Flames</br>\u2265 2 pyro: Elemental and Physical RES +15%</br></br>"
                break;
            case "cryo":
                outputstr += "Shattering Ice</br>\u2265 2 cryo: 40% less time affected by electro element. For enemies affected by cryo, CRIT rate is incresed by 15%</br></br>"
                break;
            case "hydro":
                outputstr += "Soothing Waters</br>\u2265 2 hydro: Pyro effects are less probable (by 40% of the time). 30% more healing.</br></br>"
                break;
            case "geo":
                outputstr += "Enduring Rock</br>\u2265 2 geo: 15% more shield strength. Characters with shield have 15% more DMG, and for 15 seconds attacked enemies will have 20% less geo RES</br></br>"
                break;
            case "anemo":
                outputstr += "Impetuous Winds</br>\u2265 2 anemo: Consumed stamina decreased by 15%, faster movement speed (by 10%), and skill CD a shorter time (by 5%)</br></br>"
                break;
            case "electro":
                outputstr += "High Voltage</br>\u2265 2 electro: Overload, electro-charge, and superconduct are guaranteed to create an electro particle with CD of 5 seconds. Cryo effects are less probable (by 40% of the time)</br></br>"
                break;
        }
    }
}

function calculatePosition(){
    //Calculate effectiveness of character in the specific role
    //update output text and call score updating functions
    var mdpschar = PositionWeights(characters.get(lastChar[0]).mdps);
    var sdpschar = PositionWeights(characters.get(lastChar[1]).sdps);
    var support1char = PositionWeights(characters.get(lastChar[2]).support);
    var support2char = PositionWeights(characters.get(lastChar[3]).support);

    //title
    outputstr += "<h3>Improve Character Selection with Alternatives:</h3>"
    outputstr += "* Note: Alternatives are characters for the position ranked one tier above the selected character</br>* For reference, the tiers from lowest to highest: Unranked, C, B, A, S, SS</br></br>"

    //special case
    if(mdpschar == "SS" && sdpschar == "SS" && support1char == "SS" && support2char == "SS" )
        outputstr += "<p>None - all positions are rated SS</p>"
    else {
        //call update output text functions
        outputPosition(mdpschar, 'mdps', "Main dps");
        outputPosition(sdpschar, 'sdps', "Sub dps");
        outputPosition(support1char, 'support', "First support");
        outputPosition(support2char, 'support', "Second support");
    }
    
}

//creates the proper output text
function outputPosition(rating, position, textposition){
    if(rating != "SS"){
        outputstr += "<b> " + textposition +  " was rated: " + rating + "</b></br>";
        outputstr += "Alternatives: "
        newlist = getBetterChars(rating, position);
        for (var i = 0; i<newlist.length-1; i++){
            outputstr+= newlist[i] + ", ";
        }
        outputstr+= newlist[i] + "</br>";
    } else {
        outputstr += "<b> " + textposition +  " was rated: SS</b></br>"
        outputstr += "No alternatives for improvement</br>";
    }
    outputstr += "</br>";
}

//obtains the rank one above the selected character
function getBetterChars(ranking, position) {
    var nextrank = "Unranked";
    var charlist = [];

    //obtain rank above
    for (let [key, value] of characters) {
        switch(ranking){
            case "Unranked":
                nextrank = "C"
                break;
            case "C":
                nextrank = "B"
                break;
            case "B":
                nextrank = "A"
                break;
            case "A":
                nextrank = "S"
                break;
            case "S":
                nextrank = "SS"
                break;
        }
        //put each character that is a rank above within an array
      if (value[position] == nextrank)
        charlist.push(key);
    }
    return charlist;
  }

function calculateResonance(){
            //elemental resonance
        //find number of same elements in team composition
        var numAnemo = 0;
        var numElectro = 0;
        var numGeo = 0;
        var numHydro = 0;
        var numCryo = 0;
        var numPyro = 0;
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

        outputstr += "<h3>Elemental resonance:</h3>";

        //add points for elemental resonance
        EResonanceWeights(numAnemo, "anemo");
        EResonanceWeights(numElectro, "electro");
        EResonanceWeights(numGeo, "geo");
        EResonanceWeights(numHydro, "hydro");
        EResonanceWeights(numCryo, "cryo");
        EResonanceWeights(numPyro, "pyro");

        console.log(numAnemo, numElectro, numGeo, numHydro, numCryo, numPyro)
        //if 4 different element characters
        if(numAnemo < 2 && numElectro < 2 && numGeo < 2 && numHydro < 2 && numCryo < 2 && numPyro < 2 ){
            score+=5;
            console.log("all 4 elements")
            outputstr += "Protective Canopy: </br>4 different elemental characters: All Elemental RES +15%, Physical RES +15%</br></br>"
        }
}


//functino to calculate points for elemental reaction
function calculateElementalReaction(){
    var elementsInTeam = [characters.get(lastChar[0]).Element,characters.get(lastChar[1]).Element, 
                        characters.get(lastChar[2]).Element,characters.get(lastChar[3]).Element];
    var reaction = new Boolean(false);  
    console.log(score);
    outputstr += "<h3>Elemental Reactions:</h3>"; 
    outputstr += "Your team is capable of the following reactions:</br>"; 
    for(var i= 0; i<4;i++){ 
        console.log("Current character: "+elementsInTeam[i])
        if(elementsInTeam[i] == "Anemo"){ 
            for(var j= 0; j<4;j++){ 
              if(elementsInTeam[j] == "Hydro" || elementsInTeam[j] == "Cryo" || elementsInTeam[j] == "Electro" || elementsInTeam[j] == "Pyro" && j !=i){
                 score+=25; 
                 outputstr += "Swirl with "+lastChar[i]+" and "+lastChar[j]+"</br>"; 
                 console.log("This has met");
                 reaction =true; 
              }       
            }  
        }else if(elementsInTeam[i] == "Geo"){ 
            for(var j= 0; j<4;j++){ 
                if(elementsInTeam[j] == "Hydro" || elementsInTeam[j] == "Cryo" || elementsInTeam[j] == "Electro" || elementsInTeam[j] == "Pyro" && j !=i){
                   score+=25;
                   outputstr += "Crystalize with "+lastChar[i]+" and "+lastChar[j]+"</br>";
                   reaction =true; 
                }       
              }  
        }else if(elementsInTeam[i]== "Electro" || elementsInTeam[i] == "Cryo"){ 
            for(var j= 0; j<4;j++){ 
                if((elementsInTeam[j] == "Cryo"  && elementsInTeam[i] == "Electro") && j !=i){
                   score+=50;
                   outputstr += "Superconduct with "+lastChar[i]+" and "+lastChar[j]+"</br>" 
                   reaction =true; 
                }       
              }  
        }else if(elementsInTeam[i] == "Hydro" || elementsInTeam[i] == "Pyro"){ 
            for(var j= 0; j<4;j++){ 
              if((elementsInTeam[i] == "Hydro" && elementsInTeam[j] == "Pyro") && j !=i){
                 score+=70;
                 outputstr += "Vaporize with "+lastChar[i]+" and "+lastChar[j]+"</br>"  
                 reaction =true; 
              }       
            }  
        }else if(elementsInTeam[i] == "Cryo" || elementsInTeam[i] == "Pyro"){
            for(var j= 0; j<4;j++){ 
              if((elementsInTeam[i] == "Pyro" && elementsInTeam[j] == "Cryo") && j !=i){
                 score+=60;
                 outputstr += "Melt with "+lastChar[i]+" and "+lastChar[j]+"</br>"
                 reaction =true; 
              }       
            }  
        }
    }
}
