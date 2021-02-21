// part 1: First letter of Name
function firstLetterName(name) {
    var name ;
    var first = name.charAt(0);
    alert("the name " + name + " starts with the letter " + first);
}

// part 2: Divisible by Two
function divisibleByTwo(x) {
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
   
}

// part 3: Find the largest number
var num = [1,44,8,4,10,6,27]

function largestNum() {
    let highest = 0
    for(let i = 0; i < num.length; i++){
        if ( num[i] > highest){
            highest = num[i];
        }
    }
    return highest;
}

// part 5: calling the functions
firstLetterName("Tremayne");

var sum = divisibleByTwo(10);
console.log("The number 10 is divisible by 2:" + sum);

console.log(largestNum(num));