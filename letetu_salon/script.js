// Menu Mobile (Hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Petit ajout CSS via JS pour l'affichage mobile
    if(navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#111';
        navLinks.style.padding = '20px';
    } else {
        navLinks.style.display = 'none';
    }
});
// Redirection vers WhatsApp lors de la soumission du formulaire
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // 1. Récupération des données du formulaire
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 2. Votre numéro de téléphone (Format international, sans le + ni les espaces)
    // EXEMPLE pour le Cameroun : 237600000000
    const monNumero = "237657373383"; 

    // 3. Construction du message WhatsApp
    const texte = `Bonjour Beauty Hair !%0A%0A` +
                  `*Nom :* ${nom}%0A` +
                  `*Email :* ${email}%0A` +
                  `*Message :* ${message}`;

    // 4. Création de l'URL WhatsApp
    const whatsappUrl = `https://wa.me/${monNumero}?text=${texte}`;

    // 5. Redirection immédiate
    window.open(whatsappUrl, '_blank');
});


// Animation au scroll simple
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 10%';
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.padding = '20px 10%';
        navbar.style.background = 'rgba(17, 17, 17, 0.95)';
    }
});