document.addEventListener("DOMContentLoaded", function () {
    const onButton = document.querySelector(".on");
    const closeButton = document.querySelector(".close");
    const outButton = document.querySelector(".out");
    const alertDiv = document.querySelector(".alert");

    onButton.addEventListener("click", function () {
        alertDiv.style.transform = "translateX(0)";
    });

    closeButton.addEventListener("click", function () {
        alertDiv.style.transform = "translateX(150%)";
    });

    outButton.addEventListener("click", function () {
        alertDiv.style.transform = "translateX(150%)";
    });
});