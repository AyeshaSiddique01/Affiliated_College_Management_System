alert("123");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
    const pass_field = document.querySelector(".pass-key");
    if (pass_field.type === "password") {
        pass_field.type = "text";
        console.log(pass_field.type);
        console.log(showBtn.textContent);
        showBtn.textContent = "Hide";
        console.log(showBtn.textContent);
        showBtn.style.color = "#3498db";
    } else {
        pass_field.type = "password";
        showBtn.textContent = "Show";
        showBtn.style.color = "#222"
    }
});