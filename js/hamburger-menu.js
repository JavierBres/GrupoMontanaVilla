// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const hamburger = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Función para abrir/cerrar el menú hamburguesa
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
      if (!navigation.contains(event.target) && !hamburger.contains(event.target) && navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
    
    // Manejar los submenús en dispositivos móviles
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
    
    // Ajustar el comportamiento en caso de redimensionar la ventana
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        document.querySelectorAll('.dropdown.active').forEach(function(dropdown) {
          dropdown.classList.remove('active');
        });
        if (navigation.classList.contains('active')) {
          navigation.classList.remove('active');
          hamburger.classList.remove('active');
        }
      }
    });
  });