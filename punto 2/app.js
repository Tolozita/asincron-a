async function usuario() {
    let response = await fetch("./user.json"); 
    let user = await response.json(); 
    let usuarios = user.users
    usuarios.forEach(async element => {
        let github = await fetch(`https://api.github.com/users/${element.name}/repos`);
        let usergit = await github.json();
        if (element.aprendiz === false) {
            let x = [element.name, usergit[0].owner.avatar_url];
            console.log(x);
        }
    });
       await Promise.all(promises);
}

usuario()


