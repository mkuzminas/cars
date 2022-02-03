const url = "https://olive-bead-glazer.glitch.me/"
fetch(url)
    .then((response) => response.json())
    .then((carsJson) => {
        console.log(carsJson);
    });