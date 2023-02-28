(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?


     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // let brPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    // console.log(brPlanets);
    let brPlanets = planetsArray.join("<br>");

    console.log(brPlanets);


    // let ulPlanets = "<ul>Mercury<li>Venus<li>Earth<li>Mars<li>Jupiter<li>Saturn<li>Uranus<li>Neptune</ul>";
    // console.log(ulPlanets);
    let ulPlanets = "";
    let liString;
    planetsArray.forEach(function(planet){
        if(planet === planetsArray[0]){
            ulPlanets += "<ul>"
        }
       liString = "<li>" + planet + "</li>";
       ulPlanets += liString;
       if(planet === planetsArray(planetsArray.length -1)){
           ulPlanets += "</ul>"
       }
    })
    console.log(ulPlanets);
})();
