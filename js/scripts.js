/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const aboutHeading = document.querySelector('.about-heading');
    const aboutParagraph = document.querySelector('.about-paragraph');
    const aboutImage = document.querySelector('.about-image');
  
    function checkScroll() {
      // مسافة ظهور العناصر (تعديل هذه القيمة حسب الحاجة)
      const triggerPoint = window.innerHeight * 0.8;
  
      if (aboutHeading.getBoundingClientRect().top < triggerPoint) {
        aboutHeading.classList.add('show');
      }
  
      if (aboutParagraph.getBoundingClientRect().top < triggerPoint) {
        aboutParagraph.classList.add('show');
      }
  
      if (aboutImage.getBoundingClientRect().top < triggerPoint) {
        aboutImage.classList.add('show');
      }
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // تشغيل الدالة مرة واحدة عند تحميل الصفحة في حالة ظهور العناصر بالفعل
  });



  document.addEventListener('DOMContentLoaded', function() {
    const projectElements = document.querySelectorAll('.projects-section .img-fluid, .projects-section .featured-text, .projects-section .project-text');
  
    function checkScroll() {
      const triggerPoint = window.innerHeight * 0.8; // يمكنك تعديل هذه القيمة
  
      projectElements.forEach(element => {
        if (element.getBoundingClientRect().top < triggerPoint) {
          element.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // تشغيل الدالة مرة واحدة عند تحميل الصفحة
  });


// من هنا
document.addEventListener("DOMContentLoaded", function () {
  // تشغيل المودال الخاص بـ "Well Performance Prediction and Optimization"
  document.getElementById("openWellPerformancePopup").addEventListener("click", function (event) {
      event.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById("wellPerformanceModal"));
      modal.show();
  });

  // تشغيل المودال الخاص بـ "Hydrate Formation Temperature Prediction Model"
  document.getElementById("openReadmePopup").addEventListener("click", function (event) {
      event.preventDefault();
      var modal = new bootstrap.Modal(document.getElementById("readmeModal"));
      modal.show();
  });
  // تشغيل المودال الخاص بـ "Oil_Pipeline_Leakage_Prediction"
  document.getElementById("Oil_Pipeline_Leakage_Prediction_and_Analysis").addEventListener("click", function (event) {
    event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById("Oil_Pipeline_Leakage_Prediction"));
    modal.show();
  });
 // تشغيل المودال الخاص بـ "Seismic_Data_Driven_Reservoir_Property_Prediction"
 document.getElementById("Seismic_Data_Driven_Reservoir_Property_Prediction").addEventListener("click", function (event) {
  event.preventDefault();
  var modal = new bootstrap.Modal(document.getElementById("Seismic_Data_Driven_Reservoir_Property"));
  modal.show();
  });
});
