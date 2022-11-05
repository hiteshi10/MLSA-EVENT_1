var userinput;
var computerinput;

function user(x) {
    document.getElementById("userchoice").innerHTML = x;
    userinput = x;
    computer();
}

function computer() {
    var arr = ["stone", "paper", "scissor", "lizard", "spock"];
    var b = Math.floor(Math.random() * 5);
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
        case "stonelizard":
        case "lizardspock":
        case "spockscissor":
        case "scissorlizard":
        case "lizardpaper":
        case "paperspock":
        case "spockstone":
        case "stonescissor":
            document.getElementById("result").innerHTML = "you won! :)";
            break;
        case "paperscissor":
        case "stonepaper":
        case "lizardstone":
        case "spocklizard":
        case "scissorspock":
        case "lizardscissor":
        case "paperlizard":
        case "spockpaper":
        case "stonespock":
        case "stonescissor":
            document.getElementById("result").innerHTML = "you lost :(";
            break;
        default:
            document.getElementById("result").innerHTML = "draw *_*";
    }

    // rock paper scissor lizard spock
    //     scissor cuts paper
    //     paper covers rock
    //     rock crushes  lizard
    //     lizards poisons spock
    //     spock smashes scissors
    //     scissors decapitates lizard
    //     lizard eats paper
    //     paper disproves spock
    //     spock vaporizes rock
    //     rock crushes scissors
    //
}