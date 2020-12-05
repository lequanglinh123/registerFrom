class InputForm extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.type = this.getAttribute('type')
        this.error = this.getAttribute('error') || '';
        this.placeholder = this.getAttribute('placeholder');
        this.id = this.getAttribute('id');
        this._shadowRoot.innerHTML=`
            <div class="input-container">
                <input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}">
                <div class="error">${this.error}</div>
            </div>
        `
    }
    getValue(){
        return this._shadowRoot.getElementById(this.id).value;
    }
    setEmptyHtml(){
        this._shadowRoot.getElementById(this.id).value =''
    }
    static get observedAttributes(){
        return ['error']
    }
    attributeChangedCallback(){
        this.error = this.getAttribute('error') || '';
        this._shadowRoot.innerHTML=`
            <div class="input-container">
                <input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}">
                <div class="error">${this.error}</div>
            </div>
        `
    }
}
window.customElements.define("input-form", InputForm);