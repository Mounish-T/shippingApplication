let formContent = document.getElementById('form-content');

formContent.addEventListener('submit', (event)=>{
    event.preventDefault();
    window.location.href = '../pages/home.html';
});