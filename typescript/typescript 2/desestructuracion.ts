(() => {
    const Cap = {
        nombre: 'Steve',
        clave: 'Capitán America',
        poder: 'Droga'
    };
    // const ironman = {
    //     nombre: 'Iron',
    //     clave: 'Iron man',
    //     poder: 'Teconologia'
    // };
    const extraer = ({nombre, poder}: any) => {
        // const {nombre, clave, poder} = avenger;

        console.log(nombre);
        console.log(poder);

    }
    // extraer(ironman);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    // const [, , spiderman] = avengers;
    // console.log(thor);
    // console.log(ironman);


    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);

    }
    extraerArr( avengers );
})();