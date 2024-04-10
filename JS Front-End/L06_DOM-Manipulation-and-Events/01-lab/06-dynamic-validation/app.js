function validate() {
    let emailField = document.getElementById('email');

    emailField.addEventListener('change', function(e){
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!emailPattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}