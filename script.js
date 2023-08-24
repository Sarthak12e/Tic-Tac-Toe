console.log("Hello");
let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let x = window.matchMedia("(max-width: 900px)");

let turn = "X";
let isWin = false;
//Function to change Turn
const changeTurn = () => {

    return turn === "X" ? "O" : "X";
};
if (!x.matches) {
    function mouseOver(a) {
        if (a == 0)
            document.getElementById("box0").style.background = "rgb(230, 188, 230)";
        if (a == 1)
            document.getElementById("box1").style.background = "rgb(230, 188, 230)";
        if (a == 2)
            document.getElementById("box2").style.background = "rgb(230, 188, 230)";
        if (a == 3)
            document.getElementById("box3").style.background = "rgb(230, 188, 230)";
        if (a == 4)
            document.getElementById("box4").style.background = "rgb(230, 188, 230)";
        if (a == 5)
            document.getElementById("box5").style.background = "rgb(230, 188, 230)";
        if (a == 6)
            document.getElementById("box6").style.background = "rgb(230, 188, 230)";
        if (a == 7)
            document.getElementById("box7").style.background = "rgb(230, 188, 230)";
        if (a == 8)
            document.getElementById("box8").style.background = "rgb(230, 188, 230)";
    };
}

if (!x.matches) {
    function mouseLeave(b) {
        if (b == 0)
            document.getElementById("box0").style.background = "white";
        if (b == 1)
            document.getElementById("box1").style.background = "white";
        if (b == 2)
            document.getElementById("box2").style.background = "white";
        if (b == 3)
            document.getElementById("box3").style.background = "white";
        if (b == 4)
            document.getElementById("box4").style.background = "white";
        if (b == 5)
            document.getElementById("box5").style.background = "white";
        if (b == 6)
            document.getElementById("box6").style.background = "white";
        if (b == 7)
            document.getElementById("box7").style.background = "white";
        if (b == 8)
            document.getElementById("box8").style.background = "white";

    };
}


//Function to check Win
const checkWin = () => {


    let boxtext = document.getElementsByClassName("boxtext");
    let grida_sq = document.getElementsByClassName("box");

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)
            && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isWin = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            //line

            if (x.matches) {
                grida_sq[e[0]].style.background = "rgb(227, 170, 72)";
                grida_sq[e[1]].style.background = "rgb(227, 170, 72)";
                grida_sq[e[2]].style.background = "rgb(227, 170, 72)";
            }
            else {
                document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width = "20vw";
            }
            music.play();
        }

    })
};

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (isWin)
            return;
        if (boxtext.innerHTML === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin(x);
            if (isWin == false)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
    });
});

//Add onclick listener to reset button

reset.addEventListener("click", () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let grida_sq = document.getElementsByClassName("box");
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isWin = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    music.pause();
    wins.forEach(e => {
        grida_sq[e[0]].style.background = "white";
        grida_sq[e[1]].style.background = "white";
        grida_sq[e[2]].style.background = "white";
    });



});