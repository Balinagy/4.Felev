const listItems = $('li');
console.log(listItems);

const navbar = $('.navbar-brand');
console.log(navbar);

const categories = $('.card');
const categoryItems = categories.first().find('.list-group-item');
console.log(categoryItems.text());
