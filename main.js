// Main JavaScript for the website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Adjust mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
    
    // Initialize date pickers with min date as today
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
    });
    
    // Form validation for registration forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            
            // Check required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            // Check password match
            const password = form.querySelector('#password');
            const confirmPassword = form.querySelector('#confirmPassword');
            if (password && confirmPassword) {
                if (password.value !== confirmPassword.value) {
                    valid = false;
                    confirmPassword.style.borderColor = 'red';
                    alert('Passwords do not match!');
                } else {
                    confirmPassword.style.borderColor = '';
                }
            }
            
            if (!valid) {
                e.preventDefault();
                alert('Please fill all required fields correctly.');
            }
        });
    });
    
    // Show map button functionality
    const showMapBtn = document.getElementById('showMapBtn');
    if (showMapBtn) {
        showMapBtn.addEventListener('click', function() {
            const map = document.getElementById('map');
            if (map.style.display === 'none') {
                map.style.display = 'block';
                this.textContent = 'Hide Map';
                // Initialize map here if not already done
            } else {
                map.style.display = 'none';
                this.textContent = 'Show Map';
            }
        });
    }
    
    // Rating system for reviews
    const ratingStars = document.querySelectorAll('.rating-stars i');
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            // Submit rating to server
            console.log('Rating submitted:', rating);
            // Update UI to show selected rating
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});