//Cоздайте массив currency, положите в него 6 разных значений.
//Создайте переменную newCurrency.
//Используя метод splice, удалите из массива 3 элемента, начиная со второго,
//и вместо удаленных элементов вставьте 1 элемент со значением "I will earn big money by programming".
//Все это положите в переменную newCurrency.
//Выведите в сонсоль currency и newCurrency, посмотрите, мутировал ли исходныц массив.

const currency = ["EUR", "USD", "RUB", "LEI", "AUD", "AZN" ];
const newCurrency = currency.splice(1,3,"I will earn big money by programming" );
console.log(currency);
console.log(newCurrency);