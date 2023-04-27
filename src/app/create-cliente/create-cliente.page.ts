import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

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

  constructor() { }

  ngOnInit() {
  }

}
