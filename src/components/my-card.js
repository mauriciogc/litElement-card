import { LitElement, html, css } from "lit-element";

export class MyCard extends LitElement {
	static styles = css`
		:host {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: var(--my-card-padding, 40px);
			overflow: hidden;
			box-sizing: border-box;
		}
		.card {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			width: var(--my-card-width, 400px);
			transition: 0.5s;
		}
		.container {
			background-color: var(--my-card-container-background-color, #fff);
			z-index: 1;
			padding: var(--my-card-container-padding, 25px 30px);
			box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
			border-radius: var(--my-card-container-border-radius, 5px);
		}
		::slotted(.top-wrapper),
		::slotted(.center-wrapper),
		::slotted(.bottom-wrapper) {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: center;
		}
		::slotted(.top-wrapper) {
			padding: 0 0 10px 0;
		}
		::slotted(.title-wrapper),
		::slotted(.center-wrapper) {
			padding: 10px 0;
			border-bottom: var(--my-card-wrapper-border-boton-50, 1px solid #dadada);
		}
		::slotted(.image-wrapper) {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			transition: 0.5s;
		}
		::slotted(.bottom-wrapper) {
			padding: 10px 0;
		}

		@media (max-width: 900px) {
			.card {
				width: var(--my-card-width, 100%);
			}
		}

		@media (max-width: 425px) {
			:host {
				padding: 10px 0;
			}
			.container {
				padding: 10px;
				border-radius: 0px;
				box-shadow: 0 0 0 0;
				justify-content: center;
			}
		}
	`;

	render() {
		return html`<div class="card">
			<div class="container">
				<slot name="top"></slot>
				<slot name="image"></slot>
				<slot name="title"></slot>
				<slot name="center"></slot>
				<slot name="bottom"></slot>
			</div>
		</div>`;
	}
}
customElements.define("my-card", MyCard);
