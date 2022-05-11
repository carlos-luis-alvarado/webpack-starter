import '../css/componentes.css';

export const saludar = (nombre)=>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('H1');
    h1.innerText = `Hola, ${nombre} como estas?`;
    document.body.append(h1);
}

