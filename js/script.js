// Задача 1: Выбор напитка
const timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
  let drink;
  if (timeOfDay.toLowerCase() === "утро") {
    drink = "кофе";
  } else if (timeOfDay.toLowerCase() === "день") {
    drink = "чай";
  } else if (timeOfDay.toLowerCase() === "вечер") {
    drink = "горячий шоколад";
  } else {
    alert("Некорректный ввод. Введите одно из значений: утро, день, вечер.");
  }
  if (drink) {
    alert(`Мы рекомендуем вам: ${drink}`);
  }
} else {
  alert("Ошибка ввода. Введите непустую строку.");
}

// Задача 2: Объект с данными пользователя
const user = {
  name: prompt("Введите ваше имя:"),
  age: parseInt(prompt("Введите ваш возраст:")),
  subject: prompt("Введите ваш любимый предмет:"),
  grade: prompt("Введите вашу оценку по этому предмету:"),
};

console.log("Исходный объект:", user);

// Увеличение возраста на 5
user.age += 5;

console.log("Обновленный возраст:", user.age);
console.log("Обновленный объект:", user);

// Задача 3: Работа с массивом фильмов
const movies = [
  {
    title: "Начало",
    director: "Кристофер Нолан",
    year: 2010,
    genre: "фантастика",
  },
  {
    title: "Форрест Гамп",
    director: "Роберт Земекис",
    year: 1994,
    genre: "драма",
  },
  {
    title: "Криминальное чтиво",
    director: "Квентин Тарантино",
    year: 1994,
    genre: "боевик",
  },
  {
    title: "Зеленая миля",
    director: "Фрэнк Дарабонт",
    year: 1999,
    genre: "триллер",
  },
  {
    title: "Жизнь прекрасна",
    director: "Роберто Бениньи",
    year: 1997,
    genre: "комедия/драма",
  },
];

console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);

// Задача 4: Работа с массивом покупок
const shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

// Добавляем новый товар в начало массива
shoppingList.unshift("яйца");
console.log("После добавления нового товара:", shoppingList);

// Удаляем последний товар из массива
shoppingList.pop();
console.log("После удаления последнего товара:", shoppingList);

// Заменяем третий элемент на два новых
shoppingList.splice(2, 1, "йогурт", "сок");
console.log("После замены третьего элемента:", shoppingList);
