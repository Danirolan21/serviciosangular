import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {


    //PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO
    //HttpClient QUE NOS PERMITIRA REALIZAR LAS PELICIONES
    constructor(private _http: HttpClient) {}

    getPersonas(): Observable<any> {
        let url = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";

        //TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLUCION DE DATOS
        // 1) IGUAL QUE EN VUE, CREANDO UNA PROMESA POR ENCIMA DE ESTE METODO
        // 2) DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENT QUIEN SE SUSCRIBA

        return this._http.get(url);
    }
}