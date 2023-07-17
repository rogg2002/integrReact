//expresiones regulares
// para chequear el ingreso de los campos si esta bien

// el simbolo ^ es para inicio de condiciones y el $ para el final
//a-zA-Z0-9 para poner campos minusculos y mayusculos con numeros(delimito las condiciones) {4,}el minimo de campos y el maximo
const regexp={
    name: /^[a-zA-Z}áéíóúÁÉÍÓÚ]{3,}$/,  
    email: /^[a-zA-Z0-9]{4,}@[a-zA-Z0-9]{4,}(\.com\b|\.net\b|\.org\b|\.mail\b|\.io\b)$/,  // puedo infgresar valores alfanumerico y numeros del 0 al 9 a partir de 4 caracteres y tiene que tener arroba
                                                                                        // tambioen le indico como termina la expresion que puede ser .com .net .org etc.
    age:/^[0-9]{2}$/   //edad puedo ingresar del 0 al 9 con dos valores
}


export const checkForm = (form) =>{
    let result={error:false}       // inicializamos variable result
    let fields= Object.entries(form)  //creamos un array con campos clave, valor

    for (let field of fields){      // iteramos
        
        let [name, value]= field

        result[name]= {error:false}   // valor inicial false
        const toNumber= parseInt(value)   //parsea en entero el valor

        if (value.length === 0)       // si no tiene elementos dentro true
            result[name].length = result[name].error = true

        if (!isNaN(toNumber))    
            value= toNumber

        const ok = regexp[name].test(value)  // booleano
        if (ok) continue        // si es true continuamos

        result.error= result[name].error = true

    }

    return result
}