//Создайте объект garden с несколькими свойствами, например (orange, apple, pear и др.).

//При помощи синтаксиса for (key in object) {} измените название ключей, сделав все их буквы заглавными
//При помощи синтаксиса for (key in object) {} выведите значения всех ключей
//Используйте синтаксис for (key in object) {} и добавьте проверку на наличие ключа "apple". Если такой ключ существует, то выведите в консоль значение ключа "pear",
//присвоив ему новое значение "delicious"

const garden = {
key1: 'Orange',
key2: 'Apple',
key3: 'Pear'
};

const newGarden = {};

for (let key in garden) {
  let newKey = key.toUpperCase();
  newGarden[newKey] = garden[key];
}

console.log(newGarden);

for (let key in garden) {
  if (key === 'apple') {
    console.log(garden ['pear']);
    garden['pear'] = 'delicious'
  }
}

console.log(garden);