$(document).ready(function () {
    $("#navbar").load("Components/Navbar.html");
});
$(document).ready(function () {
    $("#quizz").load("Components/Quizz.html");

});
$(document).ready(function () {
    $("#mere").load("Components/Board.html");

});
$.ajaxSetup({
    cache: false
});
let listaPlayeri;
const request = new XMLHttpRequest();
request.open("GET", "Components/alin.json", true);
request.send(null);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        listaPlayeri = JSON.parse(request.responseText);

    }
}
let apasat = true;
let afisat = false;
let playerAles;
function butonel() {

    if (apasat) {
        apasat = false;

            document.getElementById("login").classList.add('hide');
            document.getElementById("formPlayer").classList.remove('hide');
        if (!afisat) {
            listaPlayeri.members.forEach(member => {
                const player = document.createElement('button');
                player.innerText = "Player:" + member.name + "  with Score:" + member.score;
                player.setAttribute('type','button');
                player.classList.add('lista');
                player.classList.add('smth');
                player.onclick=
                    function(){
                        alert("Ai ales");
                        sessionStorage.setItem('playerAles',member.name);
                        sessionStorage.setItem('playerAlesScor',member.score);
                    };

                document.getElementById('listaa').appendChild(player);
                afisat=true;
            })
        }
    } else return null;

}

function home() {
    document.getElementById("login").classList.remove('hide');
    document.getElementById("formPlayer").classList.add('hide');
    apasat = true;
    document.getElementById('scoreBoardPlayer').innerText = "Player:" + sessionStorage.getItem('playerAles');
    document.getElementById('scoreBoardPlayerAles').innerText = "Score:" + sessionStorage.getItem('playerAlesScor');

}
