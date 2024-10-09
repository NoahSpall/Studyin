const hoverTexts = document.querySelectorAll('.hover-text');
const popupCard = document.getElementById('popupCard');

hoverTexts.forEach(text => {
  text.addEventListener('mouseenter', (e) => {
    const content = e.target.getAttribute('data-popup-content');
    popupCard.innerText = content;
    popupCard.style.display = 'block';
    popupCard.style.left = `${e.pageX + 10}px`; // Offset from cursor
    popupCard.style.top = `${e.pageY + 10}px`;
  });

  text.addEventListener('mouseleave', () => {
    popupCard.style.display = 'none';
  });
});
