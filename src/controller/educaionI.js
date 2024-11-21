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

  includeHTML('#footerId', '/../src/view/footer.html'); 