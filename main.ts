import inquirer from "inquirer";

function generatedNo(min:number , max:number){
  let minimum = Math.ceil(min);
  let maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}



console.log('\nNumber Guessing Game Starting Now ..........');
console.log('You Have 3 Rounds And In Each Round You Will Get 3 Chances :');


// how many times game will run
let runGame = 1

for (let k=0 ; k<runGame ; k++){

// total game score
let game_score = 0

// rounds to play
let rounds = 3

// loop for game rounds
for(let i=1 ; i<= rounds ;i++){

  // setting score in every round
  let round_score = 0
  let round_no = i
  
  // generating random number
  let guess_number = generatedNo(1 , 10)

  console.log( `\nRound ${round_no} Starting ......`);

  // chances in each round
  let chances = 3

  // loop for chances
  for (let j=1 ; j<=chances ; j++){
    //  chance no
    let Chance_no = j
  
    // taking guess number from user
    let userGuess = await inquirer.prompt({
      type:"number",
      name:"userGuess",
      message:"guess the number : "
    })
  
    // checking if the number user guessed is correct or not
    if(userGuess.userGuess === guess_number ){
      console.log('Correct Guess');

      // now checking in which chance user has guessed the number and giving points 
      if(Chance_no == 1){
        round_score +=10
  
      }else if(Chance_no == 2){
        round_score += 5
  
      }else if(Chance_no == 3){
        round_score += 2
      }
      // not giving more chances when user successfully guessed the number
      break;
  
    }else{ // wrong guess output if the use guess is worng
      console.log('Wrong Guess');
      
    }
    
  }
  // round ending
  console.log( `Round ${round_no} Ended .`);
  
  // adding round score in game score
  game_score += round_score
}

console.log(`Your Score is ${game_score}\n`);


let runGameAgain = await inquirer.prompt({
  type:'input',
  name:'runAgain',
  message:'Do you want play again ? (yes/no)'
})


if(runGameAgain.runAgain.toLowerCase() === 'yes' ||runGameAgain.runAgain.toLowerCase() === 'y'){
  runGame++
}

}