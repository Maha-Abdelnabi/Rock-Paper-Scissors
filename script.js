rockEl = document.getElementById("rock");
paperEl = document.getElementById("paper");
scissorsEl = document.getElementById("scissors");
userScoreEl = document.getElementById("user-score");


rockEl.addEventListener("click", ()=>{

    computer = [1,2,3];
    randomIndex = Math.floor((Math.random()*computer.length)+1);
    console.log(randomIndex)
    if (randomIndex === 1){
        userScoreEl.innerHTML="It is a Tie!"
     };
     if (randomIndex=== 2) {
       
       userScoreEl.innerHTML = "Computer wins!";
     };
      if (randomIndex === 3) {
       
        userScoreEl.innerHTML= "You win!"
      }
    }
);


paperEl.addEventListener("click", ()=>{
   
    let computer = [1, 2, 3];
    randomIndex = Math.floor(Math.random() * computer.length + 1);
    console.log(randomIndex);
    if (randomIndex === 2) {
      userScoreEl.innerHTML = "It's a Tie";
    }
    if (randomIndex === 3) {
      userScoreEl.innerHTML = "Computer wins!";
    }
    if (randomIndex === 1) {
      userScoreEl.innerHTML = "You win!";
    }});

scissorsEl.addEventListener("click", ()=>{

    let computer = [1, 2, 3];
    randomIndex = Math.floor(Math.random() * computer.length + 1);
    console.log(randomIndex);
    if (randomIndex === 3) {
      userScoreEl.innerHTML = "It's a Tie";
    }
    if (randomIndex === 2) {
      userScoreEl.innerHTML = "Computer wins!";
    }
    if (randomIndex === 1) {
      userScoreEl.innerHTML= "You win!"
    }
});