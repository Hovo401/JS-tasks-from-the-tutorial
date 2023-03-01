// 1
//отличий нет
// ===
// 2
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
// ===
// 3
function Min(...arg){
    let min =Number.POSITIVE_INFINITY;

    arg.forEach((e)=>{
        if (e < min) min = e
    })

    return min
}
console.log(Min(1,2,-1,5,8))
// ===
// 4
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x", '');
  let n = prompt("n", '');
  
  if (n < 1) {
    alert(`error ${n}`);
  } else {
    alert( pow(x, n) );
  }
// ===
