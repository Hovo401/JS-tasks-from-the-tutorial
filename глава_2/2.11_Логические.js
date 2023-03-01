// 1
alert( null || 2 || undefined ); // 2
// ===
// 2
alert( alert(1) || 2 || alert(3) ); // 1, 2
// ===
// 3
alert( 1 && null && 2 );// null
// ===
// 4
alert( alert(1) && alert(2) ); // 1
// ===
// 5
alert( null || 2 && 3 || 4 );// 3
// ===
// 6
if(value>=14 && value<=90){}
// ===
// 7
if(!(value>=14 && value<=90)){}
if(value<14 || value>90){}
// ===
// 8
if (-1 || 0) alert( 'first' ); // -1
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // 1
// ===
// 9
let user = prompt("login", '');

if (user === 'Admin') {

  let pass = prompt('Password', '');

    (pass === 'password_') ? alert( 'Здравствуйте' ):
    (pass === '' || pass === null) ? alert( 'Отменено' ): 
    alert( 'Неверный пароль' );

} else if (user === '' || user === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
// ===