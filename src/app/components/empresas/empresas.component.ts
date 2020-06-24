import { Component, OnInit } from '@angular/core';
import {Empresas} from '../../models/empresas';
import {EmpresasService} from '../../services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Titulo = "Empresas";
  Items: Empresas [] = [];

  constructor( private empresas: EmpresasService) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(){
    this.empresas.get().suscribe((res:Empresas[]) =>{
      this.Items = res;
    })
  }

}