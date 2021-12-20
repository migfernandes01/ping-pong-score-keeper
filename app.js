//Get DOM elements

const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')

}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')

}

const resetBtn = document.querySelector('#reset');

const playToSelect = document.querySelector('#playTo');

let winningScore = 5;
let isGameOver = false;

//Event Listeners
playToSelect.addEventListener('change', () => { //change event
    winningScore = parseInt(playToSelect.value);
    resetGame();
});
p1.button.addEventListener("click", () => {
    updateScores(p1, p2);
});
p2.button.addEventListener("click", () => {
    updateScores(p2, p1);
});
resetBtn.addEventListener('click', resetGame);

//Functions
function updateScores(player, opponent){
    if(!isGameOver){
        player.score++;
        if(player.score == winningScore)
        {
            isGameOver = true; 
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger"); 
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

function resetGame() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    isGameOver = false;
    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");
    p1.button.disabled = false;
    p2.button.disabled = false;
}