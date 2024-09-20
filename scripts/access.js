const messageElement = document.getElementById('accessMessage');
const messageElement_about = document.getElementById('accessMessage_about');

// Создаем IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => 
        {
            messageElement.textContent = "Access Granted";
            messageElement_about.textContent = "hello world"
            messageElement.classList.remove('denied');
            messageElement.classList.add('granted');
        }, 3001) 
      
    } else {
      // Если элемент за пределами экрана
      messageElement.textContent = "Access Denied";
      messageElement_about.textContent = ""
      messageElement.classList.remove('granted');
      messageElement.classList.add('denied');
    }
  });
}, {
  threshold: 0.90 // Срабатывает, когда 50% элемента видны
});

// Наблюдаем за элементом
observer.observe(messageElement);
