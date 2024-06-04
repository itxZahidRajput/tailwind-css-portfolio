const contactForm = document.querySelector('#contact-form');
let successMessage = document.querySelector("#response");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let userName = document.querySelector("#full-name").value;
    let userEmail = document.querySelector("#email").value;
    let userMessage = document.querySelector("#message").value;

    sendEmail(userName, userEmail, userMessage);


});

const sendEmail = (userName, userEmail, userMessage) => {
    Email.send({
        Host: "smtp.yourhost.com",
        Username: "username",
        Password: "password",
        To: userEmail,
        From: "you@email.com",
        Subject: "New Contact Form Submission",
        Body: "Name: " + userName +
            "<br> Email: " + userEmail +
            "<br> Message: " + userMessage,
    }).then(
        message => {
            if (message === 'OK') {
                submitSuccess();
                resetForm();
            } else {
                showError();
            }
        }
    );

}

const resetForm = () => {
    document.querySelector("#full-name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
}

const submitSuccess = () => {
    successMessage.innerText = "Your message has been sent successfully!";
}

const showError = () => {
    successMessage.innerText = "There was an error while  sending your message. Please try again.";
}