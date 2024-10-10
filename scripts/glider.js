const maxGliders = 15;

function createGlider() {
    const glider = document.createElement('div');
    glider.className = 'glider';
    document.querySelector('header').appendChild(glider); // Добавляем глайдеры в header
    return glider;
}

function getRandomPosition() {
    const header = document.querySelector('header');
    const maxX = header.offsetWidth - 20; // Adjust the max X value to avoid going off-screen
    const maxY = header.offsetHeight - 20; // Adjust the max Y value to avoid going off-screen
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

function animateGlider(glider, delay) {
    setTimeout(() => {
        const { x, y } = getRandomPosition();
        glider.style.top = `${y}px`;
        glider.style.left = `${x}px`;
        glider.style.opacity = 1;
        setTimeout(() => {
            glider.style.opacity = 0;
        }, 2500); // Adjust the duration of the animation
        setTimeout(() => animateGlider(glider, delay), 3500); // Adjust the delay between animations
    }, delay); // Initial delay for staggered start
}

for (let i = 0; i < maxGliders; i++) {
    const glider = createGlider();
    const initialDelay = i * 200; // Staggered start for each glider
    animateGlider(glider, initialDelay);
}