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

  // dynamic service modal: populate modal content based on data-service attribute
  (function () {
    var modalEl = document.getElementById('serviceModal');
    var modalTitleEl = document.getElementById('serviceModalLabel');
    var modalBodyEl = document.getElementById('serviceModalBody');
    if (!modalEl || !modalTitleEl || !modalBodyEl || typeof bootstrap === 'undefined' || !bootstrap.Modal) return;

    var serviceContents = {
      admin: {
        title: 'Asesoramiento a administraciones y consorcios',
        body: '<p>Nos encargamos de la redacción y contestación a intimaciones y cartas documento, resguardando los intereses del consorcio, así como la determinación de la responsabilidad del consorcio frente al propietario, diseñando estrategias orientadas a minimizar la responsabilidad del Administrador y reducir costos para el Consorcio. Trabajamos activamente en la gestión de la morosidad del consorcio, iniciando la ejecución judicial de expensas y desarrollando estrategias de cobro de la deuda, tanto en instancia extrajudicial como judicial. Contamos con gestoría propia para la realización de todas las diligencias necesarias, previas y durante el proceso ejecutivo, lo que permite agilizar los trámites y optimizar resultados. Asimismo, formalizamos acuerdos de pago, cuando ello resulta autorizado, y elaboramos informes periódicos sobre el estado de los juicios, destinados a su presentación y seguimiento por parte del Consejo de Propietarios.</p><p>Gestionamos judicialmente las oposiciones de un copropietario a la realización de reparaciones urgentes por filtraciones, incluyendo los casos en que se impide el ingreso a la unidad o cuando el inmueble se encuentra desocupado o sin ocupantes, brindando soluciones legales rápidas para evitar mayores daños y responsabilidades.</p><p>Complementariamente, brindamos asistencia legal en materia de asambleas; interpretación y aplicación del Reglamento de Propiedad Horizontal y Reglamentos Internos, controversias por uso de espacios comunes como amenities; ruidos y olores molestos; reparaciones urgentes, filtraciones y humedades; también asesoramos al Administrador en el traspaso de la documentación de un Consorcio. Honorarios transparentes y acordes a las gestiones encomenadadas.</p>'
      },
      civil: {
        title: 'Relaciones Laborales del Consorcio',
        body: '<p>Ello, con particular enfoque en la aplicación del Convenio Colectivo de Trabajo 589/10 y la Ley 12.981 – Estatuto del Encargado. Asistimos al consorcio y a las administraciones en la interpretación y correcta aplicación de estas normas, abordando los conflictos más frecuentes vinculados a jornadas laborales, horas extras, categorías, funciones, francos, licencias, vivienda del encargado, sanciones disciplinarias y desvinculaciones. Nuestro servicio apunta a la prevención de contingencias laborales, el adecuado encuadre legal de las relaciones de trabajo y la defensa del consorcio ante reclamos administrativos y judiciales, reduciendo riesgos y costos derivados de una aplicación o interpretación incorrecta de la normativa vigente. Representación del Consorcio ante SECLO y SERACARH, en instancias de facilitación y conciliación laboral, sin que la participación en la facilitación implique riesgo alguno para la finalización del vínculo laboral.</p>'
      },
      family: {
        title: 'Contratos civiles y comerciales',
        body: '<p>Asistimos en la contratación de obras y reparaciones, tanto en partes comunes (terrazas, fachadas, cañerías, subsuelos, tanques de agua, ascensores, etc.) como en unidades funcionales (filtraciones, roturas de caños, pérdidas) cuando la urgencia lo requiere, así como en la celebración de contratos de mantenimiento, servicios y tercerizaciones, con empresas constructoras, albañiles, plomeros, impermeabilizadores, electricistas, etc. Nuestro acompañamiento apunta a reducir riesgos, evitar responsabilidades innecesarias y garantizar contrataciones claras y seguras.</p>'
      }
    };

    var triggers = document.querySelectorAll('.service-modal-trigger');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var key = btn.getAttribute('data-service') || 'admin';
        var content = serviceContents[key] || serviceContents['admin'];
        modalTitleEl.textContent = content.title;
        modalBodyEl.innerHTML = content.body;
        var instance = bootstrap.Modal.getOrCreateInstance(modalEl);
        instance.show();
      });
    });
  })();



  (function () {
    var card = document.getElementById('card-labor');
    
    // Verificamos que el elemento exista y el navegador soporte Observer
    if (card && 'IntersectionObserver' in window) {
      
      var hasAnimated = false;
      
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          // Con 0.3 (30%) es suficiente para saber que el usuario ya la está viendo.
          if (!hasAnimated && entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            
            // 1. Hacemos visible el elemento (quitando la clase que lo oculta)
            entry.target.classList.remove('invisible-init');
            
            // 2. Agregamos las clases de animación
            entry.target.classList.add('animate__animated', 'animate__backInLeft');
            
            hasAnimated = true;
            
            // Dejar de observar para ahorrar recursos
            obs.unobserve(entry.target);
            obs.disconnect();
          }
        });
      }, { 
          // Ajusté el threshold. 0.3 significa "disparar cuando el 30% del elemento sea visible"
          threshold: [0.3] 
      });
      
      obs.observe(card);
    }
  })();


  (function () {
    var card = document.getElementById('card-contracts');
    
    // Verificamos que el elemento exista y el navegador soporte Observer
    if (card && 'IntersectionObserver' in window) {
      
      var hasAnimated = false;
      
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          // Con 0.3 (30%) es suficiente para saber que el usuario ya la está viendo.
          if (!hasAnimated && entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            
            // 1. Hacemos visible el elemento (quitando la clase que lo oculta)
            entry.target.classList.remove('invisible-init');
            
            // 2. Agregamos las clases de animación
            entry.target.classList.add('animate__animated', 'animate__backInRight');
            
            hasAnimated = true;
            
            // Dejar de observar para ahorrar recursos
            obs.unobserve(entry.target);
            obs.disconnect();
          }
        });
      }, { 
          // Ajusté el threshold. 0.3 significa "disparar cuando el 30% del elemento sea visible"
          threshold: [0.3] 
      });
      
      obs.observe(card);
    }
  })();

  (function () {
    var card = document.getElementById('card-assesor');
    
    // Verificamos que el elemento exista y el navegador soporte Observer
    if (card && 'IntersectionObserver' in window) {
      
      var hasAnimated = false;
      
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          // Con 0.3 (30%) es suficiente para saber que el usuario ya la está viendo.
          if (!hasAnimated && entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            
            // 1. Hacemos visible el elemento (quitando la clase que lo oculta)
            entry.target.classList.remove('invisible-init');
            
            // 2. Agregamos las clases de animación
            entry.target.classList.add('animate__animated', 'animate__backInLeft');
            
            hasAnimated = true;
            
            // Dejar de observar para ahorrar recursos
            obs.unobserve(entry.target);
            obs.disconnect();
          }
        });
      }, { 
          // Ajusté el threshold. 0.3 significa "disparar cuando el 30% del elemento sea visible"
          threshold: [0.3] 
      });
      
      obs.observe(card);
    }
  })();

  // contador de años de experiencia (from 1989)
  (function () {
    var el = document.getElementById('years-experience');
    if (!el) return;
    var startYear = 1989;
    var finalValue = new Date().getFullYear() - startYear;
    var hasRun = false;

    function animateCount(finalValue, duration) {
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var current = Math.floor(progress * (finalValue - start) + start);
        el.textContent = current;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = finalValue;
        }
      }

      window.requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasRun) {
          animateCount(finalValue, 1200);
          hasRun = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(el);
  })();

  // chequeo si ya esta scrolleado al cargar la pagina
  checkScroll();
});


   