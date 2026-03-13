let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here

function handleInvalidInput() {
    print("\nInvalid input. Please try again.");
}

//Make one function for each location
function locationA() {
    clear();
    print("\nYou just woke up and its 7am, school starts at 8:20am.");
    print("\nWhat do you want to do? Say one of these choices:" +
        "\n\tstay in bed" +
        "\n\tget up");
    
    function processInput(input){
        if (input.toLowerCase() === "stay in bed") {
            locationB();
        } else if (input.toLowerCase() === "get up") {
            print("\nYou got up and changed, what do you want to do next?" +
                "\n\tmake breakfast" +
                "\n\tready your backpack");
            gameActive = false;
        } else {
            handleInvalidInput();
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou snoozed the alarm for 7 more minutes");
    print("\nWhat do you want to do? Say one of these choices:" +
        "\n\tget up" +
        "\n\tsnooze 7 more minutes");

    function processInput(input) {
        if (input.toLowerCase() === "get up") {
            locationA();
        } else if (input.toLowerCase() === "snooze 7 more minutes") {
            handleInvalidInput();
            waitThenCall(locationB);
        } else {
            handleInvalidInput();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC() {
    clear();
    print("\nYou are in the kitchen, its time for breakfast");
    print("\nWhat do you want to do next?:" +
        "\n\teat breakfast" +
        "\n\tprepare backpack");
    
    function processInput(input) {
        if (input.toLowerCase() === "eat breakfast") {
        } else if (input.toLowerCase() === "prepare backpack") {
            handleInvalidInput();
            waitThenCall(locationC);
        } else {
            handleInvalidInput();
            waitThenCall(locationC);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}