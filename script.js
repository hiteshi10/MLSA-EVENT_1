var userinput;
var computerinput;

function user(x) {
    document.getElementById("userchoice").innerHTML = x;
    userinput = x;
    computer();
}

function computer() {
    var arr = ["stone", "paper", "scissor"];
    var b = Math.floor(Math.random() * 3);
    computerinput = arr[b];
    document.getElementById("computerchoice").innerHTML = arr[b];
    // computerinput=y;
    result(userinput, computerinput);
}

function result(a, b) {
    // StoneScissor
    switch (a + b) {
        case "scissorpaper":
        case "paperstone":
        case "stonescissor":
            document.getElementById("result").innerHTML = "you won! 😁";
            break;
        case "paperscissor":
        case "stonepaper":
        case "stonescissor":
            document.getElementById("result").innerHTML = "you lost 🥲";
            break;
        default:
            document.getElementById("result").innerHTML = "draw 🥴";
    }

    // rock paper scissor
    //     scissor cuts paper
    //     paper covers rock
    //     rock crushes scissors
    //
}
