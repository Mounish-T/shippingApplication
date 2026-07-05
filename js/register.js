let formContent = document.getElementById('form-content');

formContent.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(isValidInput()){
        let ackScreen = document.getElementById('ack-screen');
        formContent.style.display = 'none';
        ackScreen.style.display = 'block';
    }
    else{
        alert("Enter valid Input");
    }
});

function isValidInput(){
    let uname = document.getElementById('username').value;
    let address = document.getElementById('address').value;
    let pwd = document.getElementById('password').value;

    return uname.length <= 50 && address.length <= 100 && pwd.length >= 10 && pwd.length <= 30;
}