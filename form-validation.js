// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Validate registration forms
    const registrationForms = document.querySelectorAll('#workerRegisterForm, #customerRegisterForm');
    
    registrationForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input, select, textarea');
            
            // Check all required fields
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Check password match
            const password = form.querySelector('#password');
            const confirmPassword = form.querySelector('#confirmPassword');
            
            if (password && confirmPassword) {
                if (password.value !== confirmPassword.value) {
                    isValid = false;
                    confirmPassword.classList.add('error');
                    alert('Passwords do not match!');
                } else {
                    confirmPassword.classList.remove('error');
                }
                
                if (password.value.length < 6) {
                    isValid = false;
                    password.classList.add('error');
                    alert('Password must be at least 6 characters long!');
                } else {
                    password.classList.remove('error');
                }
            }
            
            // Check terms agreement
            const terms = form.querySelector('#terms');
            if (terms && !terms.checked) {
                isValid = false;
                terms.classList.add('error');
                alert('You must agree to the terms and conditions!');
            } else if (terms) {
                terms.classList.remove('error');
            }
            
            // If form is valid, submit it
            if (isValid) {
                alert('Form submitted successfully!');
                // In a real application, you would submit the form to the server here
                // form.submit();
            }
        });
    });
    
    // Validate job posting form
    const jobPostForm = document.getElementById('jobPostForm');
    if (jobPostForm) {
        jobPostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = jobPostForm.querySelectorAll('input[required], select[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Check budget is reasonable
            const budget = document.getElementById('budget');
            if (budget && parseInt(budget.value) < 100) {
                isValid = false;
                budget.classList.add('error');
                alert('Minimum budget should be ₹100!');
            } else if (budget) {
                budget.classList.remove('error');
            }
            
            // Check date is not in the past
            const jobDate = document.getElementById('jobDate');
            if (jobDate) {
                const today = new Date().toISOString().split('T')[0];
                if (jobDate.value < today) {
                    isValid = false;
                    jobDate.classList.add('error');
                    alert('Job date cannot be in the past!');
                } else {
                    jobDate.classList.remove('error');
                }
            }
            
            if (isValid) {
                alert('Job posted successfully!');
                // In a real application, you would submit the form to the server here
                // jobPostForm.submit();
            }
        });
    }
    
    // Real-time validation for fields
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });
});