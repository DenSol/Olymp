function proverit() {

let a_1 = document.getElementById( 'a_1' );
let a_2 = document.getElementById( 'a_2' );
let a_3 = document.getElementById( 'a_3' );
let a_4 = document.getElementById( 'a_4' );
let a_5 = document.getElementById( 'a_5' );
let a_6 = document.getElementById( 'a_6' );
let a_7 = document.getElementById( 'a_7' );
 
    if ((a_1.value == 'пушкин') || (a_2.value == 'джони') || (a_3.value == 'грань') || (a_4.value == 'водка') || (a_5.value == 'буря') || (a_6.value == 'стакан') || (a_7.value == 'вода')) {
    alert('Молодец, верно!');
    a_1.style.borderColor = "green";
    a_1.disabled = true;
    a_2.style.borderColor = "green";
    a_2.disabled = true;
    a_3.style.borderColor = "green";
    a_3.disabled = true;
    a_4.style.borderColor = "green";
    a_4.disabled = true;
    a_5.style.borderColor = "green";
    a_5.disabled = true;
    a_6.style.borderColor = "green";
    a_6.disabled = true;
    a_7.style.borderColor = "green";
    a_7.disabled = true;
}
else {
    alert('Подумай еще!');
    a_1.style.borderColor = "red";
    a_2.style.borderColor = "red";
    a_3.style.borderColor = "red";
    a_4.style.borderColor = "red";
    a_5.style.borderColor = "red";
    a_6.style.borderColor = "red";
    a_7.style.borderColor = "red";
}
}