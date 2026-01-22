/* ========================================
   Portal SETIC - JavaScript Principal
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Menu Mobile Toggle
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }


    const telefone = document.getElementById('telefone').value.trim();
    const termos = document.getElementById('termos').checked;

    if (telefone && !/^\+?\d{9,15}$/.test(telefone)) {
        alert('Número de telefone inválido.');
        return;
    }

    if (!termos) {
        alert('É necessário aceitar os termos.');
        return;
    }


    const btn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    // ========================================
    // Validação do Formulário de Contacto
    // ========================================
    const form = document.getElementById('form-contacto');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validações básicas
            if (nome.length < 3) {
                alert('Por favor, insira um nome válido.');
                return;
            }

            if (!validarEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            if (!assunto) {
                alert('Por favor, selecione um assunto.');
                return;
            }

            if (mensagem.length < 10) {
                alert('A mensagem deve ter pelo menos 10 caracteres.');
                return;
            }

            // Simular envio
            alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
            form.reset();
        });
    }

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // ========================================
    // Fechar menu ao clicar num link
    // ========================================
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // ========================================
    // Header scroll effect
    // ========================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#122744';
        } else {
            header.style.backgroundColor = '#1a365d';
        }
    });

});
