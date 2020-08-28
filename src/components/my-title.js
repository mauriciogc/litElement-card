import { LitElement, html, css } from "lit-element";

const tagName = "my-title";
export class MyTitle extends LitElement {
	static styles = css`
		:host {
			display: block;
			color: var(--my-title-color, #000);
			background-color: var(--my-title-bg-color, transparent);
		}
		.large {
			display: block;
			margin-right: 10px;
			font-size: var(--my-title-large-font-size, 2em);
			line-height: var(--my-title-large-line-height, 1);
			font-weight: var(--my-title-large-font-weight, bold);
		}
		.medium {
			font-size: var(--my-title-medium-font-size, 1.2em);
			text-transform: var(--my-title-medium-text-transform, uppercase);
			font-weight: var(--my-title-medium-font-weight, 500);
		}
		.small {
			margin-top: var(--my-title-small-margin-top, 3px);
			font-size: var(--my-title-small-font-size, 1em);
			text-transform: var(--my-title-small-text-transform, capitalize);
			font-weight: var(--my-title-small-font-weight, 500);
		}
		@media (max-width: 425px) {
			.large {
				font-size: var(--my-title-425-large-font-size, 1.3rem);
			}
			.medium {
				font-size: var(--my-title-425-medium-font-size, 0.8em);
				font-weight: var(--my-title-425-medium-font-weight, 500);
			}

			.small {
				font-size: var(--my-title-425-small-font-size, 0.8em);
				font-weight: var(--my-title-425-small-font-weight, 500);
			}
		}
	`;
	static get properties() {
		return {
			/**
			 * Title
			 * @type {String}
			 */
			text: { type: String },
			/**
			 * Title size
			 * @type {String}
			 */
			size: { type: String },
		};
	}
	constructor() {
		super();
		this.size = "large";
	}
	render() {
		return html`<div class=${this.size}><slot></slot></div>`;
	}
}
customElements.define(tagName, MyTitle);
