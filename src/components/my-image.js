import { LitElement, html, css } from "lit-element";

const tagName = "my-image";
class MyImage extends LitElement {
	static styles = css`
		:host {
			position: relative;
		}
		.image,
		::slotted(.loader) {
			transition: var(--my-image-transition, opacity 0.5s ease);
			width: var(--my-image-width, 100%);
			height: var(--my-image-height, 100%);
		}
		::slotted(.loader) {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
		}

		::slotted(.loader),
		:host([loaded]) .image {
			opacity: 1;
		}

		.image,
		:host([loaded]) ::slotted(.loader) {
			opacity: 0;
		}
	`;
	static get properties() {
		return {
			/**
			 * Image alt-text.
			 * @type {String}
			 */
			alt: { type: String },
			/**
			 * Whether the element is on screen.
			 * @type {Boolean}
			 */
			intersecting: { type: Boolean },
			/**
			 * Image URI.
			 * @type {String}
			 */
			src: { type: String },
			/**
			 * Whether the image has loaded.
			 * @type {Boolean}
			 */
			loaded: {
				type: Boolean,
				reflect: true,
			},
		};
	}

	constructor() {
		super();
		this.intersecting = false;
		this.loading = false;
		this.alt = "image";
	}
	connectedCallback() {
		super.connectedCallback();
		this._initIntersectionObserver();
	}
	render() {
		return html`
			<slot name="loader"></slot>
			<img
				class="image"
				.src="${this.intersecting ? this.src : undefined}"
				alt="${this.alt}"
				@load="${() => (this.loaded = true)}"
			/>
		`;
	}

	/**
	 * Initializes the IntersectionObserver when the element instantiates.
	 * @protected
	 */
	_initIntersectionObserver() {
		const props = { rootMargin: "0px" };
		if (!window.IntersectionObserver) return (this.intersecting = true);
		if (this.observer) return;

		this.observer = new IntersectionObserver(
			this._cbIntersetcion.bind(this),
			props
		);

		this.observer.observe(this);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._disconnectObserver();
	}
	/**
	 * Callback function that is executed whenever an element they wish
	 * to monitor enters or exits another element
	 * @protected
	 */
	_cbIntersetcion(entries) {
		const [{ isIntersecting }] = entries;
		if (isIntersecting) {
			this.intersecting = true;
		}
	}
	/**
	 * Disconnects and unloads the IntersectionObserver.
	 * @protected
	 */
	_disconnectObserver() {
		this.observer.disconnect();
		this.observer = null;
		delete this.observer;
	}
}

customElements.define(tagName, MyImage);
