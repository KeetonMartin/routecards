global_data = {}
city1s = {}

airlineCodes = {
  "3M": "Silver",
  "AA": "American",
  "AS": "Alaska",
  "B6": "JetBlue",
  "DL": "Delta",
  "F9": "Frontier",
  "G4": "Allegiant",
  "MX": "Mexicana",
  "NK": "Spirit",
  "SY": "Sun Country",
  "UA": "United",
  "WN": "Southwest",
  "XP": "Avelo"
}

logos = {
  "Silver": "",
  "American": "https://i.pinimg.com/originals/a2/61/08/a26108757d054158beb1157275db8649.jpg",
  "Alaska": "https://yt3.ggpht.com/ytc/AMLnZu-C-uN4bIkAAPybtvT92uFskxUC76aU_JFD05Rpxg=s900-c-k-c0x00ffffff-no-rj",
  "JetBlue": "https://www.jetblue.com/magnoliapublic/dam/logo/jetblue-logo.svg",
  "Delta": "https://img.favpng.com/19/9/1/delta-air-lines-image-computer-icons-logo-vector-graphics-png-favpng-s1SBMZREacvE4Fcibx79aKRCy.jpg",
  "Frontier": "https://logos-world.net/wp-content/uploads/2021/03/Frontier-Airlines-Emblem.png",
  "Allegiant": "https://1000logos.net/wp-content/uploads/2021/04/Allegiant-Air-logo.png",
  "Mexicana": "",
  "Spirit": "https://www.logo.wine/a/logo/Spirit_Airlines/Spirit_Airlines-Logo.wine.svg",
  "Sun Country": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wv5lkswskqzhkqro47dg",
  "United": "assets/unitedLogo.jpg",
  "Southwest": "https://logos-world.net/wp-content/uploads/2020/10/Southwest-Airlines-Emblem.png",
  "Avelo": "",
  "Amex": "https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg",
  "The Platinum Card from AMEX": "https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg",
  "Chase Sapphire Reserve": "assets/chaseLogo.jpeg",
  "Capital One Venture X": "https://play-lh.googleusercontent.com/GhAZTgji_F_YJ_TmisXH7J0PgIOYNy4vLPULklCV3Ua6cV3epNZki5DxsAe-KZB7XA",
  "Alaska Airlines Visa Signature": "https://yt3.ggpht.com/ytc/AMLnZu-C-uN4bIkAAPybtvT92uFskxUC76aU_JFD05Rpxg=s900-c-k-c0x00ffffff-no-rj",
  "United Explorer Card": "assets/unitedLogo.jpg"
}

splashArts = {
  "Silver": "",
  "American": "assets/americanSplash.png",
  "Alaska": "assets/alaskaSplash3.jpeg",
  "JetBlue": "assets/party-dots.svg",
  "Delta": "https://www.sec.gov/Archives/edgar/data/27904/000101968710004423/delta_8k-ex99011.jpg",
  "Frontier": "assets/frontierSplash.jpeg",
  "Allegiant": "https://1000logos.net/wp-content/uploads/2021/04/Allegiant-Air-logo.png",
  "Mexicana": "",
  "Spirit": "assets/spiritSplash.jpeg",
  "Sun Country": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wv5lkswskqzhkqro47dg",
  "United": "assets/unitedSplash2.jpeg",
  "Southwest": "assets/southwestSplash.jpeg",
  "Avelo": "",
  "Chase Sapphire Reserve": "assets/sapphireSplash.png",
  "Amex": "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/Data/SVG/dls/worldservice-tile-brightblue.svg",
  "The Platinum Card from AMEX": "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/Data/SVG/dls/worldservice-tile-brightblue.svg",
  "Capital One Venture X": "https://tbcdn.talentbrew.com/company/1732/4998/content/capital-one-Catalyst-Stop-Asian-Hate-Town-Hall-Recap-banner.jpg",
  "United Explorer Card": "assets/unitedSplash2.jpeg",
  "Alaska Airlines Visa Signature": "assets/alaskaSplash3.jpeg",
  "Sun Country": "assets/sunCountrySplash.PNG",
  "Spirit": "assets/spiritSplash.PNG",
  "Frontier": "assets/frontierSplash.PNG"
}

applicationLinks = {
  "Chase Sapphire Reserve": "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
  "The Platinum Card from AMEX": "https://americanexpress.com/en-us/referral/KEETOMoKpN?xl=cp01&mpt=v0",
  "Capital One Venture X": "https://www.capitalone.com/credit-cards/venture-x/",
  "United Explorer Card": "https://creditcards.chase.com/travel-credit-cards/united/united-explorer",
  "Alaska Airlines Visa Signature": "https://www.alaskaair.com/content/credit-card/visa-signature"
}



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

function populateLowestFareCard(carrier) {
  //
}

function populateLargestCard() {
  //
}

function isTargetRow(city1selection, city2selection, row) {
  skippable = true;
  if (city1selection == row["city1"] && city2selection == row["city2"]) {
    skippable = false;
  } else if (city2selection == row["city1"] && city1selection == row["city2"]) {
    skippable = false;
  }

  if (skippable) {
    return false;
  } else {
    return true;
  }
}

function populateInsights(city1selection, city2selection, insightData) {

  document.getElementById("maps").style.visibility = "visible";
  document.getElementById("maps").style.height = "100%";

  // console.log(insightData);
  var targetCitiesData = insightData.filter(element => isTargetRow(city1selection, city2selection, element))
  console.log(targetCitiesData);

  //find most recent year
  mostRecentYear = 1999;
  for (var i = 0, len = targetCitiesData.length; i < len; ++i) {
    if (mostRecentYear < targetCitiesData[i]["year"]) {
      mostRecentYear = targetCitiesData[i]["year"];
    }
  }

  //find 4 most recent quarters

  //find 1 most recent quarter
  mostRecentQuarter = 0;
  for (var i = 0, len = targetCitiesData.length; i < len; ++i) {
    if (mostRecentQuarter < targetCitiesData[i]["quarter"] && targetCitiesData[i]["year"] == mostRecentYear) {
      mostRecentQuarter = targetCitiesData[i]["quarter"]
    }
  }

  document.getElementById("insightsTitle").innerHTML = "Flying between " + city1selection.replace(/ *\([^)]*\) */g, "") + " and " + city2selection.replace(/ *\([^)]*\) */g, "") + " as of " + mostRecentYear + ", Q" + mostRecentQuarter;

  //Estalish lowest fare carrier most recent quarter
  lowestFareCarrierRecentRow = (targetCitiesData.filter(element => element["year"] == mostRecentYear && element["quarter"] == mostRecentQuarter)[0]);
  lowestFareCarrierCode = lowestFareCarrierRecentRow["carrier_low"];
  lowestFareCarrier = airlineCodes[lowestFareCarrierCode]
  lowestFareCarrierMS = lowestFareCarrierRecentRow["lf_ms"]
  lowestFareCarrierFare = lowestFareCarrierRecentRow["fare_low"]
  console.log("LF Carrier: " + lowestFareCarrier)

  //Establish largest fare carrier most recent quarter
  largestCarrierRecentRow = (targetCitiesData.filter(element => element["year"] == mostRecentYear && element["quarter"] == mostRecentQuarter)[0]);
  largestCarrierCode = largestCarrierRecentRow["carrier_lg"];
  largestCarrier = airlineCodes[largestCarrierCode]
  largestCarrierMS = largestCarrierRecentRow["large_ms"]
  largestCarrierFare = largestCarrierRecentRow["fare_lg"]
  console.log("largest Carrier: " + largestCarrier)

  //populate card for city1
  // document.getElementById("mapCity1").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + city1selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";
  document.getElementById("mapCity1").style = "background-image: url('" + "https://maps.googleapis.com/maps/api/staticmap?center=" + city1selection.replace(/ *\([^)]*\) */g, "") + "&style=invert_lightness:true&zoom=12&size=800x800&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c" + "');";

  //populate card for city2
  // document.getElementById("mapCity2").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + city2selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";
  document.getElementById("mapCity2").style = "background-image: url('" + "https://maps.googleapis.com/maps/api/staticmap?center=" + city2selection.replace(/ *\([^)]*\) */g, "") + "&style=invert_lightness:true&zoom=12&size=800x800&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c" + "');";

  //populate card for lowest fare carrier:
  document.getElementById("lowestFareCarrierName").innerHTML = lowestFareCarrier;
  document.getElementById("lowestFareCarrierMS").innerHTML = (parseFloat(lowestFareCarrierMS) * 100).toPrecision(3) + "% Share"
  document.getElementById("lowestFareCarrierFare").innerHTML = "Average Fare: $" + (parseFloat(lowestFareCarrierFare)).toFixed(2)
  document.getElementById("lowestFareCarrierLogo").src = logos[lowestFareCarrier];
  document.getElementById("lowestFareCarrierUICard").style = "background-image: url(\'" + splashArts[lowestFareCarrier] + "\');"


  //populate card for largest carrier:
  document.getElementById("largestCarrierName").innerHTML = largestCarrier;
  document.getElementById("largestCarrierMS").innerHTML = (parseFloat(largestCarrierMS)*100).toPrecision(3) + "% Share"
  document.getElementById("largestCarrierFare").innerHTML = "Average Fare: $" + (parseFloat(largestCarrierFare)).toFixed(2)
  document.getElementById("largestCarrierLogo").src = logos[largestCarrier]
  document.getElementById("largestCarrierUICard").style = "background-image: url(\'" + splashArts[largestCarrier] + "\');"

  //Select a credit card to recommend
  cardScores = getCardScores(largestCarrier, lowestFareCarrier, largestCarrierMS, largestCarrierFare, lowestFareCarrierMS, lowestFareCarrierFare);
  cardScoresArray = (Array.from(scoreMap.entries()));

  cardScoresClone = new Map(cardScores);
  var maxRCScard = ([...cardScoresClone.entries()].reduce((a, e ) => e[1] > a[1] ? e : a));
  
  //delete top card from clone map in order to find 2nd highest card
  cardScoresClone.delete(maxRCScard[0]) 
  
  var secondHighestRCScard = ([...cardScoresClone.entries()].reduce((a, e ) => e[1] > a[1] ? e : a));

  console.log("The top card was " + maxRCScard[0] + " with a score of " +maxRCScard[1] + " RCS.");
  console.log("The runner up card was " + secondHighestRCScard[0] + " with a score of " +secondHighestRCScard[1] + " RCS.");

  //Populate recommendation credit card card

  //Update background image and logo
  document.getElementById("recommendationUICard").style = "background-image: url(\'" + splashArts[maxRCScard[0]] + "\');"
  document.getElementById("recommendationLogo").src = logos[maxRCScard[0]];
  //Update Name of Card
  document.getElementById("recommendationCardName").innerHTML = maxRCScard[0];
  //Update RCS
  document.getElementById("recommendationNumRCS").innerHTML = (parseFloat(maxRCScard[1])).toFixed() + " RCS"
  //Update App Link
  // console.log("App link: " + applicationLinks[maxRCScard[0]]);
  document.getElementById("recommendationAppLink").onclick = function() { window.open(applicationLinks[maxRCScard[0]]) };

  //Populate runner up recommendation credit card card

  //Update background image and logo
  document.getElementById("recommendationRunnerUpUICard").style = "background-image: url(\'" + splashArts[secondHighestRCScard[0]] + "\');"
  document.getElementById("recommendationRunnerUpLogo").src = logos[secondHighestRCScard[0]];
  //Update Name of Card
  document.getElementById("recommendationRunnerUpCardName").innerHTML = secondHighestRCScard[0];
  //Update RCS
  document.getElementById("recommendationRunnerUpNumRCS").innerHTML = (parseFloat(secondHighestRCScard[1])).toFixed() + " RCS"
  //Update App Link
  // console.log("App link: " + applicationLinks[maxRCScard[0]]);
  document.getElementById("recommendationRunnerUpAppLink").onclick = function() { window.open(applicationLinks[secondHighestRCScard[0]]) };




  //Display insights
  document.getElementById("insights").style.visibility = "visible";
  document.getElementById("maps").scrollIntoView(true, {behavior: "auto"});

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

    populateInsights(city1selection, city2selection, data)

    // document.getElementById("mapCity1").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + city1selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";
    // document.getElementById("mapCity2").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + city2selection.replace(/ *\([^)]*\) */g, "") + "&zoom=12&size=400x400&key=AIzaSyDg-mF8ofSKCnwVptfJ_X-__JERjMouE-c";

    // document.getElementById("recomText").innerHTML = " <i class=\"bi bi-credit-card\"></i> Our Recommendation <i class=\"bi bi-credit-card\"></i> "

    // document.getElementById("theMapsContainer").style.visibility = "visible";

    var html = '<table class="table"><thead><tr></tr></thead><tbody>';

    html += "<th scope=\"col\">Lowest Fare Carrier</th><th scope=\"col\">Largest Carrier</th><th scope=\"col\">City 1</th><th scope=\"col\">City 2</th><th scope=\"col\">Largest Carrier Avg Fare</th><th scope=\"col\">Year</th><th scope=\"col\">Quarter</th>"

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
      html += '<td>' + global_data[i]["carrier_low"] + '</td>';
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

