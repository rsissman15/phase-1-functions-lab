function distanceFromHqInBlocks(pickup){
   const distanceFromHqInBlocks=Math.abs(pickup-42);
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(pickup){
   const distanceFromHqInFeet= Math.abs(pickup-42)*264;
   return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const distanceTraveledInFeet= Math.abs(start-destination)*264;
    return distanceTraveledInFeet;
}

function calculatesFarePrice(start, destination) {
    const distanceTraveled= Math.abs(start-destination)*264;

    if (distanceTraveled<400){
        let cost=0;
        return cost;
    }
    else if (distanceTraveled>=400 && distanceTraveled<2000){
        let cost=(0.02)*(distanceTraveled-400);
        return cost;
    
    }
    else if(distanceTraveled>=2500){
        return "cannot travel that far";
    }
    else if(distanceTraveled>=2000 && distanceTraveled<2500){
        let cost=25;
        return cost;

    }
}