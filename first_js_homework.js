//--Section 1
//1. DRY stands for Don't Repeat Yourself. Its a programming practice used encourage the practice of avoiding 
//redundancy when writing software, instead we should save repetitive code within variables we can call upon during a future iteration.
//2. Const stands for cosntant, indicating a variable that is not going to be changed in a program. Let creates a variable that is
//limited to the block of code it is inserted in , Var allows you to create variables that are globally scoped - both can be changed at any time in a separate line of code.
//--Section 2
const a =  4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

if(a<b) console.log("true");
if(c>d) console.log("true");
if('Name' == 'Name') console.log("Names are True");
if(a<b<c) console.log("boolean is true");
if(a == a && a < d) console.log("true");
if(e !== 'Kevin') console.log("true again");
if(48 == '48') console.log("true");
if(f !== e) console.log("true");

var g = 0;
console.log(g);
var g = b + c;
console.log(g);


//Answers
//1. I used var for variable g so that I may be able to change it afterwards
//2. if I used const I got an error which is why I switched to var
//3. I get an error since I can not place a value at the left hand side of a variable

if(a > (b || f) < !f && e !== c) console.log("bonus is true")

//--Section 3

//Answers
//1. It is an infinite loop because the statement within the WHILE loop (while(true))
//does not have a false end point - we are not telling the computer when to stop 
//running the code
//2. It is not an infine loop because you will get an error due to the
//CONST variable, if you placed a VAR instead of CONST the code will stop 
//once the computer reads 'runProgram = false'

//Reading Code Exercise
//Creates a variable 'letters' and gives it a avlue of 'A'
let letters = "A";
//creates a variable i and gives it a value of 0
let i = 0;
//starts a while loop, this will run as long as i is less than 20
while (i < 20) {
    //adds the letter "A" to the string letters as long as teh while loop is running
	letters += "A";
    //adds a value of 1 to the variable i as long as i is less than 20
	i++;
    //closes the while loop which will still run as long as the condition is true
}
//console.logs out the variable letters which will now be a continous string of 20 As
console.log(letters);
//output to there console ='s "AAAAAAAAAAAAAAAAAAAA"
//after running the code we received the expected result

//--Section 4

//Answer:
//1. For Loops has a control statement that clearly specifies when the loop should stop, it also holds an iterator and final expression
//while loops only have a conditional statement that tells it when to stop. Moreover,
//we use for loops when we know when the loop the should stop and whil eloops
//when we are not sure

//2.  
//The first part of the control panel is: the initiator or starting point i.e. let i = 0
//The second part of the control panel is: Control or condition statement, the loop will run as lon as this condition is true
//the third part of the control panel is: the final expression, deifning how the loop should advance i.e. i++ - the loop iterator should advance by one everytime it runs

for(let i = 0; i < 1000; i++){
    console.log(i);
}
//Bonus:
//The forward slash is to create a path, although two slashes comment out a stament
//the backslash is to let the program know you are continuing the statement or string
//in the example ('today\'s') the backslash is letting the computer know that
//the apostrophe is part of the string
for(let i = 999; i >= 0; i--){
    console.log(i);
}
//Bonus
for (let i = 1; i <=10;i++){
    console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for(let i = 0; i < StarWars.length; i++){
    console.log(StarWars[i]);
}

for(let i = 0; i < StarWars.length; i++){
    console.log(StarWars[i] + ", the value of i is: " + i);
}

for(let i = 0; i < StarWars.length; i ++){
    if(i%2 === 0){
    console.log(StarWars[i] + ", the value of i is " + i);
    }
}

