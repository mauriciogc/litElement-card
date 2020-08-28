import { LitElement, html, css } from "lit-element";
import { globalStyles } from "../theme/theme";

const tagName = "my-color";
export class MyColor extends LitElement {
	static styles = [
		globalStyles,
		css`
			:host {
				display: block;
			}
			.color {
				display: block;
				width: var(--my-color-width, 15px);
				height: var(--my-color-height, 15px);
				border-radius: var(--my-color-border-radius, 50%);
				margin: var(--my-color-margin, 0 10px);
				border: var(--my-color-border, 5px solid);
				cursor: var(--my-color-cursor, pointer);
				transition: var(--my-color-transition, 0.5s);
			}
			.active {
				border-color: var(--my-color-active-border-color, #fff);
				box-shadow: var(
					--my-color-active-box-shadow,
					var(--shadow-1, 0 0 10px 0.5px rgba(0, 0, 0, 0.2))
				);
				transform: var(--my-color-active-transform, scale(1.1));
			}

			@media (max-width: 425px) {
				.color {
					margin: var(--my-color-425-margin, 0 12px);
					width: var(--my-color-425-width, 15px);
					height: var(--my-color-425-height, 15px);
					border-width: var(--my-color-425-border-width, 4px);
				}
			}
		`,
	];
	static get properties() {
		return {
			/**
			 * {color, bg, id}
			 * @type {Object}
			 */
			color: { type: Object },
			/**
			 * Change style color, default false
			 * @type {Boolean}
			 */
			active: { type: Boolean, reflect: true },
		};
	}
	constructor() {
		super();
		this.active = false;
	}
	render() {
		const { color: { color, bg, id } = {}, active } = this;

		return html`<span
			class="color ${(active && "active") || ""}"
			text-color=${color}
			bg-color=${bg}
			@click=${(e) => this._onHandlerClick(id, e)}
		></span>`;
	}
	/**
	 * When the span is clicked, the event selected-color is fired with id
	 * @protected
	 */
	_onHandlerClick(id, e) {
		this.dispatchEvent(
			new CustomEvent("selected-color", { bubbles: false, detail: { id } })
		);
	}
}
customElements.define(tagName, MyColor);
