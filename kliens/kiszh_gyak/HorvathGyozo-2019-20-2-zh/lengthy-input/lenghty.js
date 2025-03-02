class lenghtyInput extends HTMLInputElement
{
    constructor()
    {
        super();
        this.consFunc = this.consFunc.bind(this); // Bindoljuk a metódust (nem feltétlen szükséges)
    }
    connectedCallback() {
        this.addEventListener('input', this.consFunc);
    }

    disconnectedCallback() {
        this.removeEventListener('input', this.consFunc);
    }
    consFunc(){
        console.log('Maxlength:', this.maxLength)
        console.log('Current length:', this.value.length)
        const percentage = Math.min(this.value.length / this.maxLength, 1) * 100;
        this.style.borderImageSource = `linear-gradient(to right, 
        ${this.hasAttribute('data-color')? this.getAttribute('data-color') :"orange"} ${percentage}%, 
        hsla(0, 0%, 90%, 1) ${percentage}% 100%)`;
    }
    get color() {
        return this.getAttribute('data-color') || 'orange';
    }

    set color(value) {
        this.setAttribute('data-color', value);
        this.consFunc();
    }
}
window.customElements.define(
    'lengthy-input',
    lenghtyInput,
    { extends: 'input' }
);