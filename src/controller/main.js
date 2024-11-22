const button = document.getElementById('edu-ini');
// Agregar un evento 'click' al botón
button.addEventListener('click', () => {
    window.location.href = '/../src/view/educacion-inicial.html';
});


async function includeHTML(selector, url) {
    const element = document.querySelector(selector);
    if (element) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const html = await response.text();
          element.innerHTML = html;
        } else {
          console.error(`Error al cargar ${url}: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error al realizar el fetch de ${url}:`, error);
      }
    }
  }
  
  // Incluir las vistas
  includeHTML('#footerID', '/../src/view/footer.html'); 
  includeHTML('#nav-barP', '/../src/view/nav-bar.html'); 
  