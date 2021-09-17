var names =["Virat Kohli","AB de Villiers", "Chris Morris","Dale Steyn","Yuzi Chahal"];
var matchesplayed =[177,154,61,92,84];
var highscore =[113,133,82,19,4];
var runs =[5412,4395,517,166,24];
var wickets =[4,0,69,96,100];
var catches =[75,93,27,24,19];
var img0 = "<img src='v-kohli.png' height='300px' width='300px' >"
var img1 = "<img src='abde.png' height='300px' width='300px'>"
var img2 = "<img src='chrism.png' height='300px' width='300px'>"
var img3 = "<img src='dsteyn.png' height='300px' width='300px'>"
var img4 = "<img src='yuzi.png' height='300px' width='300px'>"
var images =[img0,img1,img2,img3,img4];
var score = 5;
var scoretext;
document.getElementById("score").innerHTML=score;

function start(){
    var x = document.getElementById("card");
    var y = document.getElementById("start");
    var z = document.getElementById("scorecard");
    var w = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.visibility = "visible";
      w.style.display = "inline-flex";
      // startgame();
    } else {
      x.style.display = "none";
    }
}

function startgame(){
    var ran1 = Math.floor(Math.random()*5);
    document.getElementById("img").innerHTML=images[ran1];
    document.getElementById("name").innerHTML=names[ran1];
    document.getElementById("mp").innerHTML=matchesplayed[ran1];
    document.getElementById("hs").innerHTML=highscore[ran1];
    document.getElementById("rs").innerHTML=runs[ran1];
    document.getElementById("wickets").innerHTML=wickets[ran1];
    document.getElementById('catches').innerHTML=catches[ran1];
    document.getElementById('score').innerHTML="Score: " + score;
}

function points(clicked_id){
    if (clicked_id=="win"){
        if(score<20){
        score+=3;
        scoretext=score;
        document.getElementById('score').innerHTML="Score: " + scoretext;
        }
        if(scoretext >= 20){
            document.getElementById('score').innerHTML="You Won";
        }
    }else if(clicked_id=="lose"){
        if(score>0){
            score-=1;
            scoretext=score;
            document.getElementById('score').innerHTML="Score: " + scoretext;
        }
        if(scoretext <= 0){
            document.getElementById('score').innerHTML="You Lost";
        }
    }
}
