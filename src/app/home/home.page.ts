import { Cliente } from './../models/Cliente.model';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClientesService, private router: Router) {

  }

  // Esse método fica oculto
  ionViewWillEnter() {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clienteService.getAll().subscribe(dados =>{
      this.listaClientes = dados;
    });
  }

  alterarCliente(id: number){
    this.router.navigateByUrl(`/alterar-cliente/${id}`);
  }

  excluirCliente(id: number){

  }
}
