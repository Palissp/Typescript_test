(() => {
    const retirarDinero = (montoRetirar: number): Promise<Number> => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero(500)
        .then(montoActual => console.log(`Me quedan ${montoActual}`))
        // .catch(err => console.warn(err)); También valido pero el de abajo más resumido
        .catch(console.warn);

})();