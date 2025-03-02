const buttonEl = document.querySelector('button');
buttonEl.disabled = true;

const containerEl = document.querySelector('#container');
let ticking = false;
containerEl.addEventListener('scroll', (e) =>{
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollHeight = containerEl.scrollHeight;
            const scrollTop = containerEl.scrollTop;
            const clientHeight = containerEl.clientHeight;
            
            if (scrollTop + clientHeight >= scrollHeight) {
                buttonEl.disabled = false;
            }

            ticking = false;
        });
        ticking = true;
    }
})
