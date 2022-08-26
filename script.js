global_data = {}
city1s = {}

function getCity1s() {
  $.ajax({
    url: "https://data.transportation.gov/resource/4f3n-jbg2.json",
    type: "GET",
    data: {
      "$select": "city1",
      "$group": "city1",
      "$order": "city1",
      "$limit": 5000
    }
  }).done(function (cities) {
    // console.log(cities);
    // city1s = cities;
    output = "[";
    for (var i = 0, len = cities.length; i < len; ++i) {
      output += "\"" + cities[i]["city1"] + "\",";
    }
    output += "]"
    console.log(output)
  })
  return city1s;
}

function findFlights() {
  $.ajax({
    url: "https://data.transportation.gov/resource/4f3n-jbg2.json",
    type: "GET",
    data: {
      "$where": "year > 2018",
      "$limit": 5000,
      "$order": "passengers DESC",
      "$$app_token": "Qto9G2rlKlEYzT0U1Kb6RzJLj"
    }
  }).done(function (data) {
    global_data = data

    city1selection = document.getElementById("city1").value;
    console.log("City1 selection: " + city1selection);
    city2selection = document.getElementById("city2").value;
    console.log("City2 selection: " + city2selection);

    document.getElementById("city1map").src="https://maps.googleapis.com/maps/api/staticmap?center=" + city1selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";
    document.getElementById("city2map").src="https://maps.googleapis.com/maps/api/staticmap?center=" + city2selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";
    
    var html = '<table class="table"><thead><tr></tr></thead><tbody>';

    html += "<th scope=\"col\">Largest Carrier</th><th scope=\"col\">City 1</th><th scope=\"col\">City 2</th><th scope=\"col\">Largest Carrier Avg Fare</th><th scope=\"col\">Year</th><th scope=\"col\">Quarter</th>"

    for (var i = 0, len = global_data.length; i < len; ++i) {

      skippable = true;
      if (city1selection == global_data[i]["city1"] && city2selection == global_data[i]["city2"]) {
        skippable = false;
      } else if (city2selection == global_data[i]["city1"] && city1selection == global_data[i]["city2"]) {
        skippable = false;
      }

      // console.log("City1 selection: " + city1selection + " vs. curr: " + global_data[i]["city1"]);
      // if (city1selection != global_data[i]["city1"] && city1selection != global_data[i]["city2"] && city1selection != "") { continue; }
      if (skippable) { continue; }

      html += '<tr>';
      // for (var j = 0, rowLen = global_data[i].length; j < rowLen; ++j) {
      //   html += '<td>' + global_data[i][j] + '</td>';
      // }
      html += '<td>' + global_data[i]["carrier_lg"] + '</td>';
      html += '<td>' + global_data[i]["city1"] + '</td>';
      html += '<td>' + global_data[i]["city2"] + '</td>';
      html += '<td>' + global_data[i]["fare_lg"] + '</td>';
      html += '<td>' + global_data[i]["year"] + '</td>';
      html += '<td>' + global_data[i]["quarter"] + '</td>';


      html += "</tr>";
    }
    html += '</tbody><tfoot><tr></tr></tfoot></table>';

    $(".output").empty();
    $(html).appendTo('#output');
  })

}



// $.ajax({
//   url: "https://data.transportation.gov/resource/4f3n-jbg2.json",
//   type: "GET",
//   data: {
//     "$limit": 50,
//     "$$app_token": "Qto9G2rlKlEYzT0U1Kb6RzJLj"
//   }
// }).done(function (data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
//   global_data = data

//   var html = '<table><thead><tr>...</tr></thead><tbody>';
//   for (var i = 0, len = global_data.length; i < len; ++i) {
//     html += '<tr>';
//     // for (var j = 0, rowLen = global_data[i].length; j < rowLen; ++j) {
//     //   html += '<td>' + global_data[i][j] + '</td>';
//     // }
//     html += '<td>' + global_data[i]["carrier_lg"] + '</td>';
//     html += '<td>' + global_data[i]["city1"] + '</td>';
//     html += '<td>' + global_data[i]["city2"] + '</td>';
//     html += '<td>' + global_data[i]["fare_lg"] + '</td>';

//     html += "</tr>";
//   }
//   html += '</tbody><tfoot><tr>....</tr></tfoot></table>';

//   $(html).appendTo('#output');



// });

