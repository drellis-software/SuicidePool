document.addEventListener('DOMContentLoaded', () => {
    // Common form handling logic
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formId = this.id;
            const userId = this.querySelector('input[name="userId"]').value;
            
            if (formId === 'suicidePoolForm') {
                // Handle Suicide Pool form submission
                console.log('Submitting Suicide Pool form for user:', userId);
                // You can send this data to your server with fetch() if needed
            } else if (formId === 'pickemForm') {
                // Handle Pick'em form submission
                console.log('Submitting Pick\'em form for user:', userId);
                // You can send this data to your server with fetch() if needed
            }
        });
    });
});
