window.onload = function() {

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    const openModal = document.getElementById('modalBtn');
    const closeModal = document.getElementById('closeBtn');
    const modal = document.getElementById('modal');
    const modalFade = document.getElementById('modalFade');
    const body = document.getElementById('body');

    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal-active');
        modalFade.classList.add('modal-fade');
        body.classList.add('scroll-hidden');
    });
    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal-active');
        modalFade.classList.remove('modal-fade');
        body.classList.remove('scroll-hidden');
    });
    
  };