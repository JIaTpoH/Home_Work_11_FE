//Создайте строку classmates. Перечислите в ней имена нескольких студентов.
//Разбейте строку, используя метод split, положите значение в константу classmatesArr
//Затем соедините массив, используя метод join, положите значение в константу newClassmates

const classmates = "Dmitri, Max, Alina, Oleg";
const classmatesArr = classmates.split(", ");
console.log(classmatesArr);
const newClassmates = classmatesArr.join("; ");
console.log(newClassmates);