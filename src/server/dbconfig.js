import mongoose from "mongoose";

try{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info('La conexion a la BASE DE DATOS fue exitosa')
    })
}catch(error){
    console.error(error)
}

export default mongoose;