class fontSizeChanger extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.plusButton = this.querySelector('button#plus');
        this.minusButton = this.querySelector('button#minus');
        this.sign = this.querySelector('span');
        this.plus();
        this.minus();
    }
    plus()
    {
        this.plusButton.addEventListener('click', (e)=>{
            const style = window.getComputedStyle(this.sign, null).getPropertyValue('font-size');
            const currentSize = parseFloat(style);
            sign.style.fontSize = (currentSize + 1) + 'px';
        })
    }
    minus()
    {
        this.minusButton.addEventListener('click', (e)=>{
            const style = window.getComputedStyle(this.sign, null).getPropertyValue('font-size');
            const currentSize = parseFloat(style);
            sign.style.fontSize = (currentSize - 1) + 'px';
        })
    }
}

window.customElements.define(
    'fontsize-changer',
    fontSizeChanger
);