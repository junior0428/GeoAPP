var map = L.map('map').setView([-9.698938, -76.644591], 5.4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function mostrarZonas() {
    var srcSelect = document.getElementById("src");
    var zonaSelect = document.getElementById("zona");

    if (srcSelect.value === "UTM") {
        if (!zonaSelect) {
            zonaSelect = document.createElement("select");
            zonaSelect.id = "zona";
            zonaSelect.name = "zona";

            var option1 = document.createElement("option");
            option1.value = "Zona17";
            option1.text = "Zona 17";

            var option2 = document.createElement("option");
            option2.value = "Zona18";
            option2.text = "Zona 18";

            var option3 = document.createElement("option");
            option3.value = "Zona19";
            option3.text = "Zona 19";

            zonaSelect.appendChild(option1);
            zonaSelect.appendChild(option2);
            zonaSelect.appendChild(option3);

            zonaSelect.style = "top: 0; left: 0; z-index: 1; background-color: rgb(244, 244, 247); padding: 7px; border-radius: 5px; box-shadow: 0 0 10px rgba(8, 8, 8, 0.5);";
            zonaSelect.style.fontWeight = "bold";

            srcSelect.parentNode.appendChild(zonaSelect);
        } else {
            zonaSelect.style.display = "block";
        }
    } else {
        if (zonaSelect) {
            zonaSelect.parentNode.removeChild(zonaSelect);
        }
    }
}

