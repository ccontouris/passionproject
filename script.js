async function getBirdMigration() {
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
    document.getElementById("Migration").innerHTML = firstBird.comName
    console.log(data);


}

getBirdMigration()



