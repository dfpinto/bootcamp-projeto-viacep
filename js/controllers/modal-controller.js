function State() {
    this.container = null;
    this.btnClose = null;
}

const state = new State();

export function init() {

    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");

    state.btnClose.addEventListener('click', handleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);
}

export function showModal() {
    state.container.classList.add("active");
}

export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event) {
    event.preventDefault();
    // Por que this? Porque é o objeto pelo qual o evento foi inscrito. Neste caso foi no container.
    // Então se o target for igual ao container, feche o modal.
    if (event.target === this) {
        closeModal();
    }
}