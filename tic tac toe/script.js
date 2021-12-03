const Resetbtn = document.querySelector('#reset');
let Boxs = document.getElementsByClassName('box');
let Gameover = false;


let turn = "X"
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const CheckWin = () => {
    let BoxItem = document.getElementsByClassName('boxitem')
    wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 134],
    ]
    wins.forEach(e => {
        if ((BoxItem[e[0]].innerText === BoxItem[e[1]].innerText) && (BoxItem[e[2]].innerText === BoxItem[e[1]].innerText) && (BoxItem[e[0]].innerText !== '')) {
            document.querySelector('.turn').textContent = BoxItem[e[0]].innerText + " WON "
            Gameover = true;
            
            document.querySelector('.line').style.width = `20vw`
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            
        }
    })
}
Array.from(Boxs).forEach(element => {
    let BoxItem = element.querySelector('.boxitem');
    element.addEventListener('click', function () {
        if (BoxItem.innerText === '') {

            BoxItem.innerText = turn;
            turn = changeTurn()
            CheckWin();
            if (!Gameover) {
                document.querySelector('.turn').textContent = "Turn of " + turn;
            }
        }
    })
})

Resetbtn.addEventListener('click', function () {
    let Boxtexts = document.querySelectorAll('.boxitem') 
    document.querySelector('.line').style.width = `0`;
    Array.from(Boxtexts).forEach(element => {
        element.textContent = ""

    })
    turn = "X";
    Gameover = false;
   
    if (!Gameover) {
        document.querySelector('.turn').textContent = "Turn of " + turn;
    }
})