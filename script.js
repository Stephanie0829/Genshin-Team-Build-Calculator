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