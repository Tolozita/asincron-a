async function usuario() {
    const todo = []
    let response = await fetch("./user.json"); 
    let user = await response.json(); 
    let usuarios = user.users.filter(aprendiz => aprendiz.aprendiz === true)
    console.log(usuarios)
    usuarios.forEach(async element => {
        let github = await fetch(`https://api.github.com/users/${element.name}/repos`);
        let usergit = await github.json();

        
        todo.push(element.name)
        let cont ;
        usergit.forEach(element => {
            cont += 1;
        });
        if (cont < 5) {
            todo.push(cont)
        }
    });
    console.log(todo)
}
usuario()