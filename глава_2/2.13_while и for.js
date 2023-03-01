// 1
let i = 3;

while (i) {
  alert( i-- );
}
// 1
// ===
// 2
let i1 = 0;
while (++i1 < 5) alert( i1 );
// 1, 2, 3, 4

let i2 = 0;
while (i2++ < 5) alert( i2 );
// 1, 2, 3, 4, 5
// ===
// 3
for (let i = 0; i < 5; i++) alert( i );
// 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i );
// 0, 1, 2, 3, 4
// ===
// 4
for(let i= 2; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}
// ====
// 5
let k = 0;
while (k < 3) {
  console.log(`number ${k}`);
  k++;
}
// ===
// 6
let number;
do {
    number = prompt("Введите число больше 100?", 0);
} while (number <= 100 && number);
// ===
// 
function primeNumbers(n){
    const primeNumbers_=[]
  
    main:for(let i=2; i<=n; i++){
        for(let k=2; k <= (i/2); k++){
            if(i % k == 0) {
              continue main
            }
        }
        primeNumbers_.push(i)
    }
    return primeNumbers_
  }
  
  console.log(primeNumbers(100))

// ===