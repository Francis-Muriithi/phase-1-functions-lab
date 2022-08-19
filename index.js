// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return (someValue - 42);
    } 
    else {
        return (42- someValue);
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks (someValue)* 264
}

function distanceTravelledInFeet (a, b){
    if (a < b){
        return ((b-a)*264)
    }
    else {
        return ((a-b)*264);
    }
}
 
function calculatesFarePrice(start, end){
    const distance= distanceTravelledInFeet(start, end);
    if (distance< 400){
        return 0;
    }
    if (distance >= 400 && distance <=2000){
        return ((distance -400) *0.02)
    }
    if (distance >= 2000 && distance <= 2500){
        return 25;
    }
    if (distance >2500) {
        return ("cannot travel that far");
    }

}