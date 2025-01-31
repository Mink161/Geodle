var TipAnzahl = 0;
var landZahl;
var landText;
var InputLand;
var Tipp;
var TippZahl;

function Submit() {
  var Tipp = document.getElementById("TipButton").innerHTML;
  if (Tipp == "Germany") {
    TippZahl = 0;
  } else if (Tipp == "Canada") {
    TippZahl = 1;
  } else if (Tipp == "Greenland") {
    TippZahl = 2;
  } else if (Tipp == "Mexico") {
    TippZahl = 3;
  } else if (Tipp == "USA") {
    TippZahl = 4;
  } else if (Tipp == "Argentina") {
    TippZahl = 5;
  } else if (Tipp == "Bolivia") {
    TippZahl = 6;
  } else if (Tipp == "Brazil") {
    TippZahl = 7;
  } else if (Tipp == "Chile") {
    TippZahl = 8;
  } else if (Tipp == "Colombia") {
    TippZahl = 9;
  } else if (Tipp == "Dominican-Republic") {
    TippZahl = 10;
  } else if (Tipp == "Ecuador") {
    TippZahl = 11;
  } else if (Tipp == "Guatemala") {
    TippZahl = 12;
  } else if (Tipp == "Panama") {
    TippZahl = 13;
  } else if (Tipp == "Peru") {
    TippZahl = 14;
  } else if (Tipp == "Botswana") {
    TippZahl = 15;
  } else if (Tipp == "Eswatini") {
    TippZahl = 16;
  } else if (Tipp == "Ghana") {
    TippZahl = 17;
  } else if (Tipp == "Kenya") {
    TippZahl = 18;
  } else if (Tipp == "Lesotho") {
    TippZahl = 19;
  } else if (Tipp == "Nigeria") {
    TippZahl = 20;
  } else if (Tipp == "Rwanda") {
    TippZahl = 21;
  } else if (Tipp == "Senegal") {
    TippZahl = 22;
  } else if (Tipp == "Tunisaia") {
    TippZahl = 23;
  } else if (Tipp == "Uganda") {
    TippZahl = 24;
  } else if (Tipp == "South-Africa") {
    TippZahl = 84;
  } else if (Tipp == "Bangladesh") {
    TippZahl = 25;
  } else if (Tipp == "Bhutan") {
    TippZahl = 26;
  } else if (Tipp == "Cambodia") {
    TippZahl = 27;
  } else if (Tipp == "China") {
    TippZahl = 28;
  } else if (Tipp == "India") {
    TippZahl = 29;
  } else if (Tipp == "Indonesia") {
    TippZahl = 30;
  } else if (Tipp == "Israel") {
    TippZahl = 31;
  } else if (Tipp == "Japan") {
    TippZahl = 32;
  } else if (Tipp == "Jordan") {
    TippZahl = 33;
  } else if (Tipp == "Kazakhstan") {
    TippZahl = 34;
  } else if (Tipp == "Kyrgistan") {
    TippZahl = 35;
  } else if (Tipp == "Lao") {
    TippZahl = 36;
  } else if (Tipp == "Libanon") {
    TippZahl = 37;
  } else if (Tipp == "Madagascar") {
    TippZahl = 38;
  } else if (Tipp == "Malaysia") {
    TippZahl = 39;
  } else if (Tipp == "Mongolia") {
    TippZahl = 40;
  } else if (Tipp == "Oman") {
    TippZahl = 41;
  } else if (Tipp == "Phillipines") {
    TippZahl = 42;
  } else if (Tipp == "Qatar") {
    TippZahl = 43;
  } else if (Tipp == "Russia") {
    TippZahl = 44;
  } else if (Tipp == "South-Korea") {
    TippZahl = 45;
  } else if (Tipp == "Taiwan") {
    TippZahl = 46;
  } else if (Tipp == "Thailand") {
    TippZahl = 47;
  } else if (Tipp == "UAE") {
    TippZahl = 48;
  } else if (Tipp == "Albania") {
    TippZahl = 49;
  } else if (Tipp == "Andorra") {
    TippZahl = 50;
  } else if (Tipp == "Austria") {
    TippZahl = 51;
  } else if (Tipp == "Belgium") {
    TippZahl = 52;
  } else if (Tipp == "Bulgaria") {
    TippZahl = 53;
  } else if (Tipp == "Croatia") {
    TippZahl = 54;
  } else if (Tipp == "Czechia") {
    TippZahl = 55;
  } else if (Tipp == "Estonia") {
    TippZahl = 56;
  } else if (Tipp == "France") {
    TippZahl = 57;
  } else if (Tipp == "Germany") {
    TippZahl = 58;
  } else if (Tipp == "Gibraltar") {
    TippZahl = 59;
  } else if (Tipp == "Greece") {
    TippZahl = 60;
  } else if (Tipp == "Hungary") {
    TippZahl = 61;
  } else if (Tipp == "Iceland") {
    TippZahl = 62;
  } else if (Tipp == "Ireland") {
    TippZahl = 63;
  } else if (Tipp == "Italy") {
    TippZahl = 64;
  } else if (Tipp == "Latvia") {
    TippZahl = 65;
  } else if (Tipp == "Lithunia") {
    TippZahl = 66;
  } else if (Tipp == "Luxembourg") {
    TippZahl = 67;
  } else if (Tipp == "Monaco") {
    TippZahl = 68;
  } else if (Tipp == "Montenegro") {
    TippZahl = 69;
  } else if (Tipp == "Netherlands") {
    TippZahl = 70;
  } else if (Tipp == "North-Macedonia") {
    TippZahl = 71;
  } else if (Tipp == "Poland") {
    TippZahl = 72;
  } else if (Tipp == "Portugal") {
    TippZahl = 73;
  } else if (Tipp == "Romania") {
    TippZahl = 74;
  } else if (Tipp == "San-Marino") {
    TippZahl = 75;
  } else if (Tipp == "Serbia") {
    TippZahl = 76;
  } else if (Tipp == "Slovakia") {
    TippZahl = 77;
  } else if (Tipp == "Slovenia") {
    TippZahl = 78;
  } else if (Tipp == "Spain") {
    TippZahl = 79;
  } else if (Tipp == "Switzerland") {
    TippZahl = 80;
  } else if (Tipp == "Turkey") {
    TippZahl = 81;
  } else if (Tipp == "UK") {
    TippZahl = 82;
  } else if (Tipp == "Ukraine") {
    TippZahl = 83;
  }

  if (landZahl == TippZahl) {
    alertrichtig = "You guessed " + Tipp + ". Thats right!";
    alert(alertrichtig);
  } else {
    alert("You guessed " + Tipp + ". Thats Wrong!");
  }
}

function NextCountry() {
  document.getElementById("Tip1Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip2Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip3Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip4Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip5Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip6Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip7Bild").src =
    "ressources/Common/questionMark.png";
  document.getElementById("Tip8Bild").src =
    "ressources/Common/questionMark.png";
  landZahl = Math.floor(Math.random() * 25);
  TipAnzahl = 0;
}
function Landaussuchen() {
  landZahl = Math.floor(Math.random() * 25);
}

function Canada() {
  document.getElementById("TipButton").innerHTML = "Canada";
}
function Greenland() {
  document.getElementById("TipButton").innerHTML = "Greenland";
}
function Mexico() {
  document.getElementById("TipButton").innerHTML = "Mexico";
}
function USA() {
  document.getElementById("TipButton").innerHTML = "USA";
}
function Argentina() {
  document.getElementById("TipButton").innerHTML = "Argentina";
}
function Bolivia() {
  document.getElementById("TipButton").innerHTML = "Bolivia";
}
function Brazil() {
  document.getElementById("TipButton").innerHTML = "Brazil";
}
function Chile() {
  document.getElementById("TipButton").innerHTML = "Chile";
}
function Colombia() {
  document.getElementById("TipButton").innerHTML = "Colombia";
}
function DominicanRepublic() {
  document.getElementById("TipButton").innerHTML = "Dominican-Republic";
}
function Ecuador() {
  document.getElementById("TipButton").innerHTML = "Ecuador";
}
function Guatemala() {
  document.getElementById("TipButton").innerHTML = "Guatemala";
}
function Panama() {
  document.getElementById("TipButton").innerHTML = "Panama";
}
function Peru() {
  document.getElementById("TipButton").innerHTML = "Peru";
}
function Botswana() {
  document.getElementById("TipButton").innerHTML = "Botswana";
}
function Eswatini() {
  document.getElementById("TipButton").innerHTML = "Eswatini";
}
function Ghana() {
  document.getElementById("TipButton").innerHTML = "Ghana";
}
function Kenya() {
  document.getElementById("TipButton").innerHTML = "Kenya";
}
function Lesotho() {
  document.getElementById("TipButton").innerHTML = "Lesotho";
}
function Nigeria() {
  document.getElementById("TipButton").innerHTML = "Nigeria";
}
function Rwanda() {
  document.getElementById("TipButton").innerHTML = "Rwanda";
}
function Senegal() {
  document.getElementById("TipButton").innerHTML = "Senegal";
}
function Tunisaia() {
  document.getElementById("TipButton").innerHTML = "Tunisaia";
}
function Uganda() {
  document.getElementById("TipButton").innerHTML = "Uganda";
}
function SouthAfrica() {
  document.getElementById("TipButton").innerHTML = "South-Africa";
}
function Bangladesh() {
  document.getElementById("TipButton").innerHTML = "Bangladesh";
}
function Bhutan() {
  document.getElementById("TipButton").innerHTML = "Bhutan";
}
function Cambodia() {
  document.getElementById("TipButton").innerHTML = "Cambodia";
}
function China() {
  document.getElementById("TipButton").innerHTML = "China";
}
function India() {
  document.getElementById("TipButton").innerHTML = "India";
}
function Indonesia() {
  document.getElementById("TipButton").innerHTML = "Indonesia";
}
function Israel() {
  document.getElementById("TipButton").innerHTML = "Israel";
}
function Japan() {
  document.getElementById("TipButton").innerHTML = "Japan";
}
function Jordan() {
  document.getElementById("TipButton").innerHTML = "Jordan";
}
function Kazakhstan() {
  document.getElementById("TipButton").innerHTML = "Kazakhstan";
}
function Kyrgistan() {
  document.getElementById("TipButton").innerHTML = "Kyrgistan";
}
function Lao() {
  document.getElementById("TipButton").innerHTML = "Lao";
}
function Libanon() {
  document.getElementById("TipButton").innerHTML = "Libanon";
}
function Madagascar() {
  document.getElementById("TipButton").innerHTML = "Madagascar";
}
function Malaysia() {
  document.getElementById("TipButton").innerHTML = "Malaysia";
}
function Mongolia() {
  document.getElementById("TipButton").innerHTML = "Mongolia";
}
function Oman() {
  document.getElementById("TipButton").innerHTML = "Oman";
}
function Phillipines() {
  document.getElementById("TipButton").innerHTML = "Phillipines";
}
function Qatar() {
  document.getElementById("TipButton").innerHTML = "Qatar";
}
function Russia() {
  document.getElementById("TipButton").innerHTML = "Russia";
}
function SouthKorea() {
  document.getElementById("TipButton").innerHTML = "South-Korea";
}
function Taiwan() {
  document.getElementById("TipButton").innerHTML = "Taiwan";
}
function Thailand() {
  document.getElementById("TipButton").innerHTML = "Thailand";
}
function UAE() {
  document.getElementById("TipButton").innerHTML = "UAE";
}
function Albania() {
  document.getElementById("TipButton").innerHTML = "Albania";
}
function Andorra() {
  document.getElementById("TipButton").innerHTML = "Andorra";
}
function Austria() {
  document.getElementById("TipButton").innerHTML = "Austria";
}
function Belgium() {
  document.getElementById("TipButton").innerHTML = "Belgium";
}
function Bulgaria() {
  document.getElementById("TipButton").innerHTML = "Bulgaria";
}
function Croatia() {
  document.getElementById("TipButton").innerHTML = "Croatia";
}
function Czechia() {
  document.getElementById("TipButton").innerHTML = "Czechia";
}
function Estonia() {
  document.getElementById("TipButton").innerHTML = "Estonia";
}
function France() {
  document.getElementById("TipButton").innerHTML = "France";
}
function Germany() {
  document.getElementById("TipButton").innerHTML = "Germany";
}
function Gibraltar() {
  document.getElementById("TipButton").innerHTML = "Gibraltar";
}
function Greece() {
  document.getElementById("TipButton").innerHTML = "Greece";
}
function Hungary() {
  document.getElementById("TipButton").innerHTML = "Hungary";
}
function Iceland() {
  document.getElementById("TipButton").innerHTML = "Iceland";
}
function Ireland() {
  document.getElementById("TipButton").innerHTML = "Ireland";
}
function Italy() {
  document.getElementById("TipButton").innerHTML = "Italy";
}
function Latvia() {
  document.getElementById("TipButton").innerHTML = "Latvia";
}
function Lithunia() {
  document.getElementById("TipButton").innerHTML = "Lithunia";
}
function Luxembourg() {
  document.getElementById("TipButton").innerHTML = "Luxembourg";
}
function Monaco() {
  document.getElementById("TipButton").innerHTML = "Monaco";
}
function Montenegro() {
  document.getElementById("TipButton").innerHTML = "Montenegro";
}
function Netherlands() {
  document.getElementById("TipButton").innerHTML = "Netherlands";
}
function NorthMacedonia() {
  document.getElementById("TipButton").innerHTML = "North-Macedonia";
}
function Poland() {
  document.getElementById("TipButton").innerHTML = "Poland";
}
function Portugal() {
  document.getElementById("TipButton").innerHTML = "Portugal";
}
function Romania() {
  document.getElementById("TipButton").innerHTML = "Romania";
}
function SanMarino() {
  document.getElementById("TipButton").innerHTML = "San-Marino";
}
function Serbia() {
  document.getElementById("TipButton").innerHTML = "Serbia";
}
function Slovakia() {
  document.getElementById("TipButton").innerHTML = "Slovakia";
}
function Slovenia() {
  document.getElementById("TipButton").innerHTML = "Slovenia";
}
function Spain() {
  document.getElementById("TipButton").innerHTML = "Spain";
}
function Switzerland() {
  document.getElementById("TipButton").innerHTML = "Switzerland";
}
function Turkey() {
  document.getElementById("TipButton").innerHTML = "Turkey";
}
function UK() {
  document.getElementById("TipButton").innerHTML = "UK";
}
function Ukraine() {
  document.getElementById("TipButton").innerHTML = "Ukraine";
}
