class colorPicker extends HTMLElement {
    constructor()
    {
        super();
    }
    connectedCallback(){
        this.createElements();
        this.buttonfunctions();
    }

    createElements(){
        this.divEl = document.createElement('div');
        this.divEl.className = 'box';
        this.appendChild(this.divEl)
        const redButton = document.createElement('button');
        redButton.innerText = 'red';
        const greenButton = document.createElement('button');
        greenButton.innerText = 'green';
        const blueButton = document.createElement('button');
        blueButton.innerText = 'blue';
        const randomButton = document.createElement('button');
        randomButton.innerText = 'random';
        this.divEl.appendChild(redButton);
        this.divEl.appendChild(greenButton);
        this.divEl.appendChild(blueButton);
        this.divEl.appendChild(randomButton);
    }
    buttonfunctions()
    {
        this.divEl.addEventListener('click', (e)=>{
            if(e.target.firstChild.data === 'random')
            {
                this.divEl.style.backgroundColor = this.getRandomColor();
            }
            else
            {
                this.divEl.style.backgroundColor = e.target.firstChild.data;
            }
        })
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

window.customElements.define(
    'color-picker',
    colorPicker
);