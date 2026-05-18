import { LitElement, css, html } from "lit";

class DevBadge extends LitElement {
    static properties = {
        label: { type: String },
    };

    static styles = css`
        div {
            font-weight: bold;
        }
    `;
    constructor() {
        super();
        this.label = "DevBlog";
    }

    render() {
        return html`<div>${this.label}</div>`;
    }
}

customElements.define("dev-badge", DevBadge);
