
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const contactForm = document.getElementById("contactForm");
const year = document.getElementById("year");

// Cargar el tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.className = "fa-regular fa-sun";
}

// Cambiar entre modo claro y oscuro
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const darkMode = document.body.classList.contains("dark-theme");

    if (darkMode) {
        themeIcon.className = "fa-regular fa-sun";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.className = "fa-regular fa-moon";
        localStorage.setItem("theme", "light");
    }
});

// Mostrar el año actual
year.textContent = new Date().getFullYear();

// Formulario de demostración
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    alert("¡Gracias por tu mensaje, " + name + "! Este formulario es una demostración.");

    contactForm.reset();
});
const profileImage = document.getElementById("profileImage");

if (profileImage) {
    const images = profileImage.dataset.images.split(",");

    let currentImage = 0;

    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;

        profileImage.style.opacity = "0";

        setTimeout(() => {
            profileImage.src = images[currentImage].trim();
            profileImage.style.opacity = "1";
        }, 300);

    }, 4000);
}

window.addEventListener("load", () => {
    if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);
});
