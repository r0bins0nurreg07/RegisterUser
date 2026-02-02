import { getdata, updateuser } from "../service/serviceUser.js";
import { adduseradmin, createuserforadmin, deleteuserid } from "../View/adminView.js";

const btnCreate = document.getElementById("form");
const btnRead = document.getElementById("read");
const btnUpdate = document.getElementById("update");
const btnDelete = document.getElementById("delete");


async function alluser(){
    try {
        const users = await getdata();
        adduseradmin(users);
    } catch (error) {
        console.log("Error cargando usuarios:", error);
    }
}

document.addEventListener("DOMContentLoaded", alluser);

btnCreate.addEventListener("submit", async (event) => {
    event.preventDefault();
    await createuserforadmin(event);
    await alluser(); // 🔥 refresca tabla después de crear
});


btnRead.addEventListener("click", async () => {

    const id = document.getElementById("search").value;

    const users = await getdata();

    const filtered = users.filter(user => user.id == id);

    adduseradmin(filtered);

});

btnDelete.addEventListener("click",async()=>{
    const id=document.getElementById("search").value;
    const user1=await deleteuserid(id);
    alluser();
});

btnUpdate.addEventListener("click",async()=>{
    const id= document.getElementById("search").value;

    const data= {  
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    password : document.getElementById("Password").value
    }

    try {
        await updateuser(id,data);

        await alluser();
        console.log("Usuario actualizado correctamente ");
        
    } catch (error) {
        console.log("Erro al actualizar:", error);
        
    }




});
