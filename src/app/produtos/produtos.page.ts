import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../models/Produto.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ProdutosPage {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ionViewWillEnter() {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtosService.getAll().subscribe(dados =>{
      this.listaProdutos = dados as Produto[];
    });
  }

  alterarProdutos(id: number){
    this.router.navigateByUrl(`/alterar-produtos/${id}`);
  }

  excluirProdutos(){
    
  }
}
