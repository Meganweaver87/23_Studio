let rocketLeftPosition = 180;
let rocketTopPosition = 270;
let rocket; // = document.getElementById("rocket");

window.addEventListener("load", function(){
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    rocket = document.getElementById("rocket");
    //rocket.style.left = rocketLeftPosition;
    //rocket.style.top = rocketTopPosition;
 
  
    //let rocketRightPosition = rocket.style.right = "0";
    //let rocketDownPosition = rocket.style.down = "0";
    let comms = document.getElementById("comms");
    let abortMission = document.getElementById("missionAbort");
    //rocket.classList.add('rotated');
    resetRocket();  

    takeOff.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight!") {
            window.alert("You're already off the ground!");
        } else if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else {
            confirmed = window.confirm("Please confirm that the shuttle is ready for takeoff.");
            if (confirmed) {
                flightStatus.innerHTML = "Shuttle in flight!";
                shuttleBackground.style.backgroundColor = "#79dcbc";
                spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            } // close if
        } // close if/else
        }); // close takeoff

    landing.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Space shuttle ready for takeoff!" || flightStatus.innerHTML === "Mission aborted!") {
            window.alert("You're already on the ground!");
        } else if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else {
            confirmed = window.confirm("Please confirm that you'd like to descend and land the shuttle.");
            if (confirmed) {
                window.alert("Landing procedure initiated. Landing gear engaged.");
                flightStatus.innerHTML = "Space shuttle ready for takeoff!";
                shuttleBackground.style.backgroundColor = "#94c2b3";
                resetRocket();

                // shuttle at bottom of window
            } // close if
        } // close if/else
    }); // close landing

    abortMission.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("Our mission is already over. We'll try again when the shuttle is fixed!");
        } else if (flightStatus.innerHTML === "Space shuttle ready for takeoff!") {
            confirmed = window.confirm("Are you sure you want to abort the mission before it's even started?");
                if (confirmed) {
                    flightStatus.innerHTML = "Mission aborted!";
                }
        } else {
            confirmed = window.confirm("Are you sure you want to abort the mission?");
            if (confirmed) {
                flightStatus.innerHTML = "Mission aborted!";
                resetRocket();

            }
        } // close if/else

    });

    left.addEventListener("click", function(){
        
        if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else if (flightStatus.innerHTML !== "Shuttle in flight!") {
            window.alert("You haven't launched the shuttle yet!");
        } else {
            console.log("leeeee" + rocketLeftPosition);
            rocketLeftPosition -= 10;
            console.log("left" + rocketLeftPosition);
            rocket.style.left = rocketLeftPosition + "px";
        }
        
    });

    right.addEventListener("click", function(){

        if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else if (flightStatus.innerHTML !== "Shuttle in flight!") {
            window.alert("You haven't launched the shuttle yet!");
        } else {
            console.log("reeeee" + rocketLeftPosition);
            rocketLeftPosition += 10;
            console.log("right" + rocketLeftPosition);
            rocket.style.left = rocketLeftPosition + "px";

        }

    });

    up.addEventListener("click", function(){

        if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else if (spaceShuttleHeight.innerHTML == 280000) {
            window.alert("The shuttle is already at peak altitude!");
        } else if (flightStatus.innerHTML !== "Shuttle in flight!") {
            window.alert("You haven't launched the shuttle yet!");
        } else {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            rocketTopPosition -= 10;
            console.log("top" + rocketTopPosition);
            rocket.style.top = rocketTopPosition + "px";

        }

    });

    down.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle crashed!") {
            window.alert("The shuttle cannot operate in this state!");
        } else if (spaceShuttleHeight.innerHTML == 0) {
            window.alert("You're already as low as you can go!");
        }else if (spaceShuttleHeight.innerHTML == 10000) {
            confirmed = window.confirm("Are you sure you'd like to crash land the shuttle?");
                if (confirmed) {
                    window.alert("Manual override confirmed. Rapid descent at low altitude! Prepare for crash landing!");
                    resetRocket();
                    flightStatus.innerHTML = "Shuttle crashed!";
                    shuttleBackground.style.backgroundColor = "#dc8379";
                    rocket.style.rotate = "90deg";
                    comms.innerHTML = "Houston, we have a problem.";
                } // close if
        } else if (flightStatus.innerHTML !== "Shuttle in flight!") {
            window.alert("You haven't launched the shuttle yet!");
        } else {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
            rocketTopPosition += 10;
            console.log("bottom" + rocketTopPosition);
            rocket.style.top = rocketTopPosition + "px";
        } // close if/else
    });

});
    

function resetRocket() {
    rocketLeftPosition = 180;
    rocketTopPosition = 270;
    rocket.style.left = rocketLeftPosition + "px";
    rocket.style.top = rocketTopPosition + "px";
    spaceShuttleHeight.innerHTML = 0;
};