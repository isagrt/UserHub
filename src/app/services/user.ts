import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; /* api publica */

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {  /* metodo que busca os usuariops e retorna um observable com uma lista de usuariors */
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> { /* aqui ele recebe um id como parametro e busca um usuário específico */
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
