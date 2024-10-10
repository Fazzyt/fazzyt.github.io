const messageElement = document.getElementById('accessMessage');
const infoBlock = document.getElementById('info');
const infoBlock_img = document.getElementById('info_img');

// Создаем IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => 
        {
            messageElement.textContent = "> Access Granted";
            messageElement.classList.remove('denied');
            messageElement.classList.add('granted');
            infoBlock.classList.remove('hidden');
            infoBlock.classList.add('visible');
            infoBlock_img.classList.remove('hidden');
            infoBlock_img.classList.add('visible');
        }, 600) 
    }  else {
      messageElement.textContent = "> Access Denied";
      messageElement.classList.remove('granted');
      messageElement.classList.add('denied');
      infoBlock.classList.remove('visible');
      infoBlock.classList.add('hidden');
      infoBlock_img.classList.remove('visible');
      infoBlock_img.classList.add('hidden');
    }

  
  });
  }, {
  threshold: 0.5 // Срабатывает, когда 50% элемента видны
});

// Наблюдаем за элементом
observer.observe(messageElement);