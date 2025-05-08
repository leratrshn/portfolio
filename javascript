document.addEventListener('DOMContentLoaded', function() {
  // Открытие модального окна
  const viewButtons = document.querySelectorAll('.view-button');
  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeButton = document.querySelector('.close-button');

  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.project-card');
      const imageSrc = card.querySelector('.project-image').src;
      const title = card.querySelector('h3').textContent;
      const description = card.querySelector('p').textContent;
      
      modalImage.src = imageSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Закрытие модального окна
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Закрытие по клику вне окна
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
