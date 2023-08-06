import jwt from "jsonwebtoken";
import { SECRETORPRIVATEKEY } from "../../config.js";

export const generarJWT  =  ( uid ="", roles ="" ) => {

    return new Promise( (resolve, reject) => {
  
   
        const payload = {uid, roles};

        jwt.sign( payload, SECRETORPRIVATEKEY, {
            expiresIn: '24h'
        }, ( err, token ) => {
 
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    }) 
}