
export const prueba = (req, res) => {
    console.log('desde el controlador de prueba')

    res.send('Hola desde el controlador de prueba')
}

export const crearProducto = (req, res)=>{
    res.send('Aqui tenemos que crear el producto')
}

