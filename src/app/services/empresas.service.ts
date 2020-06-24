import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class EmpresasService {
  
  url: string;
  constructor(private hhtpClient: HttpClient) { 
    this.url = "https://pavii.ddns.net/api/empresas";
  }
  get(){
    return this.hhtpClient.get(this.url);
  }

}