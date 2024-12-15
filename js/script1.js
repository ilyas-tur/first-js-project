// 1
document.title = "Ильяс Туржанов";

// 2.
const headerElement = document.getElementById("header");
const h1Element = headerElement.querySelector("h1");
h1Element.textContent = "Изучение JavaScript";

// 3.
const menuLinks = document.querySelectorAll(".menu-link");
for (const link of menuLinks) {
  console.log(link.textContent);
}

// 4.
const secondFeatureItem = document.querySelectorAll(".features-list li")[1]; // Получаем второй элемент списка
secondFeatureItem.innerHTML = "Поддержка <b>API</b>";
