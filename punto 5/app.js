async function usuario() {
    let response = await fetch("./user.json"); 
    let user = await response.json(); 
    
    // Recorremos cada usuario del archivo JSON
    for (let i = 0; i < user.users.length; i++) {
        let usuario = user.users[i];
        
        // a. Modificar solo los usuarios que tengan el rol aprendiz en true
        if (usuario.aprendiz === true) {
            // b. Modificar solo los usuarios que tengan más de dos nombres
            let nombres = usuario.name.split(" ");
            if (nombres.length > 2) {
                // Validar que solo se permitan letras mayúsculas en el nombre
                let nombreValido = true;
                for (let j = 0; j < nombres.length; j++) {
                    if (!/^[A-Z]+$/.test(nombres[j])) {
                        nombreValido = false;
                        break;
                    }
                }
                
                if (nombreValido) {
                    // Convertir cada nombre a mayúsculas
                    let nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
                    // Unir los nombres con un espacio en blanco
                    usuario.name = nombresMayusculas.join(" ");
                }
            }
        }
    }
    console.log(user.users);
}

usuario();
