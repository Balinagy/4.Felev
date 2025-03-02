class ToastMessage extends HTMLElement {
    constructor() {
        super();
        const template = document.querySelector('template#toast-message-template');
        const content = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content);
    }

    connectedCallback() {
        this.modifyButton();
        this.modifyprogress();
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('button').removeEventListener('click',(e)=>{
            this.remove();
        })
    }
    modifyButton()
    {
        if(!this.hasAttribute('closable'))
        {
            this.shadowRoot.querySelector('button').hidden = true;
        }
        else
        {
            this.shadowRoot.querySelector('button').addEventListener('click',(e)=>{
                this.remove();
            })
        }
    }
    modifyprogress(){
        if(!this.hasAttribute('timeout'))
        {
            this.shadowRoot.querySelector('progress').hidden = true;
        }
        else{
            this.shadowRoot.querySelector('progress').max = parseInt(this.getAttribute('timeout'));
            this.shadowRoot.querySelector('progress').value = 0;
            setInterval(()=>this.shadowRoot.querySelector('progress').value += 1,1000)
            setTimeout(()=>this.remove(), (parseInt(this.getAttribute('timeout')*1000)));
        }
    }
}

window.customElements.define(
    'toast-message',
    ToastMessage
);