//Задание 5
let lostNums = [4, 8 , 15, 16, 23, 42];
console.log (lostNums.length);
for (let i=0; i < lostNums.length; i++){
    console.log (lostNums[i]); 
};                                



//Задание 6
let mass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];
let theSame = true;
for (let i = 0; i < mass.length - 1; i++){
    for (let j = i + 1; j < mass.length; j++){
        if (typeof(mass[i]) !== typeof(mass[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
};


//Задание 7
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;
for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countOther);            

//Задание 8
let users = new Map();
users.set("student 1", "grade A");
users.set("student 2", "grade B");
users.set("student 3", "grade A");
users.set("student 4", "grade B");
users.set("student 5", "grade A");
users.set("student 6", "grade C");
users.set("student 7", "grade A");
for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
};