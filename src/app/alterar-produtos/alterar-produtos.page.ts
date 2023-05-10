import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-alterar-produtos',
  templateUrl: './alterar-produtos.page.html',
  styleUrls: ['./alterar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutosPage implements OnInit {

  id = 0;
  nome = '';
  descricao = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private produtosService: ProdutosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.produtosService.getOne(this.id).subscribe(retorno =>{
      this.nome = retorno.nome as string;
      this.descricao = retorno.descricao ? retorno.descricao : '';
    })
  }

  salvar(){
    const produtos: Produto = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao
    }
    this.produtosService.update(produtos).subscribe(dados => {
      alert("Produto alterado com sucesso " + dados.id)
      this.router.navigateByUrl('/produtos');
    })
  }

}
