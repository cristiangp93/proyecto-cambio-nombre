import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CatastrosService {

  URL_BACKEND = environment.url_backend;
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado')
  }

  getAllTramites() {
    return this.http.get(this.URL_BACKEND);
  }

}
