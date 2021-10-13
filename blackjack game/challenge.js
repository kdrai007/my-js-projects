let blackjackgame = {
    'You': { 'scorespan': '#your-blackjack-score', 'div': '#your-box', 'score': 0 },
    'Dealer': { 'scorespan': '#dealer-blackjack-score', 'div': '#dealer-box', 'score': 0 },
    'Cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    'Cardmap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'K': 10, 'Q': 10, 'A': [1, 11] },
    'wins':0,
    'losses':0,
    'draw':0,
};
const you = blackjackgame['You']
const dealer = blackjackgame['Dealer']

const hitsound = new Audio('blackjack_assets/sounds/swish.m4a');
const winsound= new Audio('blackjack_assets/sounds/cash.mp3')
const losssound= new Audio('blackjack_assets/sounds/aww.mp3')

document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackhit);
document.querySelector('#blackjack-stand-btn').addEventListener('click', dealerlogic);
document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackdeal);


function blackjackhit() {
    let card = Randomcard()
    showcard(card, you);
    updatescore(card, you);
    showscore(you)
}
function Randomcard() {
    let randomindex = Math.floor(Math.random() * 13);
    return blackjackgame['Cards'][randomindex];
}

function showcard(card, player) {
    if (player['score'] <= 21) {
        let cardimage = document.createElement('img');
        cardimage.src = 'blackjack_assets/images/' + card + '.png';
        document.querySelector(player['div']).appendChild(cardimage)
        hitsound.play();
    }
}
function blackjackdeal() {
    showResult(ComputeWinner());
    TableResults();
    let yourimage = document.querySelector('#your-box').querySelectorAll('img');
    for (let i = 0; i < yourimage.length; i++) {
        yourimage[i].remove();
    }
    let dealerimage = document.querySelector('#dealer-box').querySelectorAll('img');
    for (let i = 0; i < dealerimage.length; i++) {
        dealerimage[i].remove();

    }
    you['score'] = 0;
    dealer['score'] = 0;

    document.querySelector('#your-blackjack-score').textContent = 0;
    document.querySelector('#dealer-blackjack-score').textContent = 0;

    document.querySelector('#your-blackjack-score').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-score').style.color = '#ffffff';

    // document.querySelector('#blackjack-result').textContent = "let's play";
    // document.querySelector('#blackjack-result').style.color = 'black';
}
function updatescore(card, player) {
    if (card === 'A') {
        if (player['score'] + blackjackgame['Cardmap'][card][1] <= 21) {
            player['score'] += blackjackgame['Cardmap'][card][1];
        } else {
            player['score'] += blackjackgame['Cardmap'][card][0];
        }
    } else {
        player['score'] += blackjackgame['Cardmap'][card];
    }
    // player['score'] += blackjackgame['Cardmap'][card];

}
function showscore(player) {
    if (player['score'] > 21) {
        document.querySelector(player['scorespan']).textContent = 'BUST!';
        document.querySelector(player['scorespan']).style.color = 'red';
    }
    else {
        document.querySelector(player['scorespan']).textContent = player['score'];
    }
}
function dealerlogic() {
    let card = Randomcard();
    showcard(card, dealer);
    updatescore(card, dealer);
    showscore(dealer);

}
//This function will declare the winner and losser
function ComputeWinner() {
    let winner;
    if (you['score'] <= 21) {
        if (you['score'] > dealer['score'] || (dealer['score'] > 21)) {
            winner = you;
            console.log('you win!')

        } else if (you['score'] < dealer['score']) {
            winner = dealer;
            console.log('you lost!')
        } else if (you['score'] === dealer['score']) {
            console.log('you drew')
        }

    } else if (you['score'] > 21 && dealer['score'] <= 21) {
        winner = dealer;
        console.log('dealer won!')
    } else if (you['score'] > 21 && dealer['winner'] > 21) {
        console.log('Tie!')
    }
    
    console.log('winner is', winner)
    return winner
}

function showResult(winner){
    let message,messagecolor;
    if(winner===you){
        message='You won!';
        messagecolor='green'
        winsound.play()

    }else if(winner===dealer){
        message='You loss';
        messagecolor='red';
        losssound.play()
    }
    else{
        message='You Drew!';
        messagecolor='black';
    }
    document.querySelector('#blackjack-result').textContent=message;
    document.querySelector('#blackjack-result').style.color=messagecolor;

}
function TableResults(){
    let winner=ComputeWinner();
    if (winner===you){
        blackjackgame['wins']++;
    }else if(winner===dealer){
        blackjackgame['losses']++;
    }else{
        blackjackgame['draw']++;
    }
    document.querySelector('#wins').textContent=blackjackgame['wins'];
    document.querySelector('#losses').textContent=blackjackgame['losses'];
    document.querySelector('#draws').textContent=blackjackgame['draw'];

}
