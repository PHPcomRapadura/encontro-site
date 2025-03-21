document
    .getElementById("nav-mobile")
    .addEventListener("click", function (event) {
        const navMobile = document.getElementById("nav-mobile");
        if (navMobile.classList.contains("hidden")) return;

        if (!document.getElementById("nav-mobile-list").contains(event.target)) {
            navMobile.classList.toggle("hidden");
        }
    });

openModal = (nome) => {
    const modalElement = document.getElementById('default-modal')

    if (!modalElement) return;

    const palestrante = palestrantes.find(p => p.nome === nome)
    const content = speakersComponent.generateSpeakerCard(palestrante, true).innerHTML

    document.getElementById('modal-bio-content').innerHTML = content
    modalElement.classList.remove('hidden')
}

closeModal = () => {
    const modalElement = document.getElementById('default-modal')

    if (!modalElement) return;

    modalElement.classList.add('hidden')
}