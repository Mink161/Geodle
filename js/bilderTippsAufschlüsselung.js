function TipCounter() {
  ++TipAnzahl;
  switch (landZahl) {
    case 0:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Europe/Germany/plates.png";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Europe/Germany/eurozeichen.png";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Europe/Germany/DrivingSide.png";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Europe/Germany/gen.png";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Europe/Germany/phonecode.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Europe/Germany/sign.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Europe/Germany/Bollards.png";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Europe/Germany/Sprache1.png";
          break;
      }
      break;
    case 1:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Northamerica/canada/road.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Northamerica/canada/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Northamerica/canada/ds.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Northamerica/canada/sign3.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Northamerica/canada/sign2.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Northamerica/canada/sign.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Northamerica/canada/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Northamerica/canada/flag.jpg";
          break;
      }
      break;
    case 2:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Northamerica/greenland/road.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Northamerica/greenland/car.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Northamerica/greenland/gen.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Northamerica/greenland/ds.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Northamerica/greenland/boat.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Northamerica/greenland/house.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Northamerica/greenland/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Northamerica/greenland/flag.jpg";
          break;
      }
      break;
    case 3:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Northamerica/Mexico/sign2.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Northamerica/Mexico/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Northamerica/Mexico/road.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Northamerica/Mexico/ds.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Northamerica/Mexico/tank.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Northamerica/Mexico/sign.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Northamerica/Mexico/pole.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Northamerica/Mexico/flag.jpg";
          break;
      }
      break;
    case 4:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Northamerica/USA/gen.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Northamerica/USA/car1.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Northamerica/USA/road.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Northamerica/USA/ds.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Northamerica/USA/sign2.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Northamerica/USA/sign3.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Northamerica/USA/sign.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Northamerica/USA/flag.jpg";
          break;
      }
      break;
    case 5:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/southmiddleamerica/argentina/tree.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src =
            "ressources/southmiddleamerica/argentina/guardrail.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/southmiddleamerica/argentina/gen.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/southmiddleamerica/argentina/sign.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/southmiddleamerica/argentina/ds.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/southmiddleamerica/argentina/road.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/southmiddleamerica/argentina/pole1.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/southmiddleamerica/argentina/flag.jpg";
          break;
      }
      break;
    case 6:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/southmiddleamerica/bolivia/sign.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/southmiddleamerica/bolivia/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/southmiddleamerica/bolivia/road.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/southmiddleamerica/bolivia/flag2.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/southmiddleamerica/bolivia/ds.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/southmiddleamerica/bolivia/house.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/southmiddleamerica/bolivia/pole.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/southmiddleamerica/bolivia/flag.jpg";
          break;
      }
      break;

    case 15:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Africa/Botswana/car.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Africa/Botswana/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Africa/Botswana/ds.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Africa/Botswana/House.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Africa/Botswana/Road.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Africa/Botswana/sign.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Africa/Botswana/sign2.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Africa/Botswana/Flag.jpg";
          break;
      }
      break;
    case 16:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Africa/Eswatini/bus.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Africa/Eswatini/pole.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Africa/Eswatini/sign2.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Africa/Eswatini/street.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Africa/Eswatini/sign.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Africa/Eswatini/gen.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Africa/Eswatini/ds.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Africa/Eswatini/flag.jpg";
          break;
      }
      break;
    case 17:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/Africa/Ghana/gen.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/Africa/Ghana/ds.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/Africa/Ghana/pole.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/Africa/Ghana/sign.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/Africa/Ghana/road.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/Africa/Ghana/Car.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/Africa/Ghana/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/Africa/Ghana/flag.jpg";
          break;
      }
      break;

    case 18:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/kenya/street.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/kenya/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/kenya/ds.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/kenya/sign.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/kenya/car2.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/kenya/dirt.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/kenya/car.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/kenya/flag.jpg";
          break;
      }
      break;

    case 19:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/lesotho/hill.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/lesotho/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/lesotho/pole.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/lesotho/ds.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/lesotho/sign.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/lesotho/road.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/lesotho/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/lesotho/flag.jpg";
          break;
      }
      break;

    case 20:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/Nigeria/ds.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/Nigeria/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/Nigeria/house.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/Nigeria/pole.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/Nigeria/car.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/Nigeria/script.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/Nigeria/followcar.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/Nigeria/flag.jpg";
          break;
      }
      break;
    case 21:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/rwanda/haze.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/rwanda/hill.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/rwanda/gen.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/rwanda/house.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/rwanda/ds.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/rwanda/dirt.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/rwanda/car.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/rwanda/flag.jpg";
          break;
      }
      break;
    case 22:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/senegal/road.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/senegal/ds.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/senegal/rift.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/senegal/gen.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/senegal/plate.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/senegal/pole.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/senegal/car.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/senegal/flag.jpg";
          break;
      }
      break;
    case 23:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/southafrica/ds.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/southafrica/road.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/southafrica/gen.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/southafrica/house.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/southafrica/pole.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/southafrica/sign.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/southafrica/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/southafrica/flag.jpg";
          break;
      }
      break;
    case 24:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/tunisaia/road.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/tunisaia/olive.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/tunisaia/sign.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/tunisaia/gen.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/tunisaia/ds.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/tunisaia/sign2.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/tunisaia/followcar.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/tunisaia/flag.jpg";
          break;
      }
      break;
    case 25:
      switch (TipAnzahl) {
        case 0:
          document.getElementById("text2").innerHTML = "No Hints";
          break;

        case 1:
          document.getElementById("text2").innerHTML = "One Hint";
          var Tip1 = document.getElementById("Tip1");
          var Tip1Bild = document.getElementById("Tip1Bild");
          if (Tip1.style.display === "none") {
            Tip1.style.display = "block";
          }
          Tip1Bild.src = "ressources/africa/uganda/house.jpg";
          break;

        case 2:
          document.getElementById("text2").innerHTML = "Two Hints";
          var Tip2 = document.getElementById("Tip2");
          var Tip2Bild = document.getElementById("Tip2Bild");
          if (Tip2.style.display === "none") {
            Tip2.style.display = "block";
          }
          Tip2Bild.src = "ressources/africa/uganda/gen.jpg";
          break;

        case 3:
          document.getElementById("text2").innerHTML = "Three Hints";
          var Tip3 = document.getElementById("Tip3");
          var Tip3Bild = document.getElementById("Tip3Bild");
          if (Tip3.style.display === "none") {
            Tip3.style.display = "block";
          }
          Tip3Bild.src = "ressources/africa/uganda/ds.jpg";
          break;

        case 4:
          document.getElementById("text2").innerHTML = "Four Hints";
          var Tip4 = document.getElementById("Tip4");
          var Tip4Bild = document.getElementById("Tip4Bild");
          if (Tip4.style.display === "none") {
            Tip4.style.display = "block";
          }
          Tip4Bild.src = "ressources/africa/uganda/road.jpg";
          break;

        case 5:
          document.getElementById("text2").innerHTML = "Five Hints";
          var Tip5 = document.getElementById("Tip5");
          var Tip5Bild = document.getElementById("Tip5Bild");
          if (Tip5.style.display === "none") {
            Tip5.style.display = "block";
          }
          Tip5Bild.src = "ressources/africa/uganda/plate.jpg";
          break;

        case 6:
          document.getElementById("text2").innerHTML = "Six Hints";
          var Tip6 = document.getElementById("Tip6");
          var Tip6Bild = document.getElementById("Tip6Bild");
          if (Tip6.style.display === "none") {
            Tip6.style.display = "block";
          }
          Tip6Bild.src = "ressources/africa/uganda/car.jpg";
          break;
        case 7:
          document.getElementById("text2").innerHTML = "Seven Hints";
          var Tip7 = document.getElementById("Tip7");
          var Tip7Bild = document.getElementById("Tip7Bild");
          if (Tip7.style.display === "none") {
            Tip7.style.display = "block";
          }
          Tip7Bild.src = "ressources/africa/uganda/domain.jpg";
          break;
        case 8:
          document.getElementById("text2").innerHTML = "Eight Hints";
          var Tip8 = document.getElementById("Tip8");
          var Tip8Bild = document.getElementById("Tip8Bild");
          if (Tip8.style.display === "none") {
            Tip8.style.display = "block";
          }
          Tip8Bild.src = "ressources/africa/uganda/flag.jpg";
          break;
      }
      break;
  }
}
