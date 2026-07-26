document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".multiple-text", {
        strings: ["Future Developer", "Future Web Designer", "Future Data Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1200,
        loop: true
    });


    emailjs.init("eeFEhUi3cwvIB1Ghn");

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,  
        spaceBetween: 10,  
        loop: true,  
        autoplay: {
            delay: 3000,  
            disableOnInteraction: false,  
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: false
    });
});

function sendEmail() {
    emailjs.send("service_takpprg", "template_w9idnhu", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        alert("Message Sent Successfully!");
        document.querySelector("form").reset();
    }, function(error) {
        alert("Failed to send message.");
    });
}
