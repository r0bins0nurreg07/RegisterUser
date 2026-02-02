const url = "http://localhost:3000/users";

export async function createuser(user) {
    try {
        const reset = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        if (!reset.ok) {
            throw new Error("Error al crear el usuario");
        }

        return await reset.json();
    } catch (error) {
        console.log("Post Error:", error.message);
        throw error; // vuelve a lanzar el error original
    }
}

// Obtener usuario por email
export async function getuserid(id) {
    try {
        const reset = await fetch(`${url}?id=${id}`);
        if (!reset.ok) {
            throw new Error("Error al buscar usuario");
        }
        const data = await reset.json();
        return data[0]; // devuelve el primer usuario encontrado o undefined
    } catch (error) {
        console.log("Get Error:", error.message);
        throw error;
    }
}

// Eliminar usuario por id
export async function deleteuser(id) {
    try {
        const reset = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });

        if (!reset.ok) {
            throw new Error("Error al eliminar usuario");
        }

        return true; // opcional: confirmar que se eliminó
    } catch (error) {
        console.log("Delete Error:", error.message);
        throw error;
    }
}


export async function getdata() {
    try {
        const reset=await fetch(url);
        if(!reset.ok){
            throw new Error("Erro al obtener los usuarios")
        }
        const data=await reset.json();
        return data;
    } catch (error) {
        console.error("Erro al obtener los usuarios: ", error);
        return[]
        
    }
    
}

export async function updateuser(id,data){
    try {
        const reset=await fetch(`${url}/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        return reset.json();
    } catch (error) {
        console.log("Erro al actualizar: ", error)
        
    }
}