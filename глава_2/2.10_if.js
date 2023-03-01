// 1 

if ("0") {// "0" -> true
    alert( 'Привет' ); 
  }
// ===
// 2

let value = prompt('официальное название JavaScript', '');

    if (value == 'ECMAScript') {
      alert('good');
    } else {
      alert('👎');
    }

// ===
// 3

let val = prompt('Введите число', 0);

if (val > 0) {
  alert( 1 );
} else if (val   < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// ====
// 4

let result;

result=(a + b < 4) ? 'Мало':'Много'
// ====
// 5

let message ;


message = 
  (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' : ''

// ===