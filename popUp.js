const openRegisterButtons = document.querySelectorAll('[data-register-target]')
const closeRegisterButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById("overlay")

openRegisterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const register = document.querySelector(button.dataset.registerTarget)
        openRegister(register)
    })
});

overlay.addEventListener( "click", () => {
    const registers = document.querySelectorAll(".register.active")
    registers.forEach(register => {
        closeRegister(register)
    })
})


closeRegisterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const register = button.closest("register")
        closeRegister(register)
    })
});





function openRegister(register) {
    if (register == null) return
    register.classList.add("active")
    overlay.classList.add("active")  
};

function closeRegister(register) {
    if (register == null) return
    register.classList.remove("active")
    overlay.classList.remove("active")  
};






