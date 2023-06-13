let surname = prompt("Ваша Фамилия?:");
let name = prompt("Как вас зовут?:");
let secondName = prompt("Ваше отчество?:");
let age = prompt("Ваш возраст?:");
let ageDay = age * 365;
let futureAge = parseInt(age) + 5;
let gender = confirm("Ваш пол - мужской?:");
let pension = 'нет';



const genderChek = () => {
    if (gender){
    gender = 'Мужской';
    if (parseInt(age) >= 63){
        pension = 'Да';
    }
    }
    else {
       gender = 'Женский';
       if (parseInt(age) >= 58){
        pension = 'Да';
    }
    }

};
genderChek();

alert(
    `Вашей ФИО: ${surname} ${name} ${secondName}
     \n Ваш возраст в годах: ${age} 
     \n Ваш возраст в днях: ${ageDay} 
     \n Через 5 лет вам будет: ${futureAge} 
     \n Ваш пол: ${gender}
     \n Вы на пенсии: ${pension}`
  );

