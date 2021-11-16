function prueba(event){

    event.preventDefault();

    let user = $('#user').val();
    $.get(`https://api.github.com/users/${user}`, displayName)
    console.log('Hola')
    function displayName(data) {
        console.log(data.login);
        document.querySelector('.results').innerHTML =`
        <h1>User: ${data.login}</h1>
        <h2>Name: ${data.name}</h2>
        <img style="width: 200px;" src = "${data.avatar_url}">
        `;
        
    }
}

$( '.gitForm' ).on( 'submit', prueba )

