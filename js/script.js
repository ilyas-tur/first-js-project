// Задача 1
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`);

// Задача 2
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(
    `Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}`
  );
  console.log("Награды:");
  for (let j = 0; j < book.awards.length; j++) {
    console.log(`- ${book.awards[j]}`);
  }
  console.log("------------");
}

// Задача 3
function calculateAveragePages(books) {
  let totalPages = 0;

  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].numberOfPages;
  }

  return totalPages / books.length;
}

console.log(
  calculateAveragePages([
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      numberOfPages: 281,
    },
    { title: "1984", author: "George Orwell", numberOfPages: 328 },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      numberOfPages: 180,
    },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635 },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432 },
  ])
);

// Задача 4
function repeatString(str, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
}

const inputStr = "hello";
const inputN = 3;

console.log(repeatString(inputStr, inputN));

// Задача 5
function calculateAverage(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum / numbers.length;
}

const inputNumbers = [10, 20, 30, 40, 50, 60];

console.log(calculateAverage(inputNumbers));

// Задача 6
function countEvenNumbers(numbers) {
  let evenNumbers = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  return evenNumbers;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
