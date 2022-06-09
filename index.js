window.onload = function() {
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