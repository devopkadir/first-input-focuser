document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "s") {
        const firstInput = document.querySelector("input, textarea");
        if (firstInput) {
            firstInput.focus();
        }
    }
});
