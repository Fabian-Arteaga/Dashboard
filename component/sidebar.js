document.addEventListener("DOMContentLoaded", () => {
    const layoutContainer = document.querySelector("#layout-placeholder");

    if (layoutContainer) {
        fetch("/component/sidebar.html")
            .then((response) => response.text())
            .then((data) => {
                layoutContainer.innerHTML = data;
                const currentPath = window.location.pathname;
                document.querySelectorAll(".nav-link").forEach(link => {
                    if (link.getAttribute("href") === currentPath) {
                        link.classList.add("active");
                    }
                });
            })
            .catch((err) => console.error("Error al cargar el menú:", err));
    }
});