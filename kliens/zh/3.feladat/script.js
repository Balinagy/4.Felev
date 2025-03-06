class radioInput extends HTMLElement {
    constructor(number=6) {
        super();
        this.number = number;
    }

    connectedCallback() {
        this.startDiv = this.querySelector('div');
        this.createElements();
        this.possibleInput();
    }
    createElements()
    {
        for(let i = 0; i < this.number; i++)
        {
            let newLine = `<input id="rad${i}" type="text" disabled>
            <input id="${i}" type="radio">`
            this.startDiv.innerHTML = this.startDiv.innerHTML + newLine;
        }
    }
    possibleInput()
    {   
        this.startDiv.addEventListener('click', (e)=>{
            if(e.target.matches('input[type=radio]'))
                {
                    let changeButton = this.querySelector(`input#rad${e.target.id}`)
                    if(changeButton.hasAttribute('disabled')){
                        changeButton.removeAttribute('disabled');
                    }
                    console.log(e.target.id);
                }
        })
    }
}

window.customElements.define(
    'radio-input',
    radioInput
);