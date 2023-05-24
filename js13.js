//Napravit novi HTML dokument, dodaj naslov h1 "Kamen skare papir".
//Dodaj ekstremnu JavaScript datoteku kojau konzolu nasumicno ispise jednu od mogucnuh opcija.

const niz = ['kamen', 'skare', 'papir'];
const resultParageaf = document.getElementById('result');
let userScore = 0;
let computerScore = 0;
const playerScoreCount = document.getElementById('player-score');
const computerScoreCount = document.getElementById('computer-score');
const rand = Math.floor(Math.random() * 3);
console.log(niz[rand]);


//Nastavlja se
// Dodaj 3 buttona s mogucim izborima i  dodaj im event listener. Na klik buttona se provjerava izbor korisnika i nasumicnog. Ako se izbor podudara, cestitaj korisniku u konzolu. U suprotnom mu ispisi odgovarajucu poruku.
const updateScore = () => {
    playerScoreCount.textContent = userScore;
    computerScoreCount.textContent = computerScore;

}

const checkResult = (event) => {
    const userInput = event.target.textContent.toLowerCase();
    const randomInput = niz[Math.floor(Math.random() * niz.length)];

    if (userInput === randomInput) {
        resultParageaf.textContent = "It's a tie!"
    }else if (
        (userInput === "kamen" && randomInput === "skare") ||
        (userInput === "skare" && randomInput ==="papir") ||
        (userInput === "papir" && randomInput ==="kamen")
    ) {
        resultParageaf.textContent=`Congrats, ${userInput} beats ${randomInput}`
       //istu stvar radi // resultParageaf.textContent="Congrats" + userInput + " beats "+ randomInput;
       userScore++;
       updateScore();
        
    }else {
        resultParageaf.textContent="You lose.Try again!";
        computerScore++;
        updateScore();
    }
};

const buttonNiz = document.querySelectorAll('button');
buttonNiz.forEach((button) => {
    button.addEventListener('click', checkResult);
    
});

//nastavak
//3. Umjesto u konzolu, ispisi rezultat korisniku ispod 3 buttona i objesniti ga rezultaton odigrane igre.

// 4 zadatak 
// Prati rezultat korisnika i racunala s brojacima. Iznad buttona dodaj 2 paragrafa iu azuiraj ih s rezultatima nakon svake odradjene igre.




