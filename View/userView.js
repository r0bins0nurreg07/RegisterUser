import { createuser } from "../service/serviceUser.js"; 
import { user } from "../Model/modelUser.js";


export async function adduser(event){
    event.preventDefault();

    const name=document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    const person=new user(name,email,password);


    try {
        const reset=await createuser(person)
        console.log("usuario creado: ", reset);

        
    } catch (error) {
        console.log("Error al ingresar el usuario ",error)
        alert("Error al registrar")      
    }

}