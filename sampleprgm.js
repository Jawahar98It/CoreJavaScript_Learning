const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    console.log('Login submitted:', { email, password });
    alert('Login successful!');
});