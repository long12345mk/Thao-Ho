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

// FAQ + - icon logic
document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('#faqAccordion .accordion-button');
  faqButtons.forEach(btn => {
    const icon = btn.querySelector('.faq-toggle-icon');
    const collapseId = btn.getAttribute('data-bs-target');
    const collapseEl = document.querySelector(collapseId);

    collapseEl.addEventListener('show.bs.collapse', function () {
      icon.textContent = '-';
    });
    collapseEl.addEventListener('hide.bs.collapse', function () {
      icon.textContent = '+';
    });

    // Đảm bảo icon đúng trạng thái khi load lại trang
    if (!collapseEl.classList.contains('show')) {
      icon.textContent = '+';
    } else {
      icon.textContent = '-';
    }
  });

  // Cho phép mở nhiều mục cùng lúc
  const accordion = document.getElementById('faqAccordion');
  if (accordion) {
    accordion.removeAttribute('data-bs-parent');
    accordion.querySelectorAll('.accordion-collapse').forEach(el => {
      el.removeAttribute('data-bs-parent');
    });
  }
});
