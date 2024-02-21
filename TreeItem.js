import BaseComponent from "./BaseComponent.js";

export default class TreeItem extends BaseComponent {
    constructor(props) {
        super(props, "custom", false);

    }

    connectedCallback() {
        console.log(this.parentElement)
        super.connectedCallback();
        this.element.innerHTML = `
            <input type="checkbox" id="tree-item-checkbox" />
            <label for="tree-item-checkbox">${this.props.text}</label>
        `
    }

    toggle() {

    }
}

customElements.define('tree-item', TreeItem)