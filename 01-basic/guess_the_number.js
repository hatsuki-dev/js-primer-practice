const number = Math.floor(Math.random() * 10) + 1;
for (let guess=1; guess<=10; guess++){
    
    if (guess === number){
        console.log(`正解は${number}でした！`);
        break;
    }else if(guess < number) {
        console.log(`${guess}は小さすぎます`);
    }else{
        console.log(`${guess}は大きすぎます`);
    }
}