document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    
    document.getElementById("mobile-menu").addEventListener("click", function() {
      document.querySelector(".navbar-menu").classList.toggle("active");
    });
  });