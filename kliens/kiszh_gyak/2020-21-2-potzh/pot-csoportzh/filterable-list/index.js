const ulEl = document.querySelector('ul');
const inputEl = document.createElement('input');
inputEl.type = 'text';
ulEl.insertAdjacentElement('beforebegin', inputEl);

const listContainer = document.createElement('div');
listContainer.id = 'list-container';

ulEl.parentElement.insertBefore(listContainer, ulEl);
listContainer.appendChild(inputEl);
listContainer.appendChild(ulEl);
inputEl.addEventListener('input', (e)=>{
    console.log(inputEl.value)
    ulEl.querySelectorAll('li').forEach(li => {
        if(!li.textContent.includes(inputEl.value)){
            li.hidden = true;
        }
        else{
            li.hidden = false;
        }
    })
})