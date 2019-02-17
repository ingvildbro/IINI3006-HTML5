const whitePawn = '&#9817;';
const blackPawn = '&#9823;';

const whitePieces = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;'];
const blackPieces = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];

const whitePiecesRev = whitePieces.slice().reverse();
const blackPiecesRev = blackPieces.slice().reverse();

let isWhite = true;

function switchSides() {
    const top1 = document.getElementById('topFirst');
    const top2 = document.getElementById('topSecond');
    const bot1 = document.getElementById('botFirst');
    const bot2 = document.getElementById('botSecond');

    let newTop1 = (isWhite) ? whitePiecesRev : blackPieces;
    let newBot1 = (isWhite) ? blackPiecesRev : whitePieces;

    for (let i = 0; i < 8; i++) {
        top2.children[i].innerHTML = (isWhite) ? whitePawn : blackPawn;
        bot2.children[i].innerHTML = (isWhite) ? blackPawn : whitePawn;

        top1.children[i].innerHTML = newTop1[i];
        bot1.children[i].innerHTML = newBot1[i];
    }

    isWhite = (!isWhite);
}
