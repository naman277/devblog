import { LitElement, css, html } from "lit";

class DevBadge extends LitElement {
    static properties = {
        label: { type: String },
    };

    static styles = css`
        div {
            font-weight: bold;
            cursor: pointer;
        }
    `;
    constructor() {
        super();
        this.label = "DevBlog";
    }

    render() {
        return html`<div @click=${() => (document.location.href = "/")}>
            ${this.label}
        </div>`;
    }
}

customElements.define("dev-badge", DevBadge);
