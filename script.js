document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const toggleToSignup = document.getElementById('toggle-to-signup');
    const toggleToLogin = document.getElementById('toggle-to-login');

    toggleToSignup.addEventListener('click', () => {
        loginContainer.style.display = 'none';
        toggleToSignup.style.display = 'none';
        signupContainer.style.display = 'block';
        toggleToLogin.style.display = 'block';
    });

    toggleToLogin.addEventListener('click', () => {
        signupContainer.style.display = 'none';
        toggleToLogin.style.display = 'none';
        loginContainer.style.display = 'block';
        toggleToSignup.style.display = 'block';
    });
});
