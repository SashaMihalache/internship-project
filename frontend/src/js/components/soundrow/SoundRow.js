import Component from "../Component";
import Router from "../../services/router/Router";
import Modal from "../modal/Modal";
import SoundsGridRepository from "../../repositories/SoundsGridRepository";
import "./SoundRow.css";

class SoundRow extends Component {
    constructor(container, sound, reloadFunction) {
        super(container, "sounds-grid-row");

        this.reloadFunction = reloadFunction;
        this.sound = sound;
    }

    render() {
        this.domElement.innerHTML = `
            <div class="sounds-cell sound-name">${this.sound.name}</div>
            <div class="sounds-cell sound-type">${this.sound.type.name}</div>
            <div class="actions-cell sound-action-buttons"></div>
        `;

        this.editButton = document.createElement("i");
        this.editButton.className = "fas fa-pen";
        this.domElement.querySelector(".sound-action-buttons")
            .appendChild(this.editButton);


        this.deleteButton = document.createElement("i");
        this.deleteButton.className = "fas fa-trash";
        this.domElement.querySelector(".sound-action-buttons")
            .appendChild(this.deleteButton);

        this.editButton.addEventListener("click", () => {
            Router.goToUrl("/sound/" + this.sound.id);
        });

        this.deleteButton.addEventListener("click", () => {
            this.modal = new Modal(document.querySelector(".modals"), "Delete sound", "Are you sure you want to delete this sound?");
            //this.modal.render();

            SoundsGridRepository.deleteSound(this.sound.id, () => { this.reloadFunction(); });
        });

    }
}

export default SoundRow;