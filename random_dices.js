function rollDice(){
    let player1 = Math.floor(Math.random()*6+1);
    let player2 = Math.floor(Math.random()*6+1);

    document.getElementById("dice1").innerText =player1;
    document.getElementById("dice2").innerText =player2;

    let resultText = "" ;

    if(player1 > player2){
        resultText=" Player1 Wins";
    }
    else if(player1 < player2){
        resultText=" Player2 Wins";
    }
    else{
        resultText = "Its a Draw";
    }
    document.getElementById("result").innerText = resultText;
}

//dessert picker
// let desserts =['cake', 'brownie','pancake','cookie', 'donuts'];

// let randomDessert = desserts[Math.floor(Math.random() * desserts.lenght)];

