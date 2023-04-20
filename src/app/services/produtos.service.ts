import { Produto } from './../models/Produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url='http://localhost:3000/clientes'

  constructor( private http: HttpClient) { }

  create(produto: Produto){
    return this.http.post(this.url, produto);
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number){
    // return this.http.get(this.url + '/' + id);
    return this.http.get(`${this.url}/${id}`);
  }
  update(produto : Produto){
    return this.http.put(`${this.url}/${produto.id}`, produto);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  login(){}

  logout(){}

  exibirErro(erro: any): Observable<any>{
    alert('Deu erro!');
    console.log(erro);
    return EMPTY;
  }
}
