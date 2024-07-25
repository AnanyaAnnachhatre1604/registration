document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    document.querySelector('.google').addEventListener('click', function(event) {
        event.preventDefault();
        showConfirmPopup('Are you sure you want to sign up with your Google account?');
    });

    // Modal handling
    var modal = document.getElementById("popup-modal");
    var span = document.getElementsByClassName("close")[0];
    var modalText = document.getElementById("modal-text");
    var yesButton = document.getElementById("yes-button");
    var noButton = document.getElementById("no-button");

    document.getElementById('terms-link').addEventListener('click', function(event) {
        event.preventDefault();
        modalText.textContent = "Here are the Terms of Service...";
        showModal();
    });

    document.getElementById('privacy-link').addEventListener('click', function(event) {
        event.preventDefault();
        modalText.textContent = "Here is the Privacy Policy...";
        showModal();
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    yesButton.onclick = function() {
        modal.style.display = "none";
        // Add logic to handle "Yes" button click if needed
    }

    noButton.onclick = function() {
        modal.style.display = "none";
    }

    function validateForm() {
        var password = document.querySelector('input[name="password"]').value;
        var repeatPassword = document.querySelector('input[name="repeat-password"]').value;
        
        if (password !== repeatPassword) {
            showErrorPopup('Passwords do not match!');
        } else {
            showSuccessPopup('Form submitted successfully!');
        }
    }

    function showSuccessPopup(message) {
        modalText.textContent = message;
        yesButton.style.display = "none";
        noButton.style.display = "none";
        showModal();
    }

    function showErrorPopup(message) {
        modalText.textContent = message;
        yesButton.style.display = "none";
        noButton.style.display = "none";
        showModal();
    }

    function showConfirmPopup(message) {
        modalText.textContent = message;
        yesButton.style.display = "inline-block";
        noButton.style.display = "inline-block";
        showModal();
    }

    function showModal() {
        modal.style.display = "flex";
    }
});
