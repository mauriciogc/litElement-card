import { LitElement, html, css } from "lit-element";
import { icon as createIcon } from "@fortawesome/fontawesome-svg-core";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

const tagName = "my-icon";
export class MyIcon extends LitElement {
	static styles = css`
		:host {
			display: block;
			font-size: var(--my-icon-font-size, 1em);
			color: var(--my-icon-color, #000);
			background-color: var(--my-icon-bg-color, transparent);
		}
		svg {
			width: var(--my-icon-width, 16px);
		}
	`;
	static get properties() {
		return {
			/**
			 * Name icon (Ex. faHeart)
			 * @type {String}
			 */
			icon: { type: String, attribute: true },
			/**
			 * Type icon (regular || solid), default regular
			 * @type {String}
			 */
			typeIcon: { type: String, attribute: "type-icon" },
		};
	}
	/**
	 * Create icon
	 * @protected
	 */
	get fullIcon() {
		const icons = (this.typeIcon === "regular" && regularIcons) || solidIcons;

		if (icons[this.icon]) {
			return createIcon(icons[this.icon]).node;
		}
		return null;
	}
	constructor() {
		super();
		this.typeIcon = "regular";
	}
	render() {
		return html`${this.fullIcon}<slot></slot>`;
	}
}
customElements.define(tagName, MyIcon);
