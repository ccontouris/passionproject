async function getBirdSightings() {
    // var url = "https://birdcast.info/migration-tools/live-migration-maps/";

    // var response = await fetch(url);

    // var result = await response.json();

    // var migration_element = document.getElementById("migration");
    let headersList = {
        "Accept": "*/*",
        "x-ebirdapitoken": "tfdjg87simiq"
    }
    
    let response = await fetch("https://api.ebird.org/v2/data/obs/US-IL/recent", { 
        method: "GET",
        headers: headersList
    });
    
    let data = await response.json();
    let firstBird = data[0]
    document.getElementById("sightings").innerHTML = firstBird.comName
    console.log(data);
    

}

getBirdMigration()