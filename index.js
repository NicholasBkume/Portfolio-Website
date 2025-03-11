function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const body = document.body;
    const backdrop = document.querySelector(".menu-backdrop");

    // Toggle classes for menu and icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Update aria-expanded for accessibility
    const isOpen = menu.classList.contains("open");
    icon.setAttribute("aria-expanded", isOpen);

    // Toggle backdrop visibility
    backdrop.classList.toggle("open", isOpen);

    // Prevent scrolling when menu is open
    if (isOpen) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

// Close menu when clicking outside the menu or backdrop
document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const backdrop = document.querySelector(".menu-backdrop");

    if (!menu.contains(event.target) && !icon.contains(event.target) && !backdrop.contains(event.target)) {
        if (menu.classList.contains("open")) {
            toggleMenu();
        }
    }
});

// Handle window resize to reset menu state
window.addEventListener("resize", () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const body = document.body;

    // Reset menu state when window is resized to desktop layout
    if (window.innerWidth > 768) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        icon.setAttribute("aria-expanded", false);
        body.style.overflow = "auto";
    }
});