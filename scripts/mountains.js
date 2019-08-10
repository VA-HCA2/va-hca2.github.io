// This program gives the User Information about Moutains Located in the US.
//Author : Vanessa Arce 
"use strict";

window.onload = function () {
    // Get my HTML Elements by ID
    let mydropDown = document.getElementById("mountainsdd");
    let mytable = document.getElementById("tableMnt")
    let objs;
    //Get JSON FOLDER/FILE NAME
    $.getJSON("data/data.json", function (data) {

        objs = data;

    // Create my dropDown List.
        for (let i = 0; i < objs.mountains.length; i++) {
            let mt = objs.mountains[i].name;
            let element = document.createElement("option");
            element.text = mt;
            element.value = mt;
            mydropDown.appendChild(element);

        }
    })

    mydropDown.onchange = function () {

        // Get the moutain the user selects (same as select.index);
        let moutainSelection = mydropDown.value;

        //Clean the table 
        document.getElementById("tableMnt").innerHTML = "";

        // Loop thru the JSON Data to find the mountain 
        for (let i = 0; i < objs.mountains.length; i++) {
            if (moutainSelection == objs.mountains[i].name) {
                let row = mytable.insertRow(mytable.rows.length)
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = "Name: ";
                cell2.innerHTML = objs.mountains[i].name;

                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Elevation: ";
                cell2.innerHTML = objs.mountains[i].elevation;

                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Effort: ";
                cell2.innerHTML = objs.mountains[i].effort;

                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Description: ";
                cell2.innerHTML = objs.mountains[i].desc;

                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Latitude: ";
                cell2.innerHTML = objs.mountains[i].coords.lat;

                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Longitude: ";
                cell2.innerHTML = objs.mountains[i].coords.lng;

                // Create images 
                let img = document.createElement("img");
                img.src = "images/" + objs.mountains[i].img
                row = mytable.insertRow(mytable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "View";
                cell2.appendChild(img)

            }
        }
    }
}