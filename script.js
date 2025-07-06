// Handle form submission (simplified for this demo)
document.addEventListener('DOMContentLoaded', () => {
    // Select all forms with id 'bookingForm'
    const forms = document.querySelectorAll('#bookingForm');

    // Loop through each form and attach a submit event listener
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get the check-in and check-out dates
            const checkInDate = form.querySelector('#checkInDate').value;
            const checkOutDate = form.querySelector('#checkOutDate').value;

            // If both dates are filled, show an alert or proceed with further actions
            if (checkInDate && checkOutDate) {
                alert(`Booking received from ${checkInDate} to ${checkOutDate}`);
                // You can add an AJAX request or form submission here
            } else {
                alert('Please fill in both the check-in and check-out dates.');
            }
        });
    });
});

