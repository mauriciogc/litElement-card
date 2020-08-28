import { LitElement, html, css } from "lit-element";
import "./my-wrapper-card";

import _surface from "../img/surface.png";
import _switch from "../img/switch.png";

import theme from "../theme/theme";

export class MyApp extends LitElement {
	static styles = [
		theme,
		css`
			:host {
				display: flex;
				justify-content: center;
				align-items: flex-start;
				padding: 40px;
				flex-wrap: wrap;
			}
		`,
	];
	static get properties() {
		return {
			data: { type: Object },
		};
	}
	constructor() {
		super();
		this.data = [
			{
				cardType: "card1",
				icon: {
					icon: "faHeart",
					typeIcon: "solid",
					color: "pink",
					description: 827,
				},
				tag: { color: "green", description: "new colection" },
				image: {
					img: _switch,
					alt: "Switch",
					color: "red",
				},
				title: "Nintendo Consola Switch",
				subtitle: "Consoles",
				description:
					"Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.",
				colors: [
					{ id: 1, color: "blue", bg: "blue" },
					{ id: 2, color: "red", bg: "red" },
					{ id: 3, color: "green", bg: "green" },
					{ id: 4, color: "black", bg: "black" },
					{ id: 5, color: "yellow", bg: "yellow" },
				],
				activeColor: 1,
				button: {
					description: "Add to card",
					color: "blue",
					id: "shopping",
					icon: {
						icon: "faShoppingCart",
						typeIcon: "solid",
						color: "white",
						event: true,
					},
				},
				price: "8,699",
			},
		];
	}
	render() {
		return html` ${this.data.map(this._createCard)}`;
	}

	_createCard(item) {
		switch (item.cardType) {
			case "card1":
				return html`<my-wrapper-card .data=${item}></my-wrapper-card>`;
			default:
				return html`Card no found`;
		}
	}
}
customElements.define("my-app", MyApp);
