import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../models/Produto.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutosPage {

  listaProdutos: Produto[] = [];

  constructor() { }

  buscarClientes(){
    this.ProdutosService.getAll().subscribe(dados =>{
      this.listaProdutos = dados as Produto[];
    });
  }

}
