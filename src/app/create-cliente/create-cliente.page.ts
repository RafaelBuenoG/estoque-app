import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/Cliente.model';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.page.html',
  styleUrls: ['./create-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CreateClientePage implements OnInit {

  nome= '';
  email= '';
  senha= '';
  confirmaSenha= '';
 
  constructor(private router: Router, private clientesService: ClientesService) { }

  ngOnInit() {
  }

  salvar(){
    if(this.senha === this.confirmaSenha){
      const cliente: Cliente = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }
      this.clientesService.create(cliente).subscribe(dados => {
        alert("Cliente inserido com sucesso" + dados.id)
        this.router.navigateByUrl('/home');
      })
    }else{
      alert("Senhas nao conferem!")
    }
  }
  
}
