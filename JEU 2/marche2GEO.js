// Afficher les indices 
document.querySelector(".map").addEventListener("click", mapPop);

function mapPop() {
    document.querySelectorAll(".big>*").forEach(e => {
        e.classList.remove("disparu")
    })
};

// Fermer la map 
document.querySelector(".croix").addEventListener("click", croix);

function croix() {
    document.querySelectorAll(".big>*").forEach(e => {
        e.classList.add("disparu")
    })
}

// Afficher les indices 
document.querySelector(".code").addEventListener("click", codePop);

function codePop() {
    document.querySelectorAll(".big2>*").forEach(e => {
        e.classList.remove("disparu")
    })
};

// Fermer le code 
document.querySelector(".croix2").addEventListener("click", croixCode);

function croixCode() {
    document.querySelectorAll(".big2>*").forEach(e => {
        e.classList.add("disparu")
    })
}

// Afficher la soluce 
document.querySelector(".soluce").addEventListener("click", () => {
    document.querySelector(".sur").classList.remove("disparu");
    document.querySelector(".assombrir2").classList.remove("disparu");
})

document.querySelector(".croixS").addEventListener("click", () => {
    document.querySelector(".sur").classList.add("disparu");
    document.querySelector(".assombrir2").classList.add("disparu");
})

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".nomO").innerText = "What if the mysterious code was written backwards? Like in a mirror. We discover a charade where the whole is E4. By taking the map of Mulhouse you can discover your next destination."
    document.querySelector(".title").innerText = "The solution";
    document.querySelector(".btn").classList.add("disparu2");
})

// La géolocalisation 
var watchID;
var geoLoc;
// 47.74524916623775, 7.344583145605483

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let cibleX = 47.7449660013797;
    let cibleY = 7.344671658499486;
    let margeX = (47.745076021031615 - 47.744794658843304);
    let margeY = (7.344682387330974 - 7.344151309989158);
    if (latitude > (cibleX - margeX) && latitude < (cibleX + margeX) &&
        longitude > (cibleY - margeY) && longitude < (cibleY + margeY)) {
        // if (latitude == cibleL && longitude == ciblel) {
        document.querySelector(".btnLien").classList.remove("disparu");
    }
}

function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Access is denied!");
    } else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}

function getLocationUpdate() {

    if (navigator.geolocation) {

        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}
getLocationUpdate()