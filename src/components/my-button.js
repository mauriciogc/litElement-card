import { LitElement, html, css } from "lit-element";

export class MyButton extends LitElement {
	static styles = css`
		:host {
			display: block;
		}

		:host(:hover) {
			filter: brightness(1.5);
		}
		:host(:active) {
			transform: scale(0.9);
		}
		a {
			padding: 0.5rem 1rem;
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 1px;
			font-weight: 500;
			font-size: 1rem;
			transition: 0.2s;
			display: block;
			text-decoration: none;
		}
	`;
	static get properties() {
		return {
			id: { type: String, reflect: true },
		};
	}
	constructor() {
		super();
		this.id = "button";
	}
	render() {
		return html`<a href="#" class="button" @click=${this._onClick}
			><slot></slot
		></a>`;
	}
	_onClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.dispatchEvent(
			new CustomEvent("click-button", { detail: { id: this.id } })
		);
	}
}
customElements.define("my-button", MyButton);
