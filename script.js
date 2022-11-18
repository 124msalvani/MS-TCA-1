//document.getElementById("states").addEventListener("onchange", changePostcard);

function changePostcard() {
  getState();
  displayState();
  ChangeBackgroundImageOfTab();
  Greetings();
}

function getState() {
  var value = document.getElementById("states").value;
  //var value = e.value;
  console.log(value);
}

var StateName;

function displayState() {
  var value = document.getElementById("states").value;
  if (value == "al") {
    StateName = "Alabama";
    StateName = "Alabama";
  }
  else if (value == "ak") {
    StateName = "Alaska";
  }
  else if (value == "az") {
    StateName = "Arizona";
  }
  else if (value == "ar") {
    StateName = "Arkansas";
  }
  else if (value == "ca") {
    StateName = "California";
  }
  else if (value == "co") {
    StateName = "Colorado";
  }
  else if (value == "ct") {
    StateName = "Connecticut";
  }
  else if (value == "de") {
    StateName = "Deleware";
  }
  else if (value == "dc") {
    StateName = "Washington D.C.";
  }
  else if (value == "fl") {
    StateName = "Florida";
  }
  else if (value == "ga") {
    StateName = "Georgia";
  }
  else if (value == "hi") {
    StateName = "Hawaii";
  }
  else if (value == "id") {
    StateName = "Illinois";
  }
  else if (value == "in") {
    StateName = "Indiana";
  }
  else if (value == "ia") {
    StateName = "Iowa";
  }
  else if (value == "ks") {
    StateName = "Kansas";
  }
  else if (value == "la") {
    StateName = "Louisiana";
  }
  else if (value == "me") {
    StateName = "Maine";
  }
  else if (value == "md") {
    StateName = "Maryland";
  }
  else if (value == "ma") {
    StateName = "Massachusetts";
  }
  else if (value == "mi") {
    StateName = "Michigan";
  }
  else if (value == "mn") {
    StateName = "Minnesota";
  }
  else if (value == "mo") {
    StateName = "Missouri";
  }
  else if (value == "mt") {
    StateName = "Montana";
  }
  else if (value == "ne") {
    StateName = "Nebraska";
  }
  else if (value == "nv") {
    StateName = "Nevada";
  }
  else if (value == "nh") {
    StateName = "New Hampshire";
  }
  else if (value == "nj") {
    StateName = "New Jersey";
  }
  else if (value == "ny") {
    StateName = "New York";
  }
  else if (value == "nm") {
    StateName = "New Mexico";
  }
  else if (value == "nc") {
    StateName = "North Carolina";
  }
  else if (value == "nd") {
    StateName = "North Dakota";
  }
  else if (value == "oh") {
    StateName = "Ohio";
  }
  else if (value == "ok") {
    StateName = "Oklahoma";
  }
  else if (value == "or") {
    StateName = "Oregon";
  }
  else if (value == "pa") {
    StateName = "Pennsylvania";
  }
  else if (value == "sc") {
    StateName = "South Dakota";
  }
  else if (value == "sd") {
    StateName = "South Carolina";
  }
    else if (value == "ri") {
    StateName = "Rhode Island";
  }
  else if (value == "tn") {
    StateName = "Tennessee";
  }
  else if (value == "tx") {
    StateName = "Texas";
  }
  else if (value == "vt") {
    StateName = "Vermont";
  }
  else if (value == "va") {
    StateName = "Virginia";
  }
  else if (value == "wa") {
    StateName = "Washington";
  }
  else if (value == "wv") {
    StateName = "West Virginia";
  } 
  else if (value == "wi") {
    StateName = "Wisconsin";
  }
  else if (value == "wy") {
    StateName = "Wyoming";
  }
  else {
    console.log("idk");
  }
}

function ChangeBackgroundImageOfTab() {
  var value = document.getElementById("states").value;
  var backgroundurl = 'url(img/' + value + '@2x.jpg';
  document.getElementById("postcard").style.backgroundImage = backgroundurl;
}


function Greetings() {
  var value = document.getElementById("states").value;
  var upperValue = value.toUpperCase();
  console.log(upperValue);
  document.getElementById("greeting").innerHTML = "Greetings from";
  document.getElementById("state-heading").innerHTML = " " + StateName + "!";
}