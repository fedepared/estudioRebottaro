document.addEventListener('DOMContentLoaded', function () {
  
  if (typeof bootstrap !== 'undefined' && bootstrap.ScrollSpy) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#navbarNav',
      offset: 75
    });
  }

  // colapsar navbar al hacer click en un enlace (modo mobile)
  var navLinks = document.querySelectorAll('#navbarNav .nav-link');
  var navbarCollapse = document.querySelector('#navbarNav');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  // comportamiento del boton back to top
  var backToTop = document.getElementById('backToTop');
  var showOffset = 300; // px

  function checkScroll() {
    if (!backToTop) return;
    if (window.pageYOffset > showOffset) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  // scroll event optimizado
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // scroll to top
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      backToTop.blur();
    });
  }

  // chequeo si ya esta scrolleado al cargar la pagina
  checkScroll();
});