// 1.
const infoSection = document.getElementById("info");

const ul = document.createElement("ul");

const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];
for (const text of items) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.append(li);
}

infoSection.append(ul);

// 2.
const header = document.getElementById("header");

const myLink = document.createElement("a");
myLink.textContent = "Мой профиль в Linkedin";
myLink.href = "https://www.linkedin.com/in/мой_профиль";
myLink.setAttribute("target", "_blank");

header.append(myLink);

// 3.
const main = document.getElementById("main");

const dynamicSection = document.createElement("section");
dynamicSection.className = "dynamic";

const h2 = document.createElement("h2");
h2.textContent = "Обучение JavaScript";
dynamicSection.append(h2);

const p = document.createElement("p");
p.textContent =
  "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
dynamicSection.append(p);

main.firstChild.before(dynamicSection);

// 4.
const firstParagraph = infoSection.querySelector("p");
infoSection.removeChild(firstParagraph);

// 5.
const footer = document.getElementById("footer");
footer.innerHTML = "";
