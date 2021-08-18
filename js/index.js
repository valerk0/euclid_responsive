const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$( function() {
  $( "#accordion" ).accordion({
    icons: false,
    classes: false,
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
} );

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__nav-link').forEach(function(tabBtn) {
    tabBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.work__nav-link').forEach(function(navLink) {
        navLink.classList.remove('work__nav-link-active');
      });
      e.currentTarget.classList.add('work__nav-link-active');
      document.querySelectorAll('.work__card').forEach(function(card) {
        card.classList.remove('work__card-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work__card-active');
    });
  });
  document.querySelector('.header__burger').addEventListener('click', function(e) {
    document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu-active');
  });
});
