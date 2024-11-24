const firstName = "Ильяс";
const lastName = "Туржанов";
const age = 27;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

const city = "Актобе";
console.log("Я родом из города " + city);

const password = "12345";
const hasAccess = password !== "";
console.log(password);
console.log(hasAccess);

const isMember = false;
const isMemberAsString = isMember.toString();
console.log(isMemberAsString, typeof isMemberAsString);

let cartItems = 0;
cartItems = !!cartItems;
console.log(cartItems, typeof cartItems);
// Корзина считается пустой, так как значение 0 преобразуется в false.

const averageScore = 89.75695;
console.log(averageScore.toFixed(1));

const greetingMessage =
  "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage.trim());
console.log(greetingMessage.toUpperCase().trim());
console.log(greetingMessage.includes("программирования"));
