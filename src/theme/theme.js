import { LitElement, html, css } from "lit-element";

const theme = css`
	:host {
		display: block;
		--white: #ffffff;

		--gray: #555555;
		--gray-75: #858585;
		--gray-50: #dadada;

		--pink: #fd47a2;
		--pink-75: #fc69b2;
		--pink-50: #ff85c2;

		--yellow: #f3aa18;
		--yellow-75: #f5b638;
		--yellow-50: #f8ce7a;

		--green: #19723e;
		--green-75: #229d55;
		--green-50: #51d989;

		--blue: #0136af;
		--blue-75: #2175f5;
		--blue-50: #22abfa;

		--red: #d62926;
		--red-75: #de4441;
		--red-50: #e67371;

		--orange: #ff5521;
		--orange-75: #ff6c3f;
		--orange-50: #ff845f;

		--black: #272727;
		--black-75: #3a3a3a;
		--black-50: #666666;

		--shadow-1: 0 0 10px 0.5px rgba(0, 0, 0, 0.2);
	}
`;

const globalStyles = css`
	*[text-color="white"] {
		color: var(--white);
	}
	*[text-color="gray"] {
		color: var(--gray-75);
	}
	*[text-color="gray-50"] {
		color: var(--gray-50);
	}
	*[text-color="black"] {
		color: var(--black-75);
	}
	*[text-color="pink"] {
		color: var(--pink-75);
	}
	*[text-color="yellow"] {
		color: var(--yellow-75);
	}
	*[text-color="green"] {
		color: var(--green-75);
	}
	*[text-color="blue"] {
		color: var(--blue-75);
	}
	*[text-color="red"] {
		color: var(--red-75);
	}
	*[text-color="orange"] {
		color: var(--orange-75);
	}

	*[bg-color="white"] {
		background-color: var(--white);
	}
	*[bg-color="gray"] {
		background-color: var(--gray-75);
	}
	*[bg-color="gray-50"] {
		background-color: var(--gray-50);
	}
	*[bg-color="black"] {
		background-color: var(--black-75);
	}
	*[bg-color="pink"] {
		background-color: var(--pink-75);
	}
	*[bg-color="yellow"] {
		background-color: var(--yellow-75);
	}
	*[bg-color="green"] {
		background-color: var(--green-75);
	}
	*[bg-color="blue"] {
		background-color: var(--blue-75);
	}
	*[bg-color="red"] {
		background-color: var(--red-75);
	}
	*[bg-color="orange"] {
		background-color: var(--orange-75);
	}

	*[gradient-color="blue"] {
		background-image: linear-gradient(45deg, var(--blue), var(--blue-50));
	}

	*[gradient-color="red"] {
		background-image: linear-gradient(45deg, var(--red), var(--red-50));
	}

	*[gradient-color="green"] {
		background-image: linear-gradient(45deg, var(--green), var(--green-50));
	}

	*[gradient-color="orange"] {
		background-image: linear-gradient(45deg, var(--orange), var(--orange-50));
	}

	*[gradient-color="yellow"] {
		background-image: linear-gradient(45deg, var(--yellow), var(--yellow-50));
	}

	*[gradient-color="black"] {
		background-image: linear-gradient(45deg, var(--gray), var(--black-50));
	}

	*[gradient-color="white"] {
		background-image: linear-gradient(45deg, var(--gray-50), var(--white));
	}
`;

export { globalStyles, theme as default };
