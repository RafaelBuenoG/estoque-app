import { Cliente } from './../models/Cliente.model';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clienteService.getAll().subscribe(dados =>{
      this.listaClientes = dados;
    });
  }
}
