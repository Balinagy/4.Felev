class CascadeSelect extends HTMLElement {
    constructor()
    {
        super();
        const template = document.querySelector('template#cascade-select-template');
        const content = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content);
        this.populate = this.populate.bind(this);
    }
    connectedCallback(){
        /*
        adatok kigyűjtése
        2 select létrehozása
        2. select töltése
        eredeti elrejtése
        */
        this.collectOptions();
        this.createSelects();
        this.populate();
        this.groupSelect.addEventListener('change', 
            this.populate);
    }

    disconnectedCallback(){
        this.groupSelect.removeEventListener('change',this.populate);
    }

    collectOptions(){
        this.originalSelect = this.querySelector('select');
        const optGroups = this.originalSelect.querySelectorAll('optgroup');
        this.dataGroups = new Map();
        optGroups.forEach(optGroup => {
            const subOptions = [];
            optGroup.querySelectorAll('option').forEach(option => {
                subOptions.push({
                    text: option.innerText,
                    value: option.getAttribute('value')
                })
            });
            this.dataGroups.set(optGroup.getAttribute('label'), subOptions);
        });
        console.log(this.dataGroups);
    }
    createSelects()
    {
        const selects = this.shadowRoot.querySelectorAll('select');
        this.groupSelect = selects[0];
        this.itemSelect = selects[1];
        this.originalSelect.style.display = 'none';

        const groupOptionsHtml = [...this.dataGroups.keys()]
        .map(
            groupLabel => `<option value="${groupLabel}">${groupLabel}</option>`
        ).join('');
        this.groupSelect.innerHTML = groupOptionsHtml;
    }

    populate()
    {
        const currentGroup = this.groupSelect.value;
        const groupItems = this.dataGroups.get(currentGroup);
        const itemOptionsHtml = groupItems
        .map(
            item => `<option value="${item.value}">${item.value}</option>`
        ).join('');
        this.itemSelect.innerHTML = itemOptionsHtml;
    }
}

window.customElements.define(
    'cascade-select',
    CascadeSelect
);