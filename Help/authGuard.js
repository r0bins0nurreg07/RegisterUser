export function authGuard() {
    const userLogged = localStorage.getItem("userLogged");

    if (!userLogged) {
        window.location.href = "../index.html";
    }
}
