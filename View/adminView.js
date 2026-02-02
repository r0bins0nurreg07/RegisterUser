import { user } from "../Model/modelUser.js";
import { createuser, deleteuser, getuserid } from "../service/serviceUser.js";



export function adduseradmin(users){
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    users.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="border px-4 py-2">${user.id}</td>
            <td class="border px-4 py-2">${user.time}</td>
            <td class="border px-4 py-2">${user.name}</td>
            <td class="border px-4 py-2">${user.email}</td>
            <td class="border px-4 py-2">${user.password}</td>
        `;

        tbody.appendChild(tr);
    });
}

export async function createuserforadmin(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;

    const person = new user(name,email,password);

    try {
        const result = await createuser(person);
        console.log("Usuario creado :", result);
        return result;
    } catch (error) {
        console.log("Error al crear el usuario :", error);
        throw error;
    }
}

export async function getpersonid(id){
    try {
        const result = await getuserid(id);
        return result;
    } catch (error) {
        console.log("No se encontro información del usuario:", error);
        throw error;
    }
}

export async function deleteuserid(id){
    try {
        const result = await deleteuser(id);
        return result;
    } catch (error) {
        console.log("Error al intentar eliminar: ", error);
        throw error;
    }
}