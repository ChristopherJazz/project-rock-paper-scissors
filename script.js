function getComputerChoice (min, max){
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    return randomChoice;
}
console.log(getComputerChoice());