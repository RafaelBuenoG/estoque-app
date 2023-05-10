import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { Produto } from '../models/Produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-create-produtos',
  templateUrl: './create-produtos.page.html',
  styleUrls: ['./create-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CreateProdutosPage implements OnInit {

  nome = '';
  descricao = '';

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
  }

  salvar(){
    const produtos: Produto = {
      nome: this.nome,
      descricao: this.descricao
    }
    this.produtosService.create(produtos).subscribe(dados => {
      alert("Produto inserido com sucesso " + dados.id)
      this.router.navigateByUrl('/produtos');
    })
  }

}
