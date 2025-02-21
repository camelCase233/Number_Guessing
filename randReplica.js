const numberGen = Math.floor(Math.random()*100)+1;
        console.log(numberGen);
        const submitGuess = document.querySelector(".guessSubmit");
        const guessMade = document.querySelector(".guessField");
        const prevGuesses = document.querySelector(".guesses");
        const displayResult = document.querySelector(".lastResult");
        let counter = 0;
        const estimate = document.querySelector(".lowOrHi");

        submitGuess.addEventListener("click", checkGuess);

        function checkGuess(){
            counter++;
            if(counter == 1){
                prevGuesses.textContent = "You Guessed: ";
            }
            prevGuesses.textContent = prevGuesses.textContent + " "+ guessMade.value;
            if(counter == 10){
                if(guessMade.value == numberGen){
                  displayResult.textContent = "YOU WON OMG";
                }
                else{
                  displayResult.textContent = "GAME OVER!!"
                  estimate.textContent = "You lost :("
                }
                clearField();
                endGame();
                return;
            }
            
            if(guessMade.value == numberGen){
              displayResult.textContent = "WOW YOU WON!";
              clearField();
              endGame();
              return;
            }

            if(guessMade.value != numberGen){
              if(guessMade.value > numberGen){
                estimate.textContent = "Too goddamn high dude";
              }
              else{
                estimate.textContent = "Too low";
              }
              displayResult.textContent = "Wrong answer";
              clearField();
            }
            
        }

        function endGame(){
          submitGuess.disabled = true;
          guessMade.disabled = true;
        }

        function clearField(){
          guessMade.value = "";
        }