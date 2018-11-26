var TabRecUn = [];
var TabRecDeux = [];

var TabDepUn = [];
var TabDepDeux = [];

var TabEpargne = [];


// Tableau des Depense

document.getElementById('SubmitDepense2').addEventListener("click",

    function () {

        var DepenseUn = document.getElementById('DepenseUn').value;
        var DepenseDeux = document.getElementById('DepenseDeux').value;

        document.getElementById('Resultat').innerHTML += DepenseUn + ' : ' + DepenseDeux + '<br>' ;
        TabRecUn.push(DepenseDeux);

        Total();
});

document.getElementById('SubmitDepense1').addEventListener("click",

    function () {

        var DepenseTrois = document.getElementById("Nature-Select").options[document.getElementById('Nature-Select').selectedIndex].text;
        var DepenseQuatre = document.getElementById('DepenseQuatre').value;

        document.getElementById('Resultat').innerHTML += DepenseTrois + ' : ' + DepenseQuatre + '<br>' ;
        TabRecDeux.push(DepenseQuatre);

        Total();
    });

        function Total() {


        var totalD2 = 0;
        for (var i = 0; i < TabRecUn.length; i++) {
            totalD2 += parseFloat(TabRecUn[i]);

        }

        var totalD = 0;
        for (var i = 0; i < TabRecDeux.length; i++) {
            totalD += parseFloat(TabRecDeux[i]);
        }

        document.getElementById('TitreResultat').innerHTML = totalD + totalD2 + " euros "; }




// Tableau des Recettes

document.getElementById('SubmitRecette2').addEventListener("click",

    function () {

        var RecetteUn = document.getElementById('RecetteUn').value;
        var RecetteDeux = document.getElementById('RecetteDeux').value;

        document.getElementById('Resultat2').innerHTML += RecetteUn + ' : ' + RecetteDeux + '<br>';
        TabDepUn.push(RecetteDeux);

        Total2();
    });

document.getElementById('SubmitRecette1').addEventListener("click",

    function () {

        var RecetteTrois = document.getElementById('NatureSelect').value;
        var RecetteQuatre = document.getElementById('RecetteQuatre').value;

        document.getElementById('Resultat2').innerHTML += RecetteTrois + ' : ' + RecetteQuatre + '<br>';
        TabDepDeux.push(RecetteQuatre);

        Total2();
    });

function Total2() {


    var totalR2 = 0;
    for (var i = 0; i < TabDepUn.length; i++) {
        totalR2 += parseFloat(TabDepUn[i]);

    }

    var totalR = 0;
    for (var i = 0; i < TabDepDeux.length; i++) {
        totalR += parseFloat(TabDepDeux[i]);
    }

    document.getElementById('TitreResultat2').innerHTML = totalR + totalR2 + " euros "; }

// Tableau Epargne

document.getElementById('SubmitEpargne').addEventListener("click",

    function () {

        var EpargneUn = document.getElementById('EpargneUn').value;
        var EpargneDeux = document.getElementById('EpargneDeux').value;

        document.getElementById('Resultat3').innerHTML += EpargneUn + ' : ' + EpargneDeux + '<br>';
        TabEpargne.push(EpargneDeux);

        TotalE();
    });


function TotalE() {


    var totalE = 0;
    for (var i = 0; i < TabEpargne.length; i++) {
        totalE += parseFloat(TabEpargne[i]);

    }

    document.getElementById('titreResultat3').innerHTML = totalE + " euros "; }
