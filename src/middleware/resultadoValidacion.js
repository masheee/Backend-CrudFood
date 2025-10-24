import { validationResult } from "express-validation"

const resultadoValidacion = (req, res, next) => {
    const errores = validationResult(req)
    //ocurrieron errores en la validacion
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    //continuar la ejecucion 
    next()
}

export default resultadoValidacion;