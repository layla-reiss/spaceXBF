var omori = JSON.parse('{"name":"omori", "health":106, "juice":73, "attack":30, "defense":22, "speed":28, "luck":5, "hit":100, "emotion":"neutral", "skills":["sadPoem", "stab", "luckySlice", "hackAway"]}')
var aubrey = JSON.parse('{"name":"aubrey", "health":125, "juice":41, "attack":31, "defense":17, "speed":16, "luck":3, "hit":100, "emotion":"neutral", "skills":["pepTalk", "powerHit", "teamSpirit", "windUpThrow"]}');
var hero = JSON.parse('{"name":"hero", "health":114, "juice":73, "attack":20, "defense":24, "speed":14, "luck":5, "hit":100, "emotion":"neutral", "skills":["cook", "massage", "fastFood", "teaTime"]}');
var kel = JSON.parse('{"name":"kel", "health":90, "juice":88, "attack":24, "defense":15, "speed":36, "luck":7, "hit":100, "emotion":"neutral", "skills":["annoy", "rebound", "runNGun", "ricochet"]}');
var cptSpaceboy = JSON.parse('{"name":"Captain Spaceboy", "health":1350, "juice":750, "attack":15, "defense":16, "speed":25, "luck":10, "hit":95, "emotion":"neutral", "skills":["doNothing", "angstySong", "angrySong", "spaceLaser", "bulletHell"]}');
var snacks, toys, target, BASEtarget, opponent = cptSpaceboy, chosenActions = [];
var currentPlayer = kel, playerTurn = true, count = 0;
const BASEomori = JSON.parse('{"name":"omori", "health":106, "juice":73, "attack":30, "defense":22, "speed":28, "luck":5, "hit":100, "emotion":"neutral", "skills":["sadPoem", "stab", "luckySlice", "hackAway"]}')
const BASEaubrey = JSON.parse('{"name":"aubrey", "health":125, "juice":41, "attack":31, "defense":17, "speed":16, "luck":3, "hit":100, "emotion":"neutral", "skills":["pepTalk", "powerHit", "teamSpirit", "windUpThrow"]}');
const BASEhero = JSON.parse('{"name":"hero", "health":114, "juice":73, "attack":20, "defense":24, "speed":14, "luck":5, "hit":100, "emotion":"neutral", "skills":["cook", "massage", "fastFood", "teaTime"]}');
const BASEkel = JSON.parse('{"name":"kel", "health":90, "juice":88, "attack":24, "defense":15, "speed":36, "luck":7, "hit":100, "emotion":"neutral", "skills":["annoy", "rebound", "runNGun", "ricochet"]}');
const BASEcptSpaceboy = JSON.parse('{"name":"Captain Spaceboy", "health":1350, "juice":750, "attack":15, "defense":16, "speed":25, "luck":10, "hit":95, "emotion":"neutral", "skills":["doNothing", "angstySong", "angrySong", "spaceLaser", "bulletHell"]}');

//----------notes-----------
//add targets to skill selection menus
//add indicators on screen for skills
//research hit rates/luck involvements and apply where necessary

function attack() {
    //add emotion handling
    chosenActions.push("attack", (currentPlayer['name']))
    housekeeping();
 }

 function skill() {
    hideButtons();
    showSkillButtons();
}
 
 function item() {
    hideButtons()
    showToyButtons()
}

 function health() {
    hideButtons()
    showSnackButtons()
}

function housekeeping() {
    count += 1
    if (count == 1) {
        currentPlayer = omori;
        let x = document.getElementById("playerQuery");
        x.innerHTML = "What will Omori do?";
    } else if (count == 2) {
        let x = document.getElementById("playerQuery");
        x.innerHTML = "What will Aubrey do?";
        currentPlayer = aubrey;
    } else if (count == 3) {
        let x = document.getElementById("playerQuery");
        x.innerHTML = "What will Hero do?";
        currentPlayer = hero;
    }  else {
        executeActions();
        hideButtons();
    }
    showButtons();
}

function executeActions() {
    chosenActions.forEach(element => {
        if (element[0] == "attack") {
            let atkValue = emotionCheck()
            opponent['health'] -= ((atkValue*2) - opponent['defense']);
            alert("player attacked opponent!")
            alert(currentPlayer['name'], atkValue, opponent['health'])
        } else if (element[0] == "skill") {
            alert(element)
        } else if (element[0] == "snack") {
            alert(element)
        } else if (element[0] == "toy") {
            alert(element)
        }
    });
}

//update emotions for specific attacks
function emotionCheck() {
    if ((currentPlayer['emotion'] == 'happy' && opponent['emotion'] == "angry") || (currentPlayer['emotion'] == 'sad' && opponent['emotion'] == 'happy') || (currentPlayer['emotion'] == "angry" && opponent['emotion'] == "sad")) {
        atkValue = currentPlayer['attack'] * 1.5;
    } else if ((currentPlayer['emotion'] == 'angry' && opponent['emotion'] == "happy") || (currentPlayer['emotion'] == 'happy' && opponent['emotion'] == 'sad') || (currentPlayer['emotion'] == "sad" && opponent['emotion'] == "angry")) {
        atkValue = currentPlayer['attack'] * 0.8;
    } else {
        atkValue = currentPlayer['attack'];
    }
    return atkValue;
}

//show/hide buttons
function hideButtons() {
    let x = document.getElementsByClassName("allButtons");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
}
function showButtons() {
    let x = document.getElementsByClassName("allButtons");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
}
function hideSkillButtons() {
    if (currentPlayer == omori) {
        let x = document.getElementsByClassName("Oskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    } else if (currentPlayer == aubrey) {
        let x = document.getElementsByClassName("Askillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    } else if (currentPlayer == hero) {
        let x = document.getElementsByClassName("Hskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    } else if (currentPlayer == kel) {
        let x = document.getElementsByClassName("Kskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    } else {
        alert("error")
    }
    housekeeping()
}
function showSkillButtons() {
    if (currentPlayer == omori) {
        let x = document.getElementsByClassName("Oskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else if (currentPlayer == aubrey) {
        let x = document.getElementsByClassName("Askillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else if (currentPlayer == hero) {
        let x = document.getElementsByClassName("Hskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else if (currentPlayer == kel) {
        let x = document.getElementsByClassName("Kskillbutton");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else {
        alert("error")
    }
}
function hideToyButtons() {
    let x = document.getElementsByClassName("Toy");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    housekeeping()
}
function showToyButtons() {
    let x = document.getElementsByClassName("Toy");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}
function hideSnackButtons() {
    let x = document.getElementsByClassName("Snack");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    housekeeping()
}
function showSnackButtons() {
    let x = document.getElementsByClassName("Snack");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }   
}

//skills + execution of skills
 function ADDsadPoem() {
    chosenActions.push(["skill", "sadPoem"])
    hideSkillButtons()
 }
 function sadPoem() {
    target['emotion'] = 'sad';
    target['defense'] = BASEtarget['defense'] * 1.25;
    target['speed'] = BASEtarget['speed'] * 0.2;
    omori['juice'] -= 5;
 }
 function ADDstab() {
    chosenActions.push(["skill", "stab"])
    hideSkillButtons()
}

function stab() {
    if (omori['emotion'] == 'sad') {
        opponent['health'] -= 60;
    } else {
        opponent['health'] -= (omori['attack'] * 1.5) - opponent['defense'];
    } 
    omori['juice'] -= 13;
}
 function ADDluckySlice() {
    chosenActions.unshift(["skill", "luckySlice"])
    hideSkillButtons()
}
function luckySlice() {
    if (omori['emotion'] == 'happy') {
        opponent['health'] -= ((omori['attack'] + omori['luck']) * 2) - opponent['defense'];
    } else {
        opponent['health'] -= ((omori['attack'] + omori['luck']) * 1.5) - opponent['defense'];
    }
     omori['juice'] -= 15;
}
 function ADDhackAway() {
    chosenActions.push(["skill", "hackAway"])
    hideSkillButtons()
}
function hackAway() {
    if (omori['emotion'] == 'angry') {
        let atkValue = (omori['attack'] * 2.25) - opponent['defense'];
    } else {
        let atkValue = (omori['attack'] * 2) - opponent['defense'];
    }
    atkValue *= 3;
    opponent['health'] -= atkValue;
    omori['juice'] -= 30;
}
 function ADDpepTalk() {
    chosenActions.push(["skill", "pepTalk"])
    hideSkillButtons()
 }
function pepTalk() {
    target['emotion'] = 'happy';
    target['hit'] = BASEtarget['hit'] * 0.9;
    target['luck'] = BASEtarget['luck'] * 2;
    aubrey['juice'] -= 5;
}
 function ADDteamSpirit() {
    chosenActions.push(["skill", "teamSpirit"])
    hideSkillButtons()
 }
function teamSpirit() { //review maths on these, gonna be base values to calculate on
    aubrey['emotion'] = 'happy';
    target['emotion'] = 'happy';
    target['hit'] = BASEtarget['hit'] * 0.9;
    target['luck'] = BASEtarget['luck'] * 2;
    aubrey['hit'] = BASEaubrey['hit'] * 0.9;
    aubrey['luck'] = BASEaubrey['luck'] * 2;
    aubrey['juice'] -= 10;
}
 function ADDwindUpThrow() {
    chosenActions.push(["skill", "windUpThrow"])
    hideSkillButtons()
 }
function windUpThrow() {
    atkValue = (aubrey['attack'] * 3) - opponent['defense'];
    opponent['health'] -= atkValue;
    aubrey['juice'] -= 20;
}
 function ADDpowerHit() {
    chosenActions.push(["skill", "powerHit"])
    hideSkillButtons()
 }
function powerHit() {
    atkValue = aubrey['attack'] * 2;
    target['health'] -= atkValue;
    target['defense'] -= BASEtarget['defense'] * 0.25;
}
function ADDcook() {
    chosenActions.push(["skill", "cook"])
    hideSkillButtons()
}
function cook() {
    target['health'] += BASEtarget['health'] * 0.75;
    hero['juice'] -= 10;
}
function ADDmassage() {
    chosenActions.push(["skill", "massage"])
    hideSkillButtons()
}
function massage() { 
    if (target['emotion'] == 'happy') {
        target['hit'] = BASEtarget['hit'];
        target['luck'] = BASEtarget['luck'];
    } else  if (target['emotion'] == 'sad') {
        target['defense'] = BASEtarget['defense'];
        target['speed'] = BASEtarget['speed'];
    } else if (target['emotion'] = 'angry') {
        target['attack'] = BASEtarget['attack'];
        target['defense'] = BASEtarget['defense'];
    }
    target['emotion'] = 'neutral';
    hero['juice'] -= 5;
}
function ADDfastFood() {
    chosenActions.unshift(["skill", "fastFood"]);
    hideSkillButtons();
}
function fastFood() {
    target['health'] += (BASEtarget['health'] * 0.4);
    hero['juice'] -= 15;
}
function ADDteaTime() {
    chosenActions.push(["skill", "teaTime"]);
    hideSkillButtons();
}
function teaTime() {
    target['health'] += (BASEtarget['health'] * 0.4);
    target['juice'] += (BASEtarget['juice'] * 0.2);
    hero['juice'] -= 25;
}
function ADDannoy() {
    chosenActions.push(["skill", "annoy"]);
    hideSkillButtons();
}
function annoy() {
    target['attack'] = BASEtarget['attack'] * 1.30;
    target['defense'] = BASEtarget['defense'] * 0.5;
    target['emotion'] = 'angry';
    kel['juice'] -= 5;
}
function ADDricochet() {
    chosenActions.push(["skill", "ricochet"])
    hideSkillButtons()
}
function ricochet() { //needs editing to include 30% damage variation
    atkValue = (kel['attack'] * 3) - opponent['defense'];
    opponent['health'] -= atkValue;
    kel['juice'] -= 30;
}
function ADDrebound() {
    chosenActions.push(["skill", "rebound"]);
    hideSkillButtons();
}
function rebound() {
    atkValue = (kel['attack'] * 2.5) - opponent['defense'];
    opponent['health'] -= atkValue;
    kel['juice'] -= 15;
}
function ADDrunNGun() {
    chosenActions.push(["skill", "runNGun"]);
    hideSkillButtons();
}
function runNGun() {
    atkValue = (kel['speed'] * 1.5) - opponent['defense'];
    opponent['health'] -= atkValue;
    kel['juice'] -= 15;
}
function dandelion() {
    chosenActions.push(["toy", "dandelion"]);
    hideToyButtons()
}
function sparkler() {
    chosenActions.push(["toy", "sparkler"]);
    hideToyButtons()
}
function rubberBand() {
    chosenActions.push(["toy", "rubberBand"]);
    hideToyButtons()
}
function jacks() {
    chosenActions.push(["toy", "jacks"]);
    hideToyButtons()
}

function nachos() {
    chosenActions.push(["snack", "nachos"]);
    hideSnackButtons()
}
function donut() {
    chosenActions.push(["snack", "donut"]);
    hideSnackButtons()
}
function appleJuice() {
    chosenActions.push(["snack", "appleJuice"]);
    hideSnackButtons()
}
function peachSoda() {
    chosenActions.push(["snack", "peachSoda"]);
    hideSnackButtons()
}