function proverit() {

let block = document.getElementById( 'text' )
let a_1 = document.getElementById( 'a_1' );
let a_2 = document.getElementById( 'a_2' );
let a_3 = document.getElementById( 'a_3' );
let a_4 = document.getElementById( 'a_4' );
let a_5 = document.getElementById( 'a_5' );
let a_6 = document.getElementById( 'a_6' );
 
    if ((a_1.value == 'пушкин') || (a_2.value == 'джони') || (a_3.value == 'грань') || (a_4.value == 'водка') || (a_5.value == 'буря') ||(a_6.value == 'стакан')) {
    alert('Молодец, верно!');
    a_1.parentNode.style.backgroundColor = 'green';
}
else {
    alert('Подумай еще!');
    a_1.parentNode.style.backgroundColor = 'red';
}
}