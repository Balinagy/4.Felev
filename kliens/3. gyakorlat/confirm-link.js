class confirmLink extends HTMLAnchorElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.addEventListener('click', this.onClick);
    }

    disconnectedCallback(){
        this.removeEventListener('click', this.onClick);
    }

    onClick(e) {
        const result = confirm(`Are you sure want to navigate to ${this.href}`)
        if(!result){
            e.preventDefault();
        }
    }
}

window-customElements.define(
    'confirm-link',
    confirmLink,
    { extends: 'a' }
)