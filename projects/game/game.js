let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here

let BackpackReady = false;
let BreakfastAte = false;
let currentTime = 420; // 7:00 am in minutes (7 * 60)
let getDressed = false;

//If you need, add any "helper" functions here

function getTimeString() {
    let hours = Math.floor(currentTime / 60);
    let minutes = currentTime % 60;
    let meridiem = hours >= 12 ? "pm" : "am";
    if (hours > 12) hours -= 12;
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + meridiem;
}

function checkTime() {
    if (currentTime >= 500) { // 8:20 am in minutes (8 * 60 + 20)
        lateForSchool();
        return true;
    }
    return false;
}

function lateForSchool() {
    clear();
    print("\nOh no! You missed the deadline! It's now " + getTimeString() + " and school started at 8:20 am.");
    print("\nGame Over!");
    gameActive = false;
}

function getRandomEvent() {
    let rand = Math.random();
    if (rand < 0.3) return "neighbor";
    if (rand < 0.6) return "bus";
    if (rand < 0.9) return "Lime Scooter";
    return "none";
}

function handleInvalidInput() {
    print("\nInvalid input. Please try again.");
}

//Make one function for each location
function bedroom() {
    if (checkTime()) return;
    clear();
    print("\nYou just woke up and its 7am, school starts at 8:20am.");
    print("\nCurrent time: " + getTimeString());
    print("\nWhat do you want to do? Say one of these choices:" +
        "\n\t stay in bed" +
        "\n\t get up" +
        "\n\t prepare backpack" +
        "\n\t get dressed");
    
    function processInput(input){
        if (input.toLowerCase() === "stay in bed") {
            bedroomSnooze();
            currentTime += 7;
            print("\nYou stayed in bed and snoozed the alarm for 7 more minutes.");
            print("Time is now: " + getTimeString());
        } else if (input.toLowerCase() === "get up") {
            apartment();
        } else if (input.toLowerCase() === "prepare backpack") {
            BackpackReady = true;
            currentTime += 5;
            print("\nYou prepared your backpack.");
            print("Time is now: " + getTimeString());
            waitThenCall(bedroom); 
        } else if (input.toLowerCase() === "get dressed") {
            getDressed = true;
            currentTime += 10;
            print("\nYou got dressed.");
            print("Time is now: " + getTimeString());
            waitThenCall(bedroom);
        } else {
            handleInvalidInput();
        }
    }
    waitForInput(processInput);
}

function bedroomSnooze() {
    if (checkTime()) return;
    clear();
    print("\n You snoozed the alarm for 7 more minutes");
    print("\n Current time: " + getTimeString());
    print("\n What do you want to do? Say one of these choices:" +
        "\n\t get up" +
        "\n\t snooze 7 more minutes");

    function processInput(input) {
        if (input.toLowerCase() === "get up") {
            currentTime += 3;
            apartment();
        } else if (input.toLowerCase() === "snooze 7 more minutes") {
            currentTime += 7;
            print("\nYou snoozed. Time is now: " + getTimeString());
            waitThenCall(bedroomSnooze);
        } else {
            handleInvalidInput();
            waitThenCall(bedroomSnooze);
        }
    }
    waitForInput(processInput);
}

function kitchen() {
    if (checkTime()) return;
    clear();
    print("\n You are in the kitchen, its time for breakfast");
    print("\n Current time: " + getTimeString());
    print("\n What do you want to do next?:" +
        "\n\t eat breakfast" +
        "\n\t prepare backpack");
    
    function processInput(input) {
        if (input.toLowerCase() === "eat breakfast") {
            BreakfastAte = true;
            currentTime += 10;
            print("\nYou ate breakfast.");
            print("Time is now: " + getTimeString());
            apartment();
        } else if (input.toLowerCase() === "prepare backpack") {
            BackpackReady = true;
            currentTime += 5;
            print("\nYou prepared your backpack.");
            print("Time is now: " + getTimeString());
            apartment();
        } else {
            handleInvalidInput();
            waitThenCall(kitchen);
        }
    }
    waitForInput(processInput);
}

function apartment() {
    if (checkTime()) return;
    clear();
    print("\n You are in the apartment. What do you want to do?");
    print("\n Current time: " + getTimeString());
    print("\n Options:" +
        "\n\t go to kitchen" +
        "\n\t prepare backpack" +
        "\n\t go to outside street");
    
    function processInput(input){
        if (input.toLowerCase() === "go to kitchen") {
            currentTime += 2;
            kitchen();
        } else if (input.toLowerCase() === "prepare backpack") {
            BackpackReady = true;
            currentTime += 5;
            print("\nYou prepared your backpack.");
            print("Time is now: " + getTimeString());
            waitThenCall(apartment);
        } else if (input.toLowerCase() === "go to outside street") {
            if (BackpackReady && BreakfastAte) {
                currentTime += 5;
                outsideStreet();
            } else {
                print("\nYou need to prepare your backpack and eat breakfast first.");
                waitThenCall(apartment);
            }
        } else {
            handleInvalidInput();
            waitThenCall(apartment);
        }
    }
    waitForInput(processInput);
}

function outsideStreet() {
    if (checkTime()) return;
    clear();
    print("\n You are on the outside street. What do you want to do?");
    print("\n Current time: " + getTimeString());
    print("\n Options:" +
        "\n\t go to school" +
        "\n\t go back to apartment");
    
    function processInput(input){
        if (input.toLowerCase() === "go to school") {
            let event = getRandomEvent();
            if (event === "neighbor") {
                print("\nA neighbor offers you a ride! You arrive faster.");
                currentTime += 5;
            } else if (event === "bus") {
                print("\nThe ART 75 bus will arrive soon, You take it and arrive faster.");
                currentTime += 7;
            } else {
                currentTime += 10;
            }
            if (event === "Lime Scooter") {
                print("\nYou find a Lime Scooter nearby and decide to take it. You arrive faster.");
                currentTime += 6;
            }
            school();
        } else if (input.toLowerCase() === "go back to apartment") {
            currentTime += 5;
            apartment();
        } else if (input.toLowerCase() === "walk to school") {
            currentTime += 15;
            print("\nYou decide to walk to school. It takes longer but you get some exercise.");
            print("Time is now: " + getTimeString());
            school();
        } else {
            handleInvalidInput();
            waitThenCall(outsideStreet);
        }
    }
    waitForInput(processInput);
}

function school() {
    clear();
    print("\n You arrived at school at " + getTimeString() + ".");
    if (currentTime <= 500) {
        print("You made it on time! Game over!");
    } else {
        print("Unfortunately, you're late! School started at 8:20 am.");
    }
    gameActive = false;
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            bedroom();
    }
    waitForInput(processInput);
}