document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Opcional: salvar preferência no localStorage
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Opcional: carregar preferência salva
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

  
