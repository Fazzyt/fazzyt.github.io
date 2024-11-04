// Функция для обработки 3D эффекта
function handle3DEffect(e, card) {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const angleY = (mouseX - cardCenterX) / 10;
    const angleX = (cardCenterY - mouseY) / 10;
    
    card.style.transform = `
        perspective(1000px) 
        rotateX(${angleX}deg) 
        rotateY(${angleY}deg) 
        scale(1.05)
    `;
}

// Функция для инициализации эффектов карточек
function initializeCardEffects() {
    const cards = document.querySelectorAll('.project');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            handle3DEffect(e, card);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Функция для инициализации параллакс-эффекта
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Функция для добавления анимации плавающим элементам
function animateFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(element => {
        const randomDuration = Math.random() * 2 + 3; // от 3 до 5 секунд
        const randomDelay = Math.random() * 2; // от 0 до 2 секунд
        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
    });
}

// Функция инициализации всех эффектов
function initializeAllEffects() {
    initializeCardEffects();
    initializeParallax();
    animateFloatingElements();
    AOS.init({
        duration: 1000,
        once: true
    });
}

// Запуск всех эффектов при загрузке документа
document.addEventListener('DOMContentLoaded', initializeAllEffects);