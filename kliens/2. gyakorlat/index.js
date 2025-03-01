//'★', '☆'

class StarsElement{
    constructor(input){
        const stars = document.createElement('span');
        stars.classList.add("stars");
        stars.addEventListener('click', onsStarClick);
        stars.innerHTML = fillStars(input.max, input.value);
        input.hidden = true;
        input.insertAdjacentElement('afterend', stars);

        function fillStars(cnt, val){
            let s = '';
            for (let i = 0; i < cnt; i++)
            {
                s += `<span>${i<val?'★':'☆'}</span>`
            }
            return s;
        }

        function onsStarClick(e)
        {
            if(e.target.matches('.stars span')){
                const value = Array.from(stars.children).indexOf(e.target) + 1;
                input.value = value;
                stars.innerHTML = fillStars(input.max, input.value);
            }
        }
    }
}

const input = document.querySelector('[type=range]');
new StarsElement(input);