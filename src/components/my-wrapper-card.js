import { LitElement, html, css } from "lit-element";
import { globalStyles } from "../theme/theme";

import "./my-card";
import "./my-tag";
import "./my-icon";
import "./my-image";
import "./my-title";
import "./my-colors";
import "./my-button";

export class MyWrapperCard extends LitElement {
	static styles = [
		globalStyles,
		css`
			:host {
				display: block;
			}
			my-icon {
				cursor: pointer;
			}
			/* Image */
			.loader {
				color: #fff;
				font-size: 0.8em;
				display: flex;
				font-weight: 100;
				align-items: center;
				justify-content: center;
			}
			.image {
				width: 80%;
				height: 80%;
			}
			/* text */
			.text {
				margin: 0;
				padding: 0px;
				font-size: 0.8em;
				color: var(--black-50, #666666);
			}
			.color-container {
				width: 100%;
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: center;
			}

			.description-container {
				padding: 10px 0;
				border-bottom: 1px solid var(--gray-50, #dadada);
			}

			@media (max-width: 767px) {
				.bottom-wrapper {
					text-align: center;
				}
				.left {
					order: 2;
					width: 100%;
				}
				.right {
					order: 1;
					width: 100%;
					padding: 0 0 20px 0;
				}
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
		this.data = {
			icon: {},
			tag: {},
			image: {},
			title: "",
			subtitle: "",
			description: "",
			colors: [],
			activeColor: 1,
			button: {
				icon: {},
			},
			price: 0,
		};
	}
	render() {
		const {
			icon,
			tag,
			image,
			title,
			subtitle,
			description,
			colors,
			activeColor,
			button,
			price,
		} = this.data;

		return html`<my-card>
			<div slot="top" class="top-wrapper">
				<my-icon
					icon=${icon.icon}
					type-icon=${icon.typeIcon}
					@click=${this._onClickIcon}
					text-color=${icon.color}
				>
					${icon.description}
				</my-icon>

				<my-tag bg-color=${tag.color}>${tag.description}</my-tag>
			</div>

			<div slot="image" class="image-wrapper" gradient-color=${image.color}>
				<my-image .src="${image.img}" .alt=${image.alt} class="image">
					<div slot="loader" class="loader">Loading image</div>
				</my-image>
			</div>

			<div slot="title" class="title-wrapper">
				<my-title text-color="black">${title}</my-title>
				<my-title size="small" text-color="gray">${subtitle}</my-title>
			</div>

			<div slot="center" class="center-wrapper">
				<div class="description-container">
					<my-title size="medium" text-color="black">Product Info</my-title>
					<p class="text">
						${description}
					</p>
				</div>
				<div class="color-container">
					<my-title size="medium" text-color="black">Color</my-title>
					<my-colors
						.colors=${colors}
						.active=${activeColor}
						@selected-color=${this._onChangedColor}
					>
					</my-colors>
				</div>
			</div>
			<div slot="bottom" class="bottom-wrapper">
				<div class="left">
					<my-button
						bg-color=${button.color}
						id=${button.id}
						@click-button=${this._onClickButton}
					>
						<my-icon
							icon=${button.icon.icon}
							type-icon=${button.icon.typeIcon}
							text-color=${button.icon.color}
						>
							${button.description}
						</my-icon>
					</my-button>
				</div>
				<my-title text-color="black" class="right">$${price}</my-title>
			</div>
		</my-card>`;
	}
	_onClickIcon(e) {
		const icon = this.data.icon;
		const type = icon.typeIcon === "regular";

		icon.typeIcon = type ? "solid" : "regular";
		icon.description += type ? 1 : -1;

		this.data = { ...this.data, icon };
	}
	_onChangedColor(e) {
		const activeColor = e.detail.id;
		this.data = { ...this.data, activeColor };
	}
	_onClickButton(e) {
		console.log(this.data);
		console.log(e.composedPath());
	}
}
customElements.define("my-wrapper-card", MyWrapperCard);
