import { LitElement, html, css } from "lit-element";

const tagName = "my-tag";
export class MyTag extends LitElement {
	static styles = css`
		:host {
			display: block;
			padding: var(--my-tag-padding, 3px 10px);
			border-radius: var(--my-tag-border-radius, 8px);
			font-size: var(--my-tag-font-size, 0.8em);
			text-transform: var(--my-tag-text-transform, uppercase);
			color: var(--my-tag-color, #fff);
			background-color: var(--my-tag-background-color, #d4d4d4);
		}
	`;
	render() {
		return html` <div><slot></slot></div>`;
	}
}
customElements.define(tagName, MyTag);
