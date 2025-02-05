// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  // Captura todos os links de navegação
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Adiciona um evento de clique para cada link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();  // Previne o comportamento padrão de navegação
      const targetId = link.getAttribute('href').substring(1);  // Pega o ID da seção
      const targetSection = document.getElementById(targetId);  // Encontra a seção alvo
      
      // Rola suavemente até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Variável para armazenar a posição do último scroll
let lastScrollTop = 0;
// Captura o elemento do cabeçalho
const header = document.querySelector('.header');

// Adiciona um evento de scroll na janela
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Rolando para baixo
    header.style.transform = 'translateY(-100%)';
  } else {
    // Rolando para cima
    header.style.transform = 'translateY(0)';
  }

  // Atualiza a posição do último scroll
  lastScrollTop = Math.max(currentScroll, 0);
});

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  // Captura todas as letras com a classe 'letter'
  const letters = document.querySelectorAll('.letter');
  
  // Adiciona eventos de mouseenter e mouseleave para cada letra
  letters.forEach(letter => {
    letter.addEventListener('mouseenter', () => {
      letter.style.transform = 'translateY(-30px)';  // Anima a letra para cima
      letter.style.color = '#4D1717';  // Muda a cor da letra
    });

    letter.addEventListener('mouseleave', () => {
      letter.style.transform = 'translateY(0)';  // Reseta a animação da letra
      letter.style.color = '';  // Reseta a cor da letra
    });
  });
});
