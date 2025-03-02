//Kiválasztás Írd ki a konzolra! (kiválasztás szelektorokkal vagy jQuery metódussal)

// EZ MIND VANILLA JS
// Listaelemek (li)
console.log(document.querySelectorAll("li"));

// navbar-brand stílusosztályú elem
console.log(document.querySelector(".navbar-brand"));

// row stílusosztályú elemek
console.log(document.querySelectorAll(".row"));

// Az összes col-* stílusosztályú elem
console.log(document.querySelectorAll("[class^='col-']"));

// list-group-item osztályú elemek közül az elsők
console.log(document.querySelector(".list-group .list-group-item"));

// Az összes ételre mutató link
console.log(document.querySelectorAll("a[href*='recipes']"));


// EZ MIND JQUERY
// Listaelemek (li)
console.log($("li"));

// navbar-brand stílusosztályú elem
console.log($(".navbar-brand"));

// row stílusosztályú elemek
console.log($(".row"));

// Az összes col-* stílusosztályú elem
console.log($("[class^='col-']"));

// list-group-item osztályú elemek közül az elsők
console.log($(".list-group .list-group-item:first"));

// Az összes ételre mutató link
console.log($("a[href*='recipes']"));



console.log("KIVÁLASZTÁS FELADATOK VÉGE")
//VANILLA JS
console.log("Bejárás feladatok:")
const kategoriak = document.querySelectorAll(".card");
const elsoKategoria = kategoriak[0]; // Az első kategória kiválasztása
const etelek = elsoKategoria.querySelectorAll(".list-group-item"); // Kategórián belüli ételek kiválasztása

console.log("Az első kategória elemei:");
etelek.forEach(etel => console.log(etel.textContent));

//JQUERY
const kategoriakjq = $(".list-group");
const elsoKategoriajq = kategoriakjq.first(); // Az első kategória kiválasztása
const etelekjq = elsoKategoriajq.find(".list-group-item"); // Kategórián belüli ételek

console.log("Az első kategória elemei:");
etelekjq.each((index, etel) => console.log($(etel).text()));
