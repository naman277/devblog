import { LitElement, html, css } from "lit";
import { unsafeCSS } from "lit";
import tailwindStyles from "~/assets/css/main.css?inline";

class CardLabel extends LitElement {
    static properties = {
        label: { type: String },
    };

    static styles = css`
        ${unsafeCSS(tailwindStyles)}
    `;

    constructor() {
        super();
        this.label = "Tech";
    }

    render() {
        return html`<div
            class="text-blue-800 w-fit rounded-3xl bg-blue-100 px-2 font-semibold mt-1 ml-1"
        >
            ${this.label}
        </div>`;
    }
}

customElements.define("card-label", CardLabel);
