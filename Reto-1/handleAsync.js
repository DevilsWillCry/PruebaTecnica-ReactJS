export  function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('¡Datos Obtenidos!');
        }, 2000);
    })
}