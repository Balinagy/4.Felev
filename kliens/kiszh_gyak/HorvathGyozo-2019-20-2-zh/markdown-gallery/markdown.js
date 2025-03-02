class ImageTextArea extends HTMLElement {
    constructor()
    {
        super();
    }
    connectedCallback() {
        //a.
        this.textArea = document.querySelector('textarea');
        this.ulEL = document.createElement('ul');
        this.textArea.insertAdjacentElement('afterend', this.ulEL)

        //b, c
        this.textArea.addEventListener('input', this.populateImages);
        this.populateImages();
    }
    //d
    populateImages()
    {
        this.urls = [...this.textArea.value.matchAll(/!\[\]\((.*?)\)/g)]
        console.log(this.urls.length)
        let elementsHTML = ""
        this.urls.forEach(element => {
            elementsHTML += `<li><img src=${element[1]}></li>`
        });
        this.ulEL.innerHTML = elementsHTML
    }
}
window.customElements.define(
    'image-textarea',
    ImageTextArea
);