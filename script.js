global_data = {}

$.ajax({
  url: "https://data.transportation.gov/resource/4f3n-jbg2.json",
  type: "GET",
  data: {
    "$limit": 5000,
    "$$app_token": "Qto9G2rlKlEYzT0U1Kb6RzJLj"
  }
}).done(function (data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
  global_data = data

  var html = '<table><thead><tr>...</tr></thead><tbody>';
  for (var i = 0, len = global_data.length; i < len; ++i) {
    html += '<tr>';
    // for (var j = 0, rowLen = global_data[i].length; j < rowLen; ++j) {
    //   html += '<td>' + global_data[i][j] + '</td>';
    // }
    html += '<td>' + global_data[i]["carrier_lg"] + '</td>';
    html += '<td>' + global_data[i]["city1"] + '</td>';
    html += '<td>' + global_data[i]["city2"] + '</td>';
    html += '<td>' + global_data[i]["fare_lg"] + '</td>';

    html += "</tr>";
  }
  html += '</tbody><tfoot><tr>....</tr></tfoot></table>';

  $(html).appendTo('#output');



});

