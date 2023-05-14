//Перепишите задание прошлого урока, используя методы get и set

//---> Задание прошлого урока: Создайте классы:Plant, Rose. Роза должна наследовать Растение. Пусть у растения будут поля: рост, возраст. И метод grow, который увеличивает его рост на 10 см. У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.


class Plant {
  constructor(height, age) {
      this._height = height;
      this._age = age;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  grow() {
      this.height += 10
  }
}

class Rose extends Plant {
  constructor(height, age, numberOfFlowers) {
      super(height, age);
      this.numberOfFlowers = numberOfFlowers
  }
}

const redRose = new Rose(100, 1, 3)
console.log(redRose.height);
redRose.grow();
console.log(redRose.height);
redRose.grow();
console.log(redRose.height);