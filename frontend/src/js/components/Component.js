class Component {
	constructor(container, cssClass) {
		this.container = container;

		this.domElement = document.createElement("div");
		this.domElement.className = cssClass;

		this.container.appendChild(this.domElement);
	}

	unrender() {
		this.domElement.outerHTML = "";
	}

}

export default Component;