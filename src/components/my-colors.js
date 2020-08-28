import { LitElement, html, css } from "lit-element";
import { globalStyles } from "../theme/theme";
import "./my-color";

const tagName = "my-colors";
export class MyColors extends LitElement {
	static styles = css`
		:host {
			display: block;
		}
		.colors {
			padding: var(--my-colors-padding, 8px 0);
			display: flex;
		}
	`;
	static get properties() {
		return {
			/**
			 * [{color, bg, id}], default []
			 * @type {Array}
			 */
			colors: { type: Array },
			/**
			 * Color actived, default 1 (Is taken from colors.id)
			 * @type {Number}
			 */
			active: { type: Number },
		};
	}
	constructor() {
		super();
		this.active = 1;
		this.colors = [];
	}
	render() {
		return html`<div class="colors">
			${this.colors.map(
				(color) =>
					html`<my-color
						.color=${color}
						@selected-color=${this._onHandlerClick}
						?active=${this.active === color.id}
					></my-color>`
			)}
		</div>`;
	}
	/**
	 * When the my-color is clicked, the event selected-color is fired with id
	 * @protected
	 */
	_onHandlerClick({ detail }) {
		if (this.active !== detail.id) {
			this.active = detail.id;
			this.dispatchEvent(new CustomEvent("selected-color", { detail }));
		}
	}
}
customElements.define(tagName, MyColors);
