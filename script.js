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

document.getElementById("BM").style.display = 'none';


// $('#dove').hover(function(){
//     PlaySound('"C:\Users\ChrisitContouris\OneDrive - i.c.stars\Documents\Sound Recordings\Mourning Dove.m4a"');// calling playsound function
// },function(){
//     StopSound('"C:\Users\ChrisitContouris\OneDrive - i.c.stars\Documents\Sound Recordings\Mourning Dove.m4a"');// calling stopsound function
// });