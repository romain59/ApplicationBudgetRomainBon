

document.getElementById('SubmitDepense').addEventListener("click",

    function () {

        var DepenseUn = document.getElementById('DepenseUn').value;
        var DepenseDeux = document.getElementById('DepenseDeux').value;

        document.getElementById('Resultat').innerHTML += DepenseUn + ' : ' + DepenseDeux + '<br>';

});

document.getElementById('SubmitRecette').addEventListener("click",

    function () {

        var RecetteUn = document.getElementById('RecetteUn').value;
        var RecetteDeux = document.getElementById('RecetteDeux').value;

        document.getElementById('Resultat2').innerHTML += RecetteUn + ' : ' + RecetteDeux + '<br>';

    });

document.getElementById('SubmitEpargne').addEventListener("click",

    function () {

        var EpargneUn = document.getElementById('EpargneUn').value;
        var EpargneDeux = document.getElementById('EpargneDeux').value;

        document.getElementById('Resultat3').innerHTML += EpargneUn + ' : ' + EpargneDeux + '<br>';

        document.getElementById('TitreResultat').innerHTML += EpargneUn + EpargneUn ;
    });


/*var Depense1 = document.getElementById('DepenseUn').value;
document.getElementById('TitreResultat').innerHTML += Depense1;*/