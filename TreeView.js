import BaseComponent from "./BaseComponent.js";

export default class TreeView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        super.connectedCallback();
        [...this.children].forEach((child) => {
            this.shadowRoot.appendChild(child)
            // this.removeChild(child)
        })
    }

    addItem(node) {

    }

    updateState() {

        this.parent.updateState();
    }

    countChecked() {
        return [...this.children].reduce((accumulator, child) => {

            if (child.constructor.name == "TreeView") {

            }
            if (child.constructor.name == "TreeCheck") {

            }
            
            // return accumulator + 1;
        }, 0)
    }
    
    static fromObject(constructor, props) {

    }
}

customElements.define('tree-view', TreeView);

// const treeview = new TreeView({
//     text: "a"
// });

// document.body.appendChild(treeview)