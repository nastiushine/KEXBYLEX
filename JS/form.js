function isValidEmail(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const form = document.getElementById("myForm");
  
  
    if (!name) {
      alert("Пожалуйста, заполните поле 'Имя'");
      return false;
    }
  
    if (!email) {
      alert("Пожалуйста, заполните поле 'Почта'");
      return false;
    }
  
    if (!message) {
      alert("Пожалуйста, заполните поле 'Комментарий'");
      return false;
    }
  
    
    if (!isValidEmail(email)) {
      alert("Пожалуйста, введите корректный адрес электронной почты");
      return false;
    }
  
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateForm();
  });



(function () {
  emailjs.init('gv4DyXogb0Mp8E1D8');

  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_gkbl0b1', 'template_xh69w07', formData)
      .then(function (response) {
        alert('Комментарий успешно отправлен!');
        console.log('Комментарий успешно отправлен!', response.status, response.text);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      }, function (error) {
        alert('Произошла ошибка при отправке комментария. Повторите попытку.');
      });
  });
})();
