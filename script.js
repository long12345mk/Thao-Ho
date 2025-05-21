// scripts.js
// Placeholder for interactive behaviors like dropdowns, animations, etc.
document.addEventListener('DOMContentLoaded', function () {
  const langSwitcher = document.querySelector('.lang-switcher');

  if (langSwitcher) {
    langSwitcher.addEventListener('click', function () {
      alert('Language switching functionality not yet implemented.');
    });
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
document.querySelectorAll('.faq-card .toggle').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    answer.classList.toggle('open');
    button.textContent = answer.classList.contains('open') ? '-' : '+';
  });
});
document.querySelectorAll('.continue-reading-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định của liên kết
        // Thêm chức năng của bạn ở đây (ví dụ: mở modal)
        alert("Continue Reading clicked!"); 
    });
});
