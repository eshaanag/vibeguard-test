// CATEGORY 5 — UI-Only Authorization
function showAdminPanel() {
    console.log("Welcome to admin panel");
}

const user = { role: "user" }; // Mock user

if (user.role === "admin") {
    showAdminPanel();
}
