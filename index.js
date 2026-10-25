const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");

function closeMenu() {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "Menú";
}

menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Cerrar" : "Menú";
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menuBtn.focus();
    }
});

// Formulario
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const categorySelect = document.getElementById("category");
const modelSelect = document.getElementById("model");

function setError(input, message) {
    const field = input.closest(".field");
    const error = field.querySelector(".error");

    error.textContent = message;
    input.classList.toggle("is-invalid", message !== "");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valid = true;
    setError(nameInput, "");
    setError(emailInput, "");
    setError(messageInput, "");

    if (nameInput.value.trim().length < 2) {
        setError(nameInput, "Ingresá tu nombre.");
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        setError(emailInput, "Ingresá un correo válido.");
        valid = false;
    }

    if (messageInput.value.trim().length < 10) {
        setError(messageInput, "Contanos un poco más.");
        valid = false;
    }

    if (!valid) {
        status.textContent = "";
        form.querySelector(".is-invalid").focus();
        return;
    }

    const firstName = nameInput.value.trim().split(" ")[0];
    status.textContent = "Gracias, " + firstName + ". Recibimos tu consulta.";
    form.reset();
    resetModels();
});

[nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => setError(input, ""));
});

// Selects dependientes
const models = {
    premiums: [
        "Aston Martin DB11",
        "Audi R8",
        "Chevrolet Corvette C8",
        "Ford Mustang GT",
        "Mercedes-AMG C63 S",
        "Porsche 911 Carrera S"
    ],
    nobles: [
        "Audi A3 40 TFSI",
        "Chevrolet Cruze RS",
        "Fiat Cronos Precision",
        "Nissan Sentra SR",
        "Toyota Corolla SEG",
        "Volkswagen Golf Highline"
    ]
};

function resetModels() {
    modelSelect.innerHTML = "";
    modelSelect.add(new Option("Elegí primero una categoría", ""));
    modelSelect.disabled = true;
}

function fillModels(category) {
    if (category === "") {
        resetModels();
        return;
    }

    modelSelect.innerHTML = "";
    modelSelect.disabled = false;
    modelSelect.add(new Option("Elegí un modelo", ""));

    models[category].forEach((model) => {
        modelSelect.add(new Option(model, model));
    });
}

function getCategory(model) {
    if (models.premiums.includes(model)) {
        return "premiums";
    }

    if (models.nobles.includes(model)) {
        return "nobles";
    }

    return "";
}

categorySelect.addEventListener("change", () => {
    fillModels(categorySelect.value);
});

resetModels();

// Prerrelleno del modelo
document.querySelectorAll("[data-model]").forEach((link) => {
    link.addEventListener("click", () => {
        const model = link.dataset.model;
        const category = getCategory(model);

        categorySelect.value = category;
        fillModels(category);
        modelSelect.value = model;
    });
});

// Botón para volver arriba
const toTopBtn = document.querySelector(".to-top");

toTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// Animaciones al scrollear
const revealItems = document.querySelectorAll(".section-head, .card, .service, .contact-grid");

revealItems.forEach((item) => {
    item.classList.add("reveal");
});

function onScroll() {
    toTopBtn.classList.toggle("is-visible", window.scrollY > 500);

    const limit = window.innerHeight * 0.88;

    revealItems.forEach((item) => {
        if (item.getBoundingClientRect().top < limit) {
            item.classList.add("is-visible");
        }
    });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// Año del pie
document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
});
