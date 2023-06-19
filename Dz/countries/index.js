
function addCount (){
countryName = prompt('Название страны' );
capitalName = prompt('Название столицы' );
addCountry(countryName, capitalName);
console.log(countrysH);
};

function del (){
    countryName = prompt('Название страны' );
    deleteCountry(countryName);
    console.log(countrysH);
};

function getInfo (){
    countryName = prompt('Название страны' );
    getCountryInfo(countryName);
    console.log(getCountryInfo(countryName));
};

function getList(){
    listCountrys();
    console.log(listCountrys());
};


