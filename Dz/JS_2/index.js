let surname = prompt("Ваша Фамилия?:");
let name = prompt("Как вас зовут?:");
let secondName = prompt("Ваше отчество?:");
let age = prompt("Ваш возраст?:");
let ageDay = age * 365;
let futureAge = parseInt(age) + 5;
let gender = confirm("Ваш пол - мужской?:");
let pension;

let genderChek = gender
  ? gender = "Мужской" 
/*     (parseInt(age) >= 63)
         ? (pension = "Да") 
         : (pension = "Нет") */
  : gender = "Женский";
/*     (parseInt(age) >= 58)
        ? (pension = "Да")
        : (pension = "нет"); */
        

alert(
  `Вашей ФИО: ${surname} ${name} ${secondName}
     \n Ваш возраст в годах: ${age} 
     \n Ваш возраст в днях: ${ageDay} 
     \n Через 5 лет вам будет: ${futureAge} 
     \n Ваш пол: ${genderChek}
     \n Вы на пенсии: ${pension}`
);
