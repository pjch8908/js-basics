const COORDS = "coords";

function handleGeoSucess(position) {
  console.log(position);
}

function handleGeoError() {
  console.log("Cant access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function loadCoords() {
  const loadCoords = localStorage.getItem(COORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
    //getweather
  }
}

function init() {
  loadCoords();
}
init();
